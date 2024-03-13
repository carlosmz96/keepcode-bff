import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public userLogged: boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    this.comprobarUsuario();
  }

  /**
   * Comprueba si el usuario está logado
   */
  private comprobarUsuario(): void {
    if (this.cookieService.check('user')) {
      this.userLogged = true;
    } else {
      this.router.navigate(['login']);
    }
  }

}
