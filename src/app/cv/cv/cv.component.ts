import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'Dallagi',
      'Marwa',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      2,
      'Lachkham',
      'Anas',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile2.png'
    ),
  ];
  selectedCv: Cv | null = null;
}
