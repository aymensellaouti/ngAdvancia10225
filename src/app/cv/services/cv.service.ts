import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    new Cv(
      1,
      'Dallagi',
      'Marwa',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(2, 'Lachkham', 'Anas', 'Ingénieur', '1234', 20, '             '),
    new Cv(3, 'Karray', 'Amine', 'Ingénieur', '1234', 20, ''),
    new Cv(
      4,
      'Bouday',
      'Youssef',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      5,
      'Raissi',
      'Malek',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      6,
      'Gassara',
      'Mohamed',
      'Ingénieur',
      '1234',
      20,
      'rotating_card_profile2.png'
    ),
  ];

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
