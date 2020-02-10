import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appSelectPlaceholder]'
})
export class SelectPlaceholderDirective implements OnInit {
  @Input() appSelectPlaceholder: string;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document) { }

  ngOnInit() {
    const option = document.createElement('option');

    option.innerHTML = this.appSelectPlaceholder;
    option.value = null;
    option.disabled = true;

    this.renderer.addClass(this.el.nativeElement, 'select-placeholder');
    this.renderer.insertBefore(this.el.nativeElement, option, this.el.nativeElement.firstChild);
  }

  @HostListener('change') onChange() {
    this.renderer.removeClass(this.el.nativeElement, 'select-placeholder');
  }
}
