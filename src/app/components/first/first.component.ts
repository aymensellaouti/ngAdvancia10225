import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  isHidden = true;
  name = 'aymen';
  message = '';
  constructor() {
    // setInterval(() => {
    //   this.isHidden = ! this.isHidden;
    //   //this.name = (this.name == 'aymen')? 'Mohamed' : 'aymen';
    // }, 1500)
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
