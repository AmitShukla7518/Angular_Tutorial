import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {
  @Input("format") format: any



constructor( private Ele: ElementRef) {
   Ele.nativeElement.style.color = "Red"
}

@HostListener('input') Input(){
  let value:string = this.Ele.nativeElement.value
  this.Ele.nativeElement.value = value.toUpperCase()
console.warn(value);
}







}
