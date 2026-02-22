import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';


@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {
@Input() profile!:IProfile
}
