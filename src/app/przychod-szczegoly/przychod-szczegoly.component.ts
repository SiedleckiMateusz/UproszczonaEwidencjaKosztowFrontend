import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-przychod-szczegoly',
  templateUrl: './przychod-szczegoly.component.html',
  styleUrls: ['./przychod-szczegoly.component.css']
})
export class PrzychodSzczegolyComponent implements OnInit {
 public przychodId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.przychodId = params.get('id');
    });
  }

}
