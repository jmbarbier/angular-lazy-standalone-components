import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTwoOneComponent } from './comp-two-one.component';

describe('CompTwoOneComponent', () => {
  let component: CompTwoOneComponent;
  let fixture: ComponentFixture<CompTwoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTwoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
