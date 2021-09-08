import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

//Decorater
@Directive({
  selector: '[appColorizer]' //attribute selector
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { //Dependancy Injection

    console.group('Inside Colorizer');
    console.log(this.elRef.nativeElement);

    let el = this.elRef.nativeElement;
    this.renderer.setStyle(el, 'background-color', 'blue')
    this.renderer.setStyle(el, 'height', '150px')

    // Change the text color
    // learn about hostlistener and HostBinding 
  }

  @HostListener('click', ['$event'])
  handleDivClick(event: any){
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'lightblue');
  }

}
