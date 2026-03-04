import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { Profile } from '../../data/services/profile';
import { SvgIcon } from "../../common-ui/svg-icon/svg-icon";
import { RouterLink } from "@angular/router";
import { AsyncPipe } from '@angular/common';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';
import { PostFeed } from "./post-feed/post-feed";

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeader, SvgIcon, RouterLink, AsyncPipe, ImgUrlPipe, PostFeed],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
   profileService = inject(Profile);
   me = this.profileService.me
   subscribers$ = this.profileService.getTestAcconts()
}
