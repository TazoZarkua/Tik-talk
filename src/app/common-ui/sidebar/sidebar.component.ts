import { Component, inject } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { ProfileService } from '../../data/service/profile.service';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, NgFor, AsyncPipe, SubscriberCardComponent, RouterLink, ImgUrlPipe, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
menuItems = [{
  label: 'Моя страница',
  icon: 'home',
  link: 'profile/me'
},
{
  label: 'Чаты',
  icon: 'chat',
  link: 'chat'
},
{
  label: 'Поиск',
  icon: 'search',
  link: 'search'
}]
profileSerivce = inject(ProfileService);

subscribers$ = this.profileSerivce.getSubscribersShortList();
me = this.profileSerivce.me;
ngOnInit(){
  firstValueFrom(this.profileSerivce.getMe())
}

}
