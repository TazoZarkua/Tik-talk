import { Component, effect, inject, input } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { ProfileService } from '../../data/service/profile.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  imports: [ImgUrlPipe, ReactiveFormsModule],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  profileService = inject(ProfileService);

  me = this.profileService.me
  fb = inject(FormBuilder)
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    description: [''],
    stack: ['']
  })

  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue({...this.profileService.me(), stack: this.mergeStack(this.profileService.me()?.stack)}); 
    })
  }

    onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if(this.form.invalid) return
    //@ts-ignore
     firstValueFrom(this.profileService.patchProfile({...this.form.value, stack: this.splitStack(this.form.value.stack)})) 
  }
  splitStack(stack: string | null | string[] | undefined): string[]{
    if(!stack) return []
    if(Array.isArray(stack)) return stack
    return stack.split(',')
  }

  mergeStack(stack: string | null | string[] | undefined){
   if(!stack) return ''
   if(Array.isArray(stack)) return stack.join(',')
    return stack
  }
}
