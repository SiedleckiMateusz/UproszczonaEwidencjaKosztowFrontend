import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PrzychodyService} from "../przychody.service";
import {Przychod} from "../dto/przychod";
import {DaneDoTabeli} from "../dto/daneDoTabeli";

@Component({
  selector: 'app-przychod-list',
  templateUrl: './przychod-list.component.html',
  styleUrls: ['./przychod-list.component.css']
})
export class PrzychodListComponent implements OnInit {

  public daneDoTabeli: DaneDoTabeli = {przychodyDoTabeliList: [],przychodCalkowity:0,sredniaDziennie:0};

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private przychodyService:PrzychodyService
  ) { }

  ngOnInit(): void {
    this.przychodyService.getPrzychody().subscribe(data => this.daneDoTabeli = data);
  }

  onSelect(przychod: any) {
    this.router.navigate([przychod.id], {relativeTo: this.activatedRouter});
  }

}
