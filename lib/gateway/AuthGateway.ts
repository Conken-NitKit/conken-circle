import { User } from "lib/entity";
import { AuthGateway } from "lib/interfaces/gateway/AuthGateway";
import {
  FirebaseAuthState,
  FirebaseClient,
} from "lib/interfaces/infrastructure/FirebaseClient";

export class AuthGatewayImpl extends AuthGateway {
  constructor(private firebaseClient: FirebaseClient) {
    super();
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.firebaseClient.signInWithEmailAndPassword(email, password);
  }

  async signUp(
    email: string,
    username: string,
    password: string
  ): Promise<void> {
    await this.firebaseClient.createUserWithEmailAndPassword(email, password);
    const userId = this.firebaseClient.getUid();
    this.firebaseClient.postUserInfo({
      id: userId,
      mail: email,
      name: username,
      biography: "",
      iconImage: null,
      follows: [],
      followers: [],
      userListIds: [],
      bookMarks: [],
    });
  }

  onAuthStateChanged(fn: (nreState: FirebaseAuthState) => unknown): () => void {
    return this.firebaseClient.onAuthStateChanged(fn);
  }

  getAuthState(): FirebaseAuthState {
    return this.firebaseClient.getAuthState();
  }
}
