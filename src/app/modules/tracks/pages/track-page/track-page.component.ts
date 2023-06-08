import {Component} from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent {
  mockTrackList = [
    {
      name: 'Thunderstruck'
    },
    {
      name: 'Thunderstruck'
    },
    {
      name: 'Thunderstruck'
    }
  ]
}
