
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { Login } from './models/login'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

const endpoint = 'http;//'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('token'))
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: FormGroup;
  thisUser: any = [];

  constructor(private http: HttpClient, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.FormBuilder.group({
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }

  setToken(){
    localStorage.setItem('token', this.thisUser.token);
  }


  login(username: string, password: string) {
    return this.http.post<any>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', { username: username, password: password })
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('token', JSON.stringify(user.token));
        }
        return user;
      }));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  logout() {
   
    localStorage.removeItem('token');
}
}