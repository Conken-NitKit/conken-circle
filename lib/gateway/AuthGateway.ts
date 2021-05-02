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

  async signUp(email: string, _: string, password: string): Promise<void> {
    await this.firebaseClient.createUserWithEmailAndPassword(email, password);
  }

  onAuthStateChanged(fn: (nreState: FirebaseAuthState) => unknown): () => void {
    return this.firebaseClient.onAuthStateChanged(fn);
  }

  getAuthState(): FirebaseAuthState {
    return this.firebaseClient.getAuthState();
  }
}
