import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDomainComponent } from './modal-domain.component';

describe('ModalDomainComponent', () => {
  let component: ModalDomainComponent;
  let fixture: ComponentFixture<ModalDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDomainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
