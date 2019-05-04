import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

import { API_ENDPOINT } from '@app-constant';
import { PrincipalService } from './principal.service';

const AUTH_TOKEN_KEY = 'authenticationToken';

@Injectable()
export class AuthJWTService {
  constructor(
    private principalService: PrincipalService,
    private localStorage: LocalStorageService,
    private http: HttpClient,
  ) { }

  getToken() {
    return this.localStorage.retrieve(AUTH_TOKEN_KEY);
  }

  login(credentials): Observable<any> {
    const data = {
      email: credentials.email,
      password: credentials.password,
    };
    return this.http.post(API_ENDPOINT + '/signin', data, { observe: 'response' }).pipe(
      map((resp) => {
        return this.authSuccessHandler(resp);
      }),
    );
  }

  private authSuccessHandler(response: any) {
    const { token, user } = response.body;
    this.principalService.authenticate(user);
    this.storeAuthenticationToken(token);
  }

  storeAuthenticationToken(jwt) {
    this.localStorage.store(AUTH_TOKEN_KEY, jwt);
  }

  logout() {
    this.localStorage.clear(AUTH_TOKEN_KEY);
  }
}
