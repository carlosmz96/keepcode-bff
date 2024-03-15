import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as JWT from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host: string = environment.api + environment.auth;

  public token: any;
  public expirationData: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  /**
   * Login de usuario
   * @param usuario Usuario que incluye email y contraseña
   * @returns Usuario autenticado
   */
  public login(usuario: Usuario): void {
    this.http.post<any>(
      this.host + '/login',
      { username: usuario.email, password: usuario.password }
    ).subscribe(
      {
        next: res => {
          this.token = res;
          console.log(this.token);

          // JWT
          this.cookieService.set('jwt', this.token.token);

          // JWT decodificado
          const decode = JWT.jwtDecode(JSON.stringify(this.token));

          // Tiempo de expiración
          this.expirationData = decode.exp! * 1000 - Date.now();

          // Email usuario
          this.cookieService.set('userEmail', decode.sub!);

          this.getUserLogged();
        },
        error: err => {
          console.error('oops', err);
        }
      }
    );
  }

  /**
   * Obtener usuario logado
   */
  private getUserLogged(): void {
    const email: string = this.cookieService.get('userEmail');

    this.usuarioService.obtenerUsuarioPorEmail(email).subscribe(
      {
        next: (usuario: Usuario) => {
          // Usuario
          this.cookieService.set('user', JSON.stringify(usuario));

          // Configuración para finalización de sesión
          setTimeout(() => {
            this.cookieService.deleteAll();
          }, this.expirationData);

          // Redirección a inicio
          this.router.navigate(['inicio']);
        },
        error: err => {
          console.error('oops', err);
        }
      }
    );
  }

  /**
   * Obtención del token
   * @returns Token
   */
  public getToken(): string {
    return this.cookieService.get('jwt');
  }

  public logout(): void {
    //TODO implementar cierre de sesión
  }

}
