import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DentistCategoryEnum } from 'src/app/shared/enums/DentistCategoryEnum';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DentistsService } from 'src/app/shared/services/dentists.service';

@Component({
  selector: 'app-new-dentist',
  templateUrl: './new-dentist.component.html',
  styleUrls: ['./new-dentist.component.css']
})
export class NewDentistComponent implements OnInit {
  public routes: typeof routes = routes;

  isLoading = false;
  dentistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    franchiseId: new FormControl(this.authService.getFranchiseId()),
    category: new FormControl(0),
    comission: new FormControl(0)
  });

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    franchiseId: new FormControl(this.authService.getFranchiseId()),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('dentist'),
  });

  constructor(
    private dentistService: DentistsService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  get dentistCategoryEnum(): typeof DentistCategoryEnum {
    return DentistCategoryEnum;
  }

  async createDentist() {
    this.isLoading = true;
    let dentistData: any = this.dentistForm.value;
    let userData: any = this.userForm.value;

    userData.name = dentistData.name;

    let user: any = await lastValueFrom(this.authService.createUser(this.userForm.value));
    dentistData.userId = user.id;

    this.dentistService.createDentist(dentistData).subscribe({
      next: res => {
        const snackBarRef = this.snackBar.open('Novo dentista criado!', 'Ok', {
          duration: 2000,
          panelClass: 'blue-snackbar',
        });
        snackBarRef.afterDismissed().subscribe((info) => {
          this.router.navigate([this.routes.DENTISTS_ADM]);
        });
        this.isLoading = false;
      },
      error: err => {
        console.log(err)
      }
    })
    // data.userId = response from create user
  }

}
