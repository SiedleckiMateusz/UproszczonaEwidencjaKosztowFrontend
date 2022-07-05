import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DaneDoTabeli} from "./dto/daneDoTabeli";

@Injectable({
  providedIn: 'root'
})
export class PrzychodyService {
  private mainURL = 'https://ewidencja-nat.herokuapp.com';
  private pobierzDaneDoTabeliURL = '/przychod/pobierzDaneDoTabeli';

  constructor(private http: HttpClient) { }

  getPrzychody(): Observable<DaneDoTabeli>{
    return this.http.get<DaneDoTabeli>(this.mainURL+this.pobierzDaneDoTabeliURL);
  }
}
