import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBrandComponent } from './manager-brand.component';

describe('ManagerBrandComponent', () => {
  let component: ManagerBrandComponent;
  let fixture: ComponentFixture<ManagerBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
