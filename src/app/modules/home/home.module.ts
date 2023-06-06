import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomePageComponent} from "@modules/home/pages/home-page/home-page.component";
import {HomeRoutingModule} from "@modules/home/home-routing.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
