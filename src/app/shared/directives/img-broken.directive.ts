import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error')
  HandleError(): void {
    const native = this.host.nativeElement;
    native.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png'
  }

  constructor(private host: ElementRef) {
  }

}
