import { Input } from '@angular/core';
import { Directive, ElementRef,  HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont]',
})
export class FontDirective {
  @Input() color!: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click') onClick() {
    this.changeFontAndBorder('20px', '3px', 'solid');
    setTimeout(() => this.removeFontAndBorderChanges(), 1000);
  }

  private changeFontAndBorder(font: string, borderSize: string, border: string) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'fontSize', font);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border', `${borderSize} ${border} ${this.color}`);
  }
  private removeFontAndBorderChanges() {
    this.renderer2.removeStyle(this.elementRef.nativeElement, 'fontSize');
    this.renderer2.removeStyle(this.elementRef.nativeElement, 'border');
  }
}
