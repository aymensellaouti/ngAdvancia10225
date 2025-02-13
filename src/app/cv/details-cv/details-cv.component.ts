import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  authService = inject(AuthService);
  private id = this.acr.snapshot.params['id'];
  cv: Cv | null = null;
  constructor() {
    this.cvService.getCvByIdFromApi(this.id).subscribe({
      next: (cv) => this.cv = cv,
      error: (e) => this.router.navigate([APP_ROUTES.cv])
    })
  }
  delete() {
    if (this.cv) {
      // if(this.cvService.deleteCv(this.cv)) {
      //   this.router.navigate([APP_ROUTES.cv]);
      // } else {
      //   this.toastr.error(`Erreur lors de la suppression !! `)
      // }
      this.cvService.deleteCvByIdFromApi(this.cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toastr.error(`Erreur lors de la suppression !! `);
          console.log(e);
        }
      })
    }
  }
}
