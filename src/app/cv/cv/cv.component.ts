import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

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
  selectedCv: Cv | null = null;
  loggerService = inject(LoggerService);
  sayHelloService = inject(SayHelloService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor() //private loggerService: LoggerService
  {
    this.loggerService.logger('Hello ODDO BHF');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech')
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
