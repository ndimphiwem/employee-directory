import { Component, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { SideNavService } from './_services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html'
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Input() id = '';

  private element: any;
  secondaryLinks: any;
  links: any;
  body: any;
  constructor(
    public sidenav: SideNavService,
    readonly el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.element = el.nativeElement;

    this.links = [{ accountLinks: [] }];
  }

  ngOnInit(): void {
    if (!this.id) {
      return;
    }
    try {
      document.body.appendChild(this.element);
      this.body = this.el.nativeElement.ownerDocument.lastChild.lastChild;
      this.sidenav.add(this);
    } catch (error) {
      console.log('server side');
    }
  }

  ngOnDestroy(): void {
    try {
      document.body.removeChild(this.element);
      this.sidenav.remove(this.id);
    } catch (error) {
      console.log('server side');
    }
  }

  open() {
    this.links = this.secondaryLinks;
    this.renderer.addClass(this.body, 'c-sidenav--open');
  }

  close() {
    this.renderer.removeClass(this.body, 'c-sidenav--open');
  }
}
