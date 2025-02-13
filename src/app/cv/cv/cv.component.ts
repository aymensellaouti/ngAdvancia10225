import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs: Cv[] = [];
  cvs$ = this.cvService.getCvsFromApi().pipe(
    catchError((e) => {
       this.toastr.error(
         `Problème d'accès au serveur les données sont fake merci de contacter l'admin`
       );
       return of(this.cvService.getFakeCvs());
    })
  );
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
  loggerService = inject(LoggerService);
  sayHelloService = inject(SayHelloService);
  toastr = inject(ToastrService);
  constructor() //private loggerService: LoggerService
  {
    this.loggerService.logger('Hello ODDO BHF');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech');
    // this.cvService.selectCv$.subscribe({
    //   next: (cv) => this.selectedCv = cv
    // })
    // this.cvService.getCvsFromApi().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs
    //   },
    //   error: (e) => {
    //     this.toastr.error(`Problème d'accès au serveur les données sont fake merci de contacter l'admin`);
    //     this.cvs = this.cvService.getFakeCvs();
    //   }
    // })
  }
  // getSelectedCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
