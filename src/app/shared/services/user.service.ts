import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosInterface } from 'src/app/core/interface/user.interface';
import { environtment } from 'src/environment/environtment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environtment.url_user;
  constructor(
    private http: HttpClient
  ) {

  }


  getUserData(id:number) {
    return this.http.get<UsuariosInterface>(`${this.url}${id}`);
  }
}
