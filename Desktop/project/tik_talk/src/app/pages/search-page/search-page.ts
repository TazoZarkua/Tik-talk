import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileCard } from "../../common-ui/profile-card/profile-card";
import { Profile } from '../../data/services/profile';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard, AsyncPipe],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
 profileService = inject(Profile);
 profiles$ = this.profileService.getTestAcconts()
}
