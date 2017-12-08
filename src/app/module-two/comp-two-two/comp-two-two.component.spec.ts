import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTwoTwoComponent } from './comp-two-two.component';

describe('CompTwoTwoComponent', () => {
  let component: CompTwoTwoComponent;
  let fixture: ComponentFixture<CompTwoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTwoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
