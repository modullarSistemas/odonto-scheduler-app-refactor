import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DentistsService } from 'src/app/shared/services/dentists.service';

@Component({
  selector: 'app-dentist',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.css']
})
export class DentistComponent implements OnInit {

  dentist: any;
  dentistUser: any;

  constructor(
    private dentistsService: DentistsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getDentist();
  }

  getDentist() {
    let dentistId: any = this.route.snapshot.paramMap.get('id');

    this.dentistsService.getDentistById(dentistId).subscribe({
      next: res => {
        this.dentist = res;
        //get dentistUsed
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
