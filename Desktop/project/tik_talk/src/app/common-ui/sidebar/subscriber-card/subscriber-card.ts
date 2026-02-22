import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProfile } from '../../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.html',
  styleUrl: './subscriber-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriberCard {
@Input() profile!:IProfile
}
