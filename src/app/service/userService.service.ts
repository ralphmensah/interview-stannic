import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../dashboard/table/table.component';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(this.url);
  }
}
