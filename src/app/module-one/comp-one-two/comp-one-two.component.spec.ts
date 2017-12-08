import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOneTwoComponent } from './comp-one-two.component';

describe('CompOneTwoComponent', () => {
  let component: CompOneTwoComponent;
  let fixture: ComponentFixture<CompOneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompOneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
