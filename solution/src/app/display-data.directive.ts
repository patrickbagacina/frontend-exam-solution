import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayData]'
})
export class DisplayDataDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
