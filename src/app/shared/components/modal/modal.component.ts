import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  @Input() modalIdentifier: string;
  @Input() modalTitle: string;
  @Input() modalHeaderBg: string;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() { }

  open() {
    this.ngxSmartModalService.getModal(this.modalIdentifier).open();
  }

  close() {
    this.ngxSmartModalService.getModal(this.modalIdentifier).close();
  }
}
