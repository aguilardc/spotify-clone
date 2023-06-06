import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeRoutingModule} from "@modules/home/home-routing.module";
import {HomePageComponent} from "@modules/home/pages/home-page/home-page.component";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
