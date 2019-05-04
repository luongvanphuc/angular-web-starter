import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserService, User } from '@entities/user';
import { getFullName } from '@helpers';

@Injectable()
export class PrincipalService {
  private userIdentity: User;
  private authenticated = false;
  private authenticationState = new Subject<any>();

  constructor(
    private userService: UserService,
  ) { }

  authenticate(identity: any) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;

    if (this.authenticated) {
      this.userIdentity.fullName = getFullName(identity);
    }

    this.authenticationState.next(this.userIdentity);
  }

  getUserIdentity(): any {
    return this.userIdentity;
  }

  identify(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.userService.get().subscribe(({ body: account }) => {
        this.authenticate(account);
        resolve(this.userIdentity);
      }, error => {
        this.authenticate(null);
        reject(error);
      });
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getName(): string {
    return this.userIdentity ? this.userIdentity.fullName : '';
  }

  // getImageUrl(): string {
  //   return this.userIdentity ? this.userIdentity.picture : '';
  // }
}
