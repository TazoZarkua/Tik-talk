import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { ProfileService } from '../../data/service/profile.service';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
profileService = inject(ProfileService);
profiles:Profile[] = [];
constructor(){
this.loadTestAccounts()
}
loadTestAccounts(){
  this.profileService.getTestAccounts().subscribe((data:any) => {
   this.profiles = data;
  })
}
}
