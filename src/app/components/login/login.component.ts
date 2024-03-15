import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../../models/Usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('jwt')) {
      this.router.navigate(['inicio']);
    }
  }

  /**
   * Login de usuario
   */
  public login(): void {
    this.loginService.login(this.usuario);
  }

}
