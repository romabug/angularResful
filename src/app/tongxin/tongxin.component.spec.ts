import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongxinComponent } from './tongxin.component';

describe('TongxinComponent', () => {
  let component: TongxinComponent;
  let fixture: ComponentFixture<TongxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
