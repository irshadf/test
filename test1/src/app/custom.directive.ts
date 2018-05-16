import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elem : ElementRef, private rend : Renderer) { 
    this.rend.setElementClass(this.elem.nativeElement,"alert-warning",true);
    //this.rend.setElementStyle(this.elem.nativeElement, 'color', "Red");
  }

  @HostListener('mouseover')
  onmouseover(){
    this.rend.setElementStyle(this.elem.nativeElement,"font-size","36px");    
  }

  @HostListener("mouseleave")
  onmouseleave(){
    this.rend.setElementStyle(this.elem.nativeElement,"font-size","14px");
  }
}
