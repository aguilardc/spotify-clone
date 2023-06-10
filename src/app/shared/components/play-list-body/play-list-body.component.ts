import {Component, OnInit} from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import {TrackModel} from "@core/models/tracks.models";

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = [];
  optionsSort: { property: string | null, order: string } = {property: null, order: 'asc'};

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.tracks = data;
  }

  changeSort(property: string): void {
    const {order} = this.optionsSort;
    this.optionsSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
