import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeurComponent } from './coleur.component';

describe('ColeurComponent', () => {
  let component: ColeurComponent;
  let fixture: ComponentFixture<ColeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
