import { YoutubeVideoDto } from './youtubeVideo.dto';

export class ReturnGoogleDataDto {
  totalSubscribers: number=0;
  totalViews: number=0;
  views30days: number=0;
  watchTime30days: number=0;
  newSubs30days: number=0;
  ageGroup!:  StringNumberPair[];
  genderSegmentation: StringNumberPair[];
  countrySegmentation: any;
  latest5Videos!: YoutubeVideoDto[];
}
export type StringNumberPair = [string, number];
