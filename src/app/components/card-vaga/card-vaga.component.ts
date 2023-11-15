import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.scss'],
})
export class CardVagaComponent implements OnInit {
  @Output() protected confirm = new EventEmitter();

  public cards!: Array<Card>;
  protected conf!: boolean;

  constructor(private cardsService: CardService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(
      (res) => {
        // Temporizador pra debug de visualização, não presente na versão de produção
        setTimeout(() => {
          this.conf = false;
          this.confirm.emit(this.conf);
          this.cards = res;
        }, 2500);
      },
      (erro) => {
        this.conf = true;
        this.confirm.emit(this.conf);
      }
    );
  }
}
