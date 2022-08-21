import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/models/routes';
import { ProthesisService } from 'src/app/shared/services/prothesis.service';

@Component({
  selector: 'app-new-prothesis',
  templateUrl: './new-prothesis.component.html',
  styleUrls: ['./new-prothesis.component.css']
})
export class NewProthesisComponent implements OnInit {
  routes: typeof routes = routes;
  isLoading = false;

  prothesisForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required),
  });

  constructor(
    private prothesisService: ProthesisService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  async createProthesis() {
    let data = this.prothesisForm.value;
    this.isLoading = true;
    this.prothesisService.createProthesis(data).subscribe({
      next: (res) => {
        const snackBarRef = this.snackBar.open('Nova protese adicionada!', 'Ok', {
          duration: 2000,
          panelClass: 'blue-snackbar',
        });
        snackBarRef.afterDismissed().subscribe((info) => {
          this.router.navigate([this.routes.MANUAL_REGISTERS_PROTHESIS_ADM]);
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
