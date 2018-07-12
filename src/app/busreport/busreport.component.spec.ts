import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusreportComponent } from './busreport.component';

describe('BusreportComponent', () => {
  let component: BusreportComponent;
  let fixture: ComponentFixture<BusreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
