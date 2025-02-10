import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input({
    alias: 'message',
    // transform: (data: string) => {
    //   return 'data transformé';
    // }
  })
  messageDePapa = '';

  @Output()
  messageDuFils = new EventEmitter<string>()

  sendMessage() {
    this.messageDuFils.emit('wallahi el 7md');
  }
}
