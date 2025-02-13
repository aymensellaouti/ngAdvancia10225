import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';


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
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable();
  http = inject(HttpClient);
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvsFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  getCvByIdFromApi(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvByIdFromApi(id: number): Observable<{count: number}> {
    return this.http.delete<{ count: number }>(APP_API.cv + id);
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

  /**
   * Permet d'ajouter un cv au flux des cvs sélectionnéss
   * @param cv le cv sélectionné
   */
  selectCv(cv: Cv): void {
    this.selectCvSubject$.next(cv);
  }
}
