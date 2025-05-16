import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { Pageable } from '../../interfaces/Pageable';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  me = signal<Profile | null>(null)
  http = inject(HttpClient);
  baseApiUrl = `https://icherniakov.ru/yt-course/account/`;
  getTestAccounts(){
    return this.http.get<Profile[]>(`${this.baseApiUrl}test_accounts`)
  }
  getMe(){
    return this.http.get<Profile>(`${this.baseApiUrl}me`).pipe(
      tap(res => this.me.set(res))
    )
  }
  getSubscribersShortList(subsAmount = 3){
    return this.http.get<Pageable<Profile>>(`${this.baseApiUrl}subscribers/?page=1&size=50`).pipe(
      map(res => res.items.slice(0, subsAmount))
    )
  }

  getAccount(id:string){
    return this.http.get<Profile>(`${this.baseApiUrl}${id}`)
  }

  patchProfile(profile: Partial<Profile>){
   return this.http.patch<Profile>(`${this.baseApiUrl}me`,{
    profile
   })
  }
}
