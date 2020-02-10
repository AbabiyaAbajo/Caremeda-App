import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { Component, TemplateRef } from '@angular/core';

import { ToastService } from '@core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: {'[class.ngb-toasts]': 'true'},
  // animations: [
  //   trigger('flyInOut', [
  //     state('inactive', style({
  //       opacity: 0,
  //     })),
  //     transition('inactive => active', animate('400ms ease-out', keyframes([
  //       style({
  //         transform: 'translateX(-50%) translateY(-20px)',
  //         opacity: 0,
  //       }),
  //       style({
  //         transform: 'translateX(-50%) translateY(0)',
  //         opacity: 1,
  //       }),
  //     ]))),
  //     // transition('active => removed', animate('400ms ease-out', keyframes([
  //     //   style({
  //     //     opacity: 1,
  //     //   }),
  //     //   style({
  //     //     transform: 'translate3d(100%, 0, 0) skewX(30deg)',
  //     //     opacity: 0,
  //     //   }),
  //     // ]))),
  //   ]),
  // ],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
  
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  showStandard(msg: string) {
    this.toastService.show(msg);
  }

  showSuccess(msg: string) {
    this.toastService.show(msg, { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(msg: string) {
    this.toastService.show(msg, { classname: 'bg-danger text-light', delay: 15000 });
  }
}
