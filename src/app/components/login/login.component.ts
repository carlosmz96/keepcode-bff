import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    private loginService: LoginService
  ) {}

  ngOnInit(): void {

  }

  /**
   * Login de usuario
   */
  public login(): void {
    this.loginService.login(this.usuario).subscribe(
      {
        next: res => {
          console.log(res);
        },
        error: err => {
          console.error('oops', err);
        }
      }
    );
  }

}
