import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOneOneComponent } from './comp-one-one.component';

describe('CompOneOneComponent', () => {
  let component: CompOneOneComponent;
  let fixture: ComponentFixture<CompOneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompOneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
