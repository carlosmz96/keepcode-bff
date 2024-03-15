import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  /**
   * Cierre de sesión
   */
  public logout(): void {
    this.loginService.logout();
  }

}
