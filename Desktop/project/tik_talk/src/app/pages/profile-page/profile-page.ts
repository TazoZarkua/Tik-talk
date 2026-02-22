import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { Profile } from '../../data/services/profile';
import { SvgIcon } from "../../common-ui/svg-icon/svg-icon";

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeader, SvgIcon],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
   profileService = inject(Profile);
   me = this.profileService.me
}
