import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-przychod-list',
  templateUrl: './przychod-list.component.html',
  styleUrls: ['./przychod-list.component.css']
})
export class PrzychodListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(przychod: any) {
    this.router.navigate(['/przychody',przychod.id]);
  }

  przychodyList = [
    {
      "id": 1,
      "data": "2022-01-04",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 70,
      "kwotaNarastajacoOdPoczatku": 70,
      "info": null
    },
    {
      "id": 2,
      "data": "2022-01-20",
      "kwota": 140,
      "kwotaNarastajacoMiesiecznie": 210,
      "kwotaNarastajacoOdPoczatku": 210,
      "info": null
    },
    {
      "id": 3,
      "data": "2022-01-21",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 270,
      "kwotaNarastajacoOdPoczatku": 270,
      "info": null
    },
    {
      "id": 4,
      "data": "2022-01-22",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 340,
      "kwotaNarastajacoOdPoczatku": 340,
      "info": null
    },
    {
      "id": 5,
      "data": "2022-02-11",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 60,
      "kwotaNarastajacoOdPoczatku": 400,
      "info": null
    },
    {
      "id": 6,
      "data": "2022-02-11",
      "kwota": 130,
      "kwotaNarastajacoMiesiecznie": 190,
      "kwotaNarastajacoOdPoczatku": 530,
      "info": null
    },
    {
      "id": 7,
      "data": "2022-02-12",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 260,
      "kwotaNarastajacoOdPoczatku": 600,
      "info": null
    },
    {
      "id": 8,
      "data": "2022-02-16",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 320,
      "kwotaNarastajacoOdPoczatku": 660,
      "info": null
    },
    {
      "id": 9,
      "data": "2022-02-25",
      "kwota": 50,
      "kwotaNarastajacoMiesiecznie": 370,
      "kwotaNarastajacoOdPoczatku": 710,
      "info": null
    },
    {
      "id": 10,
      "data": "2022-02-25",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 440,
      "kwotaNarastajacoOdPoczatku": 780,
      "info": null
    },
    {
      "id": 11,
      "data": "2022-02-26",
      "kwota": 90,
      "kwotaNarastajacoMiesiecznie": 530,
      "kwotaNarastajacoOdPoczatku": 870,
      "info": null
    },
    {
      "id": 12,
      "data": "2022-03-03",
      "kwota": 120,
      "kwotaNarastajacoMiesiecznie": 120,
      "kwotaNarastajacoOdPoczatku": 990,
      "info": null
    },
    {
      "id": 13,
      "data": "2022-03-03",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 180,
      "kwotaNarastajacoOdPoczatku": 1050,
      "info": null
    },
    {
      "id": 14,
      "data": "2022-03-11",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 240,
      "kwotaNarastajacoOdPoczatku": 1110,
      "info": null
    },
    {
      "id": 15,
      "data": "2022-03-15",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 300,
      "kwotaNarastajacoOdPoczatku": 1170,
      "info": null
    },
    {
      "id": 16,
      "data": "2022-03-18",
      "kwota": 180,
      "kwotaNarastajacoMiesiecznie": 480,
      "kwotaNarastajacoOdPoczatku": 1350,
      "info": null
    },
    {
      "id": 17,
      "data": "2022-03-18",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 550,
      "kwotaNarastajacoOdPoczatku": 1420,
      "info": null
    },
    {
      "id": 18,
      "data": "2022-03-21",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 610,
      "kwotaNarastajacoOdPoczatku": 1480,
      "info": null
    },
    {
      "id": 19,
      "data": "2022-03-21",
      "kwota": 120,
      "kwotaNarastajacoMiesiecznie": 730,
      "kwotaNarastajacoOdPoczatku": 1600,
      "info": null
    },
    {
      "id": 20,
      "data": "2022-03-24",
      "kwota": 60,
      "kwotaNarastajacoMiesiecznie": 790,
      "kwotaNarastajacoOdPoczatku": 1660,
      "info": null
    },
    {
      "id": 21,
      "data": "2022-03-29",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 860,
      "kwotaNarastajacoOdPoczatku": 1730,
      "info": null
    },
    {
      "id": 22,
      "data": "2022-04-07",
      "kwota": 80,
      "kwotaNarastajacoMiesiecznie": 80,
      "kwotaNarastajacoOdPoczatku": 1810,
      "info": null
    },
    {
      "id": 23,
      "data": "2022-04-07",
      "kwota": 70,
      "kwotaNarastajacoMiesiecznie": 150,
      "kwotaNarastajacoOdPoczatku": 1880,
      "info": null
    },
    {
      "id": 24,
      "data": "2022-04-11",
      "kwota": 170,
      "kwotaNarastajacoMiesiecznie": 320,
      "kwotaNarastajacoOdPoczatku": 2050,
      "info": null
    },
  ];

}
