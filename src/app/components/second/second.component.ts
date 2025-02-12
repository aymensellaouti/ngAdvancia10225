import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `<p>Second Works</p>`,
  styles: [`

  `]
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
}
