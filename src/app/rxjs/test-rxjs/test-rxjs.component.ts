import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-rxjs',
  templateUrl: './test-rxjs.component.html',
  styleUrls: ['./test-rxjs.component.css'],
})
export class TestRxjsComponent {
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  //counter = 5;
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // Observateur Numéro 1
    this.observable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });

    // setTimeout(() => {
      // Observateur Numéro 2
      this.observable$
      // 5 4 3 2 1
      .pipe(
        map(valeurJdida => valeurJdida * 3),
        // 15 12 9 6 3
        filter( x => ! (x%2))
        //12 6
      )
      .subscribe({
        next: (val) => {
          this.toastr.info('' + val);
        },
        complete: () => {
          this.toastr.error('BOOOOOM !!!!!');
        },
      });
    // }, 3000);

    // Observateur Numéro 3
    // this.observable$.subscribe({
    //   next: (data) => {
    //     this.counter = data;
    //   },
    // });
  }

}
