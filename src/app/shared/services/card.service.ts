import { Injectable } from '@angular/core';
import { Card } from '../../model/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  protected url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }

  public getCards(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>(`${this.url}vagas`)
  }
}
