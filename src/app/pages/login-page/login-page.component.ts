import { Component, signal } from '@angular/core';
import { SvgIconComponent } from "../../common-ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-login-page',
  imports: [SvgIconComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
isPasswordVisible = signal(false);
}
