import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzhuOutletComponent } from './fuzhu-outlet.component';

describe('FuzhuOutletComponent', () => {
  let component: FuzhuOutletComponent;
  let fixture: ComponentFixture<FuzhuOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzhuOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzhuOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
