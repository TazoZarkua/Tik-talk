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
  

  getTestAcconts(){
    return this.http.get<IProfile[]>(`${this.baseApiUrl}test_accounts`)
  }

  getMe(){
    return this.http.get<IProfile>(`${this.baseApiUrl}me`)
  }

  getSubscribersShortList(){
    return this.http.get<IPageable<IProfile>>(`${this.baseApiUrl}subscribers`)
  }
}
