import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DentistsService } from 'src/app/shared/services/dentists.service';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.css']
})
export class DentistsComponent implements OnInit {
  public routes: typeof routes = routes;
  public dentists: any;

  constructor(
    private dentistService: DentistsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getDentists();
  }

  getDentists() {
    this.dentistService.getDentistsByFranchiseId().subscribe({
      next: res => {
        this.dentists = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  navigateToDentist(dentistId: any) {
    let route = this.routes.DENTISTS_DENTIST_ADM as string;
    route = route.replace(":id", String(dentistId));
    this.router.navigate([route]);
  }
 }
