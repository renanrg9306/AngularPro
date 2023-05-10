import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
@HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
@HostBinding('style.font-weight') fontWeight: string = 'normal';
  constructor() { }

  @HostListener('mouseover') mouseover(eventData:Event){
    this.backgroundColor = '#1CD6FE' ;
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
    this.fontWeight = 'normal';
  }
}
