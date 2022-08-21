import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';
import { routes } from 'src/app/shared/models/routes';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  public routes: typeof routes = routes;
  patients?: Patient[];
  filteredPatients?: Patient[];

  constructor(
    private patientsService: PatientsService
  ) {
    this.getPatients();
  }

  ngOnInit(): void {
  }

  getPatients() {
    this.patientsService.getPatients().subscribe({
      next: (res) => {
        this.patients = res as Patient[];
        this.filteredPatients = this.patients;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  applyFilter(event: Event) {
    this.filteredPatients = this.patients;
    const filterValue = (event.target as HTMLInputElement).value;
    const result = this.filteredPatients?.filter(s => s.name.toLowerCase().includes(filterValue.toLowerCase()));
    this.filteredPatients = result;
  }
}
