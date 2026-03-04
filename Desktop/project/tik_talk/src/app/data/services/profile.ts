import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';
import { IPageable } from '../interfaces/pageable.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  http = inject(HttpClient);
  baseApiUrl = `https://icherniakov.ru/yt-course/account/`;
  me = signal<IProfile | null>(null);
  filteredProfiles = signal<IProfile[]>([])
  subscribers = signal<IProfile[]>([])

  getTestAcconts(){
    return this.http.get<IProfile[]>(`${this.baseApiUrl}test_accounts`)
  }

  getMe(){
    return this.http.get<IProfile>(`${this.baseApiUrl}me`).pipe(
      tap(res => this.me.set(res))
    )
  }

  getSubscribersShortList(){
    return this.http.get<IPageable<IProfile>>(`${this.baseApiUrl}subscribers`).pipe(
      tap(res => this.subscribers.set(res.items))
    )
  }

  patchProfile(profile: Partial<IProfile>){
   return this.http.patch<IProfile>(`${this.baseApiUrl}me`, profile)
  }

  uploadAvatar(file: File){
    const fd = new FormData();
    fd.append('file', file)
    return this.http.post<IProfile>(`${this.baseApiUrl}/upload_image`, fd)
  }

  filterProfiles(params: Record<string,any>){
    return this.http.get<IPageable<IProfile>>(`${this.baseApiUrl}accounts`, {
      params
    }).pipe(
      tap(res => this.filteredProfiles.set(res.items))
    )
  }
}
