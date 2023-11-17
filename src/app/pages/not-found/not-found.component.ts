import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  protected cont!: number;

  constructor(private router: Router) {
    this.cont = 5;
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.cont--;

      if (this.cont < 0) {
        clearInterval(interval);
        this.router.navigateByUrl('home');
      }
    }, 1000);
  }
}
