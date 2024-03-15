import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public host: string = environment.api + environment.usuario;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtención de usuario por email
   * @param email Email de usuario
   * @returns Usuario obtenido
   */
  public obtenerUsuarioPorEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.host + '/usuarioPorEmail?email=' + email);
  }

}
