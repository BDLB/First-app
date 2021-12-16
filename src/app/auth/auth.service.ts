import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { IAuthResponseData } from "../shared/interfaces/auth-response.interface";
import { User } from "./user";
import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn:"root"
})
export class AuthService {
  user = new Subject<User>();

  constructor(
    private angularAuth: AngularFireAuth,
    private _httpClient: HttpClient
  ) {
    this.angularAuth.authState.subscribe((firebaseUser) => {
  });
  }

  signIn(userEmail: string, userPassword: string, rememberUser: boolean) {
    firebase.auth().setPersistence(
      rememberUser 
        ? firebase.auth.Auth.Persistence.LOCAL
        : firebase.auth.Auth.Persistence.SESSION
    )
    return from(
      this.angularAuth.signInWithEmailAndPassword(userEmail, userPassword)
    ).pipe(
        tap((loggedUserData) => {
          console.log(loggedUserData.user['email'])
          this.handleAuthentication(loggedUserData.user['email'], loggedUserData.user['uid'], loggedUserData.user['refreshToken'])
        })
      )
  }

  handleAuthentication(
      email: string, 
      localId: string,
      tokenId: string
  ) {
    const user = new User(email, localId, tokenId);
    this.user.next(user);
  }
}