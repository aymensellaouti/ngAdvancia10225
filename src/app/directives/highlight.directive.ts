import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // Quels apparence je veux gérer
  @HostBinding('style.backgroundColor')
  bg = this.out;
  constructor() { }
  ngOnInit(): void {
    this.bg = this.out;
  }

  // Quel comportement
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
  }
}
