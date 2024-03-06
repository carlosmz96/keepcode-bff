import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  userLogged: boolean = false;

  constructor(
    private cookieService: CookieService
  ) {
    this.comprobarUsuario();
  }

  private comprobarUsuario(): void {
    if (this.cookieService.check('user')) {
      this.userLogged = true;
    }
  }

}
