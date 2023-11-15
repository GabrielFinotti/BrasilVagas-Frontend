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

  protected cards!: Array<Card>;
  private conf!: boolean;

  constructor(private cardsService: CardService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(
      (res) => {
        this.conf = false;
        this.confirm.emit(this.conf);
        this.cards = res;
      },
      (erro) => {
        this.conf = true;
        this.confirm.emit(this.conf);
        console.error(
          `Não foi possível se comunicar com o servidor, erro: ${erro.message}`
        );
      }
    );
  }
}
