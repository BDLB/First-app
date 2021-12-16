export class User {
  constructor(
    public userEmail: string,
    public userId: string,
    private _userToken: string
  ) {}
}