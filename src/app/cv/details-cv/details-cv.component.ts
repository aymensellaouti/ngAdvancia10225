import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { ToastrService } from "ngx-toastr";

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
  private id = this.acr.snapshot.params['id'];
  cv: Cv | null = this.cvService.findCvById(this.id);
  constructor() {
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
  delete() {
    if (this.cv) {
      if(this.cvService.deleteCv(this.cv)) {
        this.router.navigate([APP_ROUTES.cv]);
      } else {
        this.toastr.error(`Erreur lors de la suppression !! `)
      }

    }
  }
}
