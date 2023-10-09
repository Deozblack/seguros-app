import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetHtml]'
})
export class SetHtmlDirective {

  private htmlElement!:ElementRef<HTMLElement>;
  private _html!: string;

  @Input() set htmlElements( value: string  ){
    this._html = value;
    this.setHtml();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setHtml(){
    this.htmlElement.nativeElement.innerHTML = this._html
  }

}
