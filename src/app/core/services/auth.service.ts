import { Injectable } from '@angular/core';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
 } from "firebase/auth";
import { Observable } from 'rxjs';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // User observable
  user$: Observable<User | null>;

  private auth = getAuth();
  private db = getDatabase();

  constructor() {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = new Observable<User | null>((subscriber) => {
      onAuthStateChanged(this.auth, (user) => subscriber.next(user));
    });
  }

  // Sign in with email/password
  async signIn(email: string, password: string) {
    try {
      const credential = await signInWithEmailAndPassword(this.auth, email, password);
      return credential;
    } catch (error) {
      console.log(error);
      throw error; // Propagate error up
    }
  }

  // Sign up with email/password
  async signUp(email: string, password: string, name: string, lastName1: string, lastName2: string) {
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password);
      await set(ref(this.db, '/users/' + credential.user.uid), {
        name,
        lastName1,
        lastName2,
        email
      });
      return credential;
    } catch (error) {
      console.log(error);
      throw error; // Propagate error up
    }
  }

  // Sign out
  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error);
      throw error; // Propagate error up
    };
  };

  // Sign in with Google
  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(this.auth, provider);
      return credential;
    } catch (error) {
      console.log(error);
      throw error;
    };
  };

  // Send password reset email
  async sendPasswordResetEmail(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      // El correo electrónico de restablecimiento de contraseña se ha enviado con éxito
    } catch (error) {
      console.log(error);
      throw error; // Propagate error up
    }
  }
};
