import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
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
  }
  // getSelectedCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
