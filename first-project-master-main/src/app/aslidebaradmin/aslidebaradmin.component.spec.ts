import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AslidebaradminComponent } from './aslidebaradmin.component';

describe('AslidebaradminComponent', () => {
  let component: AslidebaradminComponent;
  let fixture: ComponentFixture<AslidebaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AslidebaradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AslidebaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
