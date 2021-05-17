import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStatiscalComponent } from './manager-statiscal.component';

describe('ManagerStatiscalComponent', () => {
  let component: ManagerStatiscalComponent;
  let fixture: ComponentFixture<ManagerStatiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerStatiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStatiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
