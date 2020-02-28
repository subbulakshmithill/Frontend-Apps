import { Directive, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'skyblue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
