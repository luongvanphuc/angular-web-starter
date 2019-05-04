import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_ENDPOINT } from '@app-constant';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  get(): Observable<HttpResponse<User>> {
    return this.http.get<User>(API_ENDPOINT + '/users', { observe: 'response' });
  }
}
