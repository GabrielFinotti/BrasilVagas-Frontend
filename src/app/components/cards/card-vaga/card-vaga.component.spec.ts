import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVagaComponent } from './card-vaga.component';

describe('CardVagaComponent', () => {
  let component: CardVagaComponent;
  let fixture: ComponentFixture<CardVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
