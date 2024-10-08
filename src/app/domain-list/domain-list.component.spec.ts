import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainListComponent } from './domain-list.component';

describe('DomainListComponent', () => {
  let component: DomainListComponent;
  let fixture: ComponentFixture<DomainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
