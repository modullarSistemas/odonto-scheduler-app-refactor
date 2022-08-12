import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  patientInfoForm: FormGroup;
  patientAddressForm: FormGroup;
  patientDependantsForm: FormGroup;
  user: User;
  dependants: [] = [];

  constructor(
    private patientsService: PatientsService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser();
    this.patientInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      franchiseId: new FormControl(this.user.franchiseId, Validators.required), //HARDCODED
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

}
