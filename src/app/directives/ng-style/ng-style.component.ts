import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent {
  color = 'lightblue';
  // @Input()
  // customStyle = {
  //   color: this.color,
  //   backgroundColor: 'red',
  //   fontFamily: 'garamond',
  // };
}
