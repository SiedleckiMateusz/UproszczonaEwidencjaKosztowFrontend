import { Component, OnInit } from '@angular/core';
import {PrzychodDoZapisu} from "../dto/przychodDoZapisu";
import {DatePipe} from "@angular/common";
import {PrzychodyService} from "../przychody.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-przychod-form',
  templateUrl: './przychod-form.component.html',
  styleUrls: ['./przychod-form.component.css']
})
export class PrzychodFormComponent implements OnInit {
  public przychodDoZapisu:PrzychodDoZapisu;

  constructor(public datepipe: DatePipe, private przychodService: PrzychodyService, private router:Router) {
    this.przychodDoZapisu = {
      date: new Date().toISOString().slice(0, 10),
      price: '',
      info: ''
    };
  }

  ngOnInit(): void {
  }

  zapisz() {
    console.log(this.przychodDoZapisu);
    console.log("Result");
    this.przychodService.savePrzychod(this.przychodDoZapisu).subscribe(data=>console.log(data))
    this.przychodDoZapisu = {
      date: new Date().toISOString().slice(0, 10),
      price: '',
      info: ''
    };
  }

  // stringDate() {
  //   return this.datepipe.transform(this.przychodDoZapisu.data,'dd.MM.yyyy');
  // }
}
