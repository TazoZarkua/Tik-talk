import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  http = inject(HttpClient);
  baseApiUrl = `https://icherniakov.ru/yt-course/account/`;

  getTestAcconts(){
    return this.http.get
  }
}
