import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PatientsService } from 'src/app/shared/services/patients.service';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  routes: typeof routes = routes;
  patientInfoForm: FormGroup;
  patientAddressForm: FormGroup;
  patientDependantsForm: FormGroup;
  user: User;
  dependants: [] = [];
  isLoading = false;

  constructor(
    private patientsService: PatientsService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar

  ) {
    this.user = this.authService.getUser();

    this.patientInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      franchiseId: new FormControl(this.user.franchiseId, Validators.required),
      birthDate: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      civilState: new FormControl('', Validators.required),
    });

    this.patientAddressForm = new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      complement: new FormControl('', Validators.required),
        });

    this.patientDependantsForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      cpf: new FormControl(), //NEW FIELD
      birthDate: new FormControl(),
    });

  }

  ngOnInit(): void {
  }

  parsePatientData() {
    let data = {
      ...this.patientInfoForm.value,
      address: this.patientAddressForm.value,
      dependants: this.dependants
    };

    data.address.number = parseInt(data.address.number);
    data.birthDate = moment(data.birthDate).toDate();
    data.dependants.forEach((dependant: any) => {
        dependant.birthDate = moment(dependant.birthDate).toDate();
    });

    return data;
  }

  createPatient() {
    this.isLoading = true;
    let data = this.parsePatientData();
    this.patientsService.createPatient(data).subscribe({
      next: (res) => {
        const snackBarRef = this.snackBar.open('Novo paciente adicionado!', 'Ok', {duration: 2000, panelClass: 'blue-snackbar'});
        snackBarRef.afterDismissed().subscribe(info => {
          this.router.navigate([this.routes.PATIENTS_SECRETARY]);
        });

        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }

}
