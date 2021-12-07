export class User {
  constructor(
    public userEmail: string,
    public userId: string,
    private _userToken: string,
    private _expireTokenDate: Date,
  ) {}

  get token() {
    if(!this._expireTokenDate || new Date() > this._expireTokenDate) {
      return null;
    }
    return this._userToken;
  }
}