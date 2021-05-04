import { User } from "lib/entity";

export const FIREBASE_AUTH_STATE = {
  PENDING: "pending",
  NOT_AUTHORIZED: "not_authorized",
  AUTHORIZED: "authorized",
} as const;
export type FirebaseAuthState = typeof FIREBASE_AUTH_STATE[keyof typeof FIREBASE_AUTH_STATE];

export abstract class FirebaseClient {
  abstract createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void>;

  abstract signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void>;

  abstract onAuthStateChanged(
    fn: (newState: FirebaseAuthState) => unknown
  ): () => void;

  abstract getAuthState(): FirebaseAuthState;
  abstract getIdToken(): Promise<string>;
  abstract getUid(): string;

  abstract postUserInfo(user: User): void;
}
