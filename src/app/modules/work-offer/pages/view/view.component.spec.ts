import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOfferViewComponent } from './view.component';

describe('WorkOfferViewComponent', () => {
  let component: WorkOfferViewComponent;
  let fixture: ComponentFixture<WorkOfferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOfferViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
