import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { routes } from 'src/app/shared/models/routes';
import { Prothesis } from 'src/app/shared/models/Treatment';
import { ProthesisService } from 'src/app/shared/services/prothesis.service';

@Component({
  selector: 'app-prothesis',
  templateUrl: './prothesis.component.html',
  styleUrls: ['./prothesis.component.css']
})
export class ProthesisComponent implements OnInit {
  public routes: typeof routes = routes;
  prothesis?: Prothesis[];

  constructor(
    private prothesisService: ProthesisService,
  ) {
    this.getProthesis();
  }

  ngOnInit(): void {
  }

  async getProthesis() {
    let res: any = await lastValueFrom(this.prothesisService.getProthesis())
    this.prothesis = res;
  }
}
