import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHistoryOderComponent } from './manager-history-oder.component';

describe('ManagerHistoryOderComponent', () => {
  let component: ManagerHistoryOderComponent;
  let fixture: ComponentFixture<ManagerHistoryOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHistoryOderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHistoryOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
