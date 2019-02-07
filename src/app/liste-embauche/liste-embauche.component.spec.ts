import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmbaucheComponent } from './liste-embauche.component';

describe('ListeEmbaucheComponent', () => {
  let component: ListeEmbaucheComponent;
  let fixture: ComponentFixture<ListeEmbaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEmbaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
