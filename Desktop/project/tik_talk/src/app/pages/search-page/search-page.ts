import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileCard } from "../../common-ui/profile-card/profile-card";
import { Profile } from '../../data/services/profile';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProfileFilters } from "./profile-filters/profile-filters";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard, AsyncPipe, JsonPipe, AsyncPipe, ProfileFilters],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
 profileService = inject(Profile);
 profiles = this.profileService.filteredProfiles
 subscribers$ = this.profileService.getSubscribersShortList()
  

}
