import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router = inject(Router);
  toastr = inject(ToastrService);
  authService = inject(AuthService);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: () => {
        this.toastr.error(`Problème d'authentification merci de vérifier vos crédentials`)
      }
    })
  }

}
