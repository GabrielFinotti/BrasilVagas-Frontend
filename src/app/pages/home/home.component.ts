import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  protected confirm!: boolean;

  protected getConfirm(event: boolean) {
    this.confirm = event;
  }
}
