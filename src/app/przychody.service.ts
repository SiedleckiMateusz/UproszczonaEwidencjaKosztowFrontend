import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DaneDoTabeli} from "./dto/daneDoTabeli";
import {environment} from '../environments/environment';
import {PrzychodDoZapisu} from "./dto/przychodDoZapisu";

@Injectable({
  providedIn: 'root'
})
export class PrzychodyService {
  private pobierzDaneDoTabeliURL = '/przychod/pobierzDaneDoTabeli';
  private savePrzychodURL = '/przychod';

  constructor(private http: HttpClient) { }

  getPrzychody(miesiac: string, rok:string): Observable<DaneDoTabeli>{
    let data = {
      miesiac: miesiac,
      rok: rok
    };
    return this.http.get<DaneDoTabeli>(environment.apiUrl+this.pobierzDaneDoTabeliURL,{params: data});
  }

  savePrzychod(przychod: PrzychodDoZapisu): Observable<PrzychodDoZapisu>{
    return this.http.post<PrzychodDoZapisu>(environment.apiUrl+this.savePrzychodURL,przychod);
  }
}
