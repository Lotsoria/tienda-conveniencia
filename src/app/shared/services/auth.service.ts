import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import {
  LoginRequest,
  registerRequest,
} from 'src/app/core/interface/login.interface';
import { UsuariosInterface } from 'src/app/core/interface/user.interface';
import { environtment } from 'src/environment/environtment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  currentUserData: BehaviorSubject<UsuariosInterface> =
    new BehaviorSubject<UsuariosInterface>({
      id: '',
      username: '',
      lastname: '',
      firstname: '',
      country: '',
      role: '',
    });
  get userData(): Observable<UsuariosInterface> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  private url = environtment.url_login;
  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.url}login`, credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem('authToken', userData.token);
        sessionStorage.setItem('i', userData.id);
        let data = {
          username: userData.username,
          lastname: userData.lastname,
          firstname: userData.firstname,
          country: userData.country,
          role: userData.role,
        };
        console.log('Login successful and token stored!', data);
        this.currentUserData.next(data as UsuariosInterface);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout(): void {

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('i');
    console.log('Logout successful and token removed!');
}


  register(data: registerRequest) {
    return this.http.post<any>(`${this.url}register`, data).subscribe({
      next: (response) => {
        if (response.token) {
          sessionStorage.setItem('authToken', response.token);
          console.log('Registration successful and token stored!');
        }
        console.log(response);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      },
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(
      () => new Error('Algo falló. Por favor intente nuevamente.')
    );
  }
}
