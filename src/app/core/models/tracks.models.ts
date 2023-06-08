import {ArtistModel} from "@core/models/artist.models";

export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: ArtistModel;
}
