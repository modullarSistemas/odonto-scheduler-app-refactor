import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-new-secretary',
  templateUrl: './new-secretary.component.html',
  styleUrls: ['./new-secretary.component.css']
})
export class NewSecretaryComponent implements OnInit {
  isLoading = false;
  public routes: typeof routes = routes;

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    franchiseId: new FormControl(this.authService.getFranchiseId()),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('secretary'),
  });

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createSecretary() {
    this.isLoading = true;
    let data = this.userForm.value;

    this.authService.createUser(data).subscribe({
      next: res => {
        console.log(res);
        const snackBarRef = this.snackBar.open('Nova secretaria criada!', 'Ok', {
          duration: 2000,
          panelClass: 'blue-snackbar',
        });
        snackBarRef.afterDismissed().subscribe((info) => {
          this.router.navigate([this.routes.SECRETARIES_ADM]);
        });
        this.isLoading = false;
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
