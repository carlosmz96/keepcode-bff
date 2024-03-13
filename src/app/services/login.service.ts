import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host: string = 'http://localhost:8080/auth';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Login de usuario
   * @param usuario Usuario que incluye email y contraseña
   * @returns Usuario autenticado
   */
  public login(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.host + '/login', { username: usuario.email, password: usuario.password });
  }

}
