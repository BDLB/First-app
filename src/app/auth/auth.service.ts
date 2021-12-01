import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuthResponseData } from "../shared/interfaces/auth-response.interface";

@Injectable({
  providedIn:"root"
})
export class AuthService {

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
    )
  }
}