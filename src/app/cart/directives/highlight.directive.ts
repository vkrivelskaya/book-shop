import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
