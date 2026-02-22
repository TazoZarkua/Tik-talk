import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { SubscriberCard } from "./subscriber-card/subscriber-card";
import { Profile } from '../../data/services/profile';
import { AsyncPipe } from '@angular/common';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, SubscriberCard, AsyncPipe, ImgUrlPipe, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  profileService = inject(Profile);
  profiles$ = this.profileService.getTestAcconts()

  me = this.profileService.me

menuItems = [{
  icon: 'home',
  label: 'Моя страница',
  link: 'profile'
},
{
  icon: 'chat',
  label: 'Чаты',
  link: 'chat'
},
{
  icon: 'search',
  label: 'Поиск',
  link: ''
}]
}
