import {Component, OnInit} from '@angular/core';
import * as dataRaw from "../../../../data/tracks.json";
import {TrackModel} from "@core/models/tracks.models";

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit {
  mockTrackList:Array<TrackModel> = []

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.mockTrackList = data;
  }
}
