import { FirebaseAuthState } from "../infrastructure/FirebaseClient";

export abstract class AuthGateway {
  abstract signIn(email: string, password: string): Promise<void>;
  abstract signUp(
    emai: string,
    userName: string,
    password: string
  ): Promise<void>;

  abstract onAuthStateChanged(
    fn: (newState: FirebaseAuthState) => unknown
  ): () => void;

  abstract getAuthState(): FirebaseAuthState;
}
