import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { IAuthResponseData } from "../shared/interfaces/auth-response.interface";
import { User } from "./user";

@Injectable({
  providedIn:"root"
})
export class AuthService {
  user = new Subject<User>();

  constructor(
    private _httpClient: HttpClient
  ) {}

  signIn(userEmail: string, userPassword: string) {
    return this._httpClient.post<IAuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1InwoThQf2tKbOPUYT4sW1xfORVmuezU",
      {
        email: userEmail,
        password: userPassword,
        returnSecureToken: true
      }
    ).pipe(
      tap((respData) => {
        this.handleAuthentication(respData.email, respData.localId, respData.idToken, respData.expiresIn)
      })
    )
  }

  handleAuthentication(
      email: string, 
      localId: string,
      tokenId: string,
      expiresInDate: string
  ) {
    const tokenExpirationDate = new Date(new Date().getTime() + +expiresInDate);
    const user = new User(email, localId, tokenId, tokenExpirationDate);
    this.user.next(user);
  }
}