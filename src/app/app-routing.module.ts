import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrzychodListComponent} from "./przychod-list/przychod-list.component";
import {KosztListComponent} from "./koszt-list/koszt-list.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrzychodSzczegolyComponent } from './przychod-szczegoly/przychod-szczegoly.component';
import {PrzychodFormComponent} from "./przychod-form/przychod-form.component";

const routes: Routes = [
  {path:'',redirectTo: '/przychody-list', pathMatch: 'full'},
  {path:'przychody-list',component:PrzychodListComponent},
  {path:'przychody-form',component:PrzychodFormComponent},
  {path:'przychody/:id',component:PrzychodSzczegolyComponent},
  {path:'koszty',component:KosztListComponent},
  {path: "**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PrzychodListComponent,
  KosztListComponent,
  PageNotFoundComponent,
  PrzychodSzczegolyComponent,
  PrzychodFormComponent
]
