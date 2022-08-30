import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/models/routes';
import { Procedure, ProcedureType } from 'src/app/shared/models/Treatment';
import { ProceduresService } from 'src/app/shared/services/procedures.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
  public routes: typeof routes = routes;
  procedures?: ProcedureType[];

  constructor(
    private proceduresService: ProceduresService
  ) { }

  ngOnInit(): void {
    this.getProcedures();
  }

  getProcedures() {
    this.proceduresService.getProcedures().subscribe({
      next: (res) => {
        this.procedures = res as any;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
