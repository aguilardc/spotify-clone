import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "@shared/components/side-bar/side-bar.component";
import {MediaPlayerComponent} from "@shared/components/media-player/media-player.component";
import {HeaderUserComponent} from "@shared/components/header-user/header-user.component";



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  exports: [
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
