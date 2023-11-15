import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVagaComponent } from './card-vaga.component';

describe('CardVagaComponent', () => {
  let component: CardVagaComponent;
  let fixture: ComponentFixture<CardVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVagaComponent]
    });
    fixture = TestBed.createComponent(CardVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
