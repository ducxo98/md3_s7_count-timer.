import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTimeComponent } from './count-time.component';

describe('CountTimeComponent', () => {
  let component: CountTimeComponent;
  let fixture: ComponentFixture<CountTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
