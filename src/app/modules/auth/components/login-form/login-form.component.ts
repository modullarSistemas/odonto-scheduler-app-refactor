import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;
  public loginError = false;
  public isLoading = false;
  public routes: typeof routes = routes;

  constructor(private service: AuthService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public ngOnInit(): void {}

  public login(): void {
    if (!this.form.valid) return;

    this.isLoading = true;
    this.service
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe({
        next: async (res: any) => {
          await this.service.setUserData(res);

          if (res.role == 'admin') {
            this.router.navigate([routes.ROOT_ADM]).then();
          }

          if (res.role == 'dentist') {
            this.router.navigate([routes.ROOT_DENTIST]).then();
          }

          if (res.role == 'secretary') {
            this.router.navigate([routes.ROOT_SECRETARY]).then();
          }

          this.isLoading = false;
        },
        error: () => {
          this.loginError = true;
          this.isLoading = false;
        },
      });
  }
}
