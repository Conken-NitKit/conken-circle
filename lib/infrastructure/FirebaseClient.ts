import firebase from "firebase/app";

import "firebase/auth";
import {
  FirebaseAuthState,
  FirebaseClient,
  FIREBASE_AUTH_STATE,
} from "lib/interfaces/infrastructure/FirebaseClient";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export class FirebaseClientImpl extends FirebaseClient {
  private authState: FirebaseAuthState = FIREBASE_AUTH_STATE.PENDING;
  private onAuthStateChangedListeners: Set<
    (newState: FirebaseAuthState) => unknown
  > = new Set();

  constructor() {
    super();
    app.auth().onAuthStateChanged((user) => this.handleAuthStateChanged(user));
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    await app.auth().createUserWithEmailAndPassword(email, password);
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    await app.auth().signInWithEmailAndPassword(email, password);
  }

  getAuthState(): FirebaseAuthState {
    return this.authState;
  }

  getIdToken(): Promise<string> {
    if (this.authState !== FIREBASE_AUTH_STATE.AUTHORIZED)
      throw new Error("User is not logged in!");
    return app.auth().currentUser.getIdToken();
  }

  onAuthStateChanged(fn: (newState: FirebaseAuthState) => unknown): () => void {
    this.onAuthStateChangedListeners.add(fn);
    return () => {
      this.onAuthStateChangedListeners.delete(fn);
    };
  }

  private emitOnAuthStateChanged(): void {
    this.onAuthStateChangedListeners.forEach((l) => l(this.authState));
  }

  private handleAuthStateChanged(user: firebase.User): void {
    if (user) {
      this.authState = FIREBASE_AUTH_STATE.AUTHORIZED;
    } else {
      this.authState = FIREBASE_AUTH_STATE.NOT_AUTHORIZED;
    }
    this.emitOnAuthStateChanged();
  }
}
