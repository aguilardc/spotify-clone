import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "@shared/components/side-bar/side-bar.component";
import {MediaPlayerComponent} from "@shared/components/media-player/media-player.component";
import {HeaderUserComponent} from "@shared/components/header-user/header-user.component";
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
