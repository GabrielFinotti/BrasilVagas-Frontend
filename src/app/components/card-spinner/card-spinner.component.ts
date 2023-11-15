import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card-spinner',
  templateUrl: './card-spinner.component.html',
  styleUrls: ['./card-spinner.component.scss'],
})
export class CardSpinnerComponent implements OnChanges {
  @Input() public confirm!: boolean;

  protected cardSpinner!: Array<number>;
  public showCards!: boolean;

  constructor() {
    this.cardSpinner = [0, 1, 2, 3, 4, 5, 6, 7];
    this.showCards = false;
  }

  ngOnChanges(): void {
    if (this.confirm == false) {
      this.showCards = true;
    } else {
      this.showCards = false;
    }
  }
}
