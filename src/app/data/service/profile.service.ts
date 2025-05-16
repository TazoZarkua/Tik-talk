import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = `https://icherniakov.ru/yt-course/account/`;
  getTestAccounts(){
    return this.http.get<Profile[]>(`${this.baseApiUrl}test_accounts`)
  }
}
