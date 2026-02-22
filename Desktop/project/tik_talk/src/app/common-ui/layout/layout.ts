import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Profile } from '../../data/services/profile';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
profileService = inject(Profile);

ngOnInit(){
  this.profileService.getMe().subscribe(res => {
    console.log(res)
  })
  
}
}
