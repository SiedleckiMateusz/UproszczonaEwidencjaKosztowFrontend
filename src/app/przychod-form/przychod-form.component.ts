import { Component, OnInit } from '@angular/core';
import {PrzychodDoZapisu} from "../dto/przychodDoZapisu";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-przychod-form',
  templateUrl: './przychod-form.component.html',
  styleUrls: ['./przychod-form.component.css']
})
export class PrzychodFormComponent implements OnInit {
  public przychodDoZapisu:PrzychodDoZapisu;

  constructor(public datepipe: DatePipe) {
    this.przychodDoZapisu = {
      data: new Date(),
      kwota: 0,
      opis: ''
    }
  }

  ngOnInit(): void {
    console.log("Próbuję ustawić datę");
    console.log(document.getElementById("dataDodania"));
    document.getElementById("dataDodania")!.setAttribute("value","2014-01-01");
  }

  zapisz() {
    console.log(this.przychodDoZapisu);
  }

  stringDate() {
    return this.datepipe.transform(this.przychodDoZapisu.data,'dd.MM.yyyy');
  }
}
