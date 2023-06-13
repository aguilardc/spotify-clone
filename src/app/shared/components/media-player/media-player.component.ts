import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrackModel} from "@core/models/tracks.models";
import {MultimediaService} from "@shared/services/multimedia.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'data:image/jpeg;base64,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',
    album: 'The Razors Edge',
    name: 'Thunderstruck',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {
  }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe((response: TrackModel) => {
      console.log('.............', response);
    });
    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe());
  }

}
