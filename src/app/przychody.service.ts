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
  private przychodURL = environment.apiUrl+"/przychod";
  private pobierzDaneDoTabeliURL = '/pobierzDaneDoTabeli';

  constructor(private http: HttpClient) { }

  getPrzychody(miesiac: string, rok:string): Observable<DaneDoTabeli>{
    let data = {
      miesiac: miesiac,
      rok: rok
    };
    return this.http.get<DaneDoTabeli>(this.przychodURL+this.pobierzDaneDoTabeliURL,{params: data});
  }

  savePrzychod(przychod: PrzychodDoZapisu): Observable<PrzychodDoZapisu>{
    return this.http.post<PrzychodDoZapisu>(this.przychodURL,przychod);
  }

  deletePrzychod(id: number) {
    return this.http.delete(this.przychodURL+"/"+id);
  }
}
