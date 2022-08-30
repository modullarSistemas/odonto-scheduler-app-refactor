import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { lastValueFrom, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DentistsService } from 'src/app/shared/services/dentists.service';
import { ProceduresService } from 'src/app/shared/services/procedures.service';
import { ProthesisService } from 'src/app/shared/services/prothesis.service';

@Component({
  selector: 'app-procedures-selection-stepper',
  templateUrl: './procedures-selection-stepper.component.html',
  styleUrls: ['./procedures-selection-stepper.component.css'],
})
export class ProceduresSelectionStepperComponent implements OnInit {
  @Input() treatmentTypeId: any;
  @Input() selectedProcedures?: any;

  user: any;

  procedure = new FormControl();
  selectedProcedure: any;
  procedureOptions: any;
  procedureFilteredOptions: any;
  isLoadingProcedures = false;

  prothesis = new FormControl();
  prothesisOptions: any;
  prothesisFilteredOptions: any;
  isLoadingProthesis = false;

  dentist = new FormControl();
  defaultDentist: any;
  dentistOptions: any;
  dentistFilteredOptions: any;
  isLoadingDentist = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private proceduresService: ProceduresService,
    private prothesisService: ProthesisService,
    private dentistsService: DentistsService,
    private authService: AuthService
  ) {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl(''),
    });

    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl(''),
    });

  }

  async ngOnInit() {
    this.user = this.authService.getUser();

    //await this.getTreatment();
    await this.getProcedures();
    await this.getProthesis();
    await this.getDentistsByFranchiseId();
  }

  selectProcedure() {
    this.selectedProcedure = this.procedure.value;
    this.selectedProcedure.dentist = this.defaultDentist;
  }

  addProcedure() {
    if (this.selectedProcedure == null) return;

    this.selectedProcedures.push(this.selectedProcedure as any);
    console.log(this.selectProcedure);
    this.procedure.reset();
    this.prothesis.reset();
    this.dentist.reset();

    this.getProcedures();
    this.getProthesis();

    this.selectedProcedure = null;
  }

  treatmentTotalCost() {
    let total = 0;
    this.selectedProcedures.forEach((element: any) => {
      total += element.cost;
    });

    return total;
  }

  prothesisTotalCost() {
    let total = 0;
    this.selectedProcedures.forEach((element: any) => {
      if (element.needProthesis) total += element.prothesis.cost;
    });

    return total;
  }

  async getProthesis() {
    //@todo get actual prothesis
    let result = await lastValueFrom(this.prothesisService.getProthesis());
    this.isLoadingProthesis = false;
    this.prothesisOptions = result;
    this.prothesisFilteredOptions = this.prothesis.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterProthesis(value))
    );
  }

  async getProcedures() {
    let result;
    this.isLoadingProcedures = true;

    switch (this.treatmentTypeId) {
      case "1": {
        result = await lastValueFrom(
          this.proceduresService.getGeneralClinicProcedures()
        );
        break;
      }

      case "2": {
        result = await lastValueFrom(
          this.proceduresService.getOrthodonticsProcedures()
        );
        break;
      }

      case "3": {
        result = await lastValueFrom(
          this.proceduresService.getImplantologyProcedures()
        );
        break;
      }

      case "4": {
        result = await lastValueFrom(
          this.proceduresService.getFacialHarmonizationProcedures()
        );
        break;
      }
    }

    this.isLoadingProcedures = false;
    this.procedureOptions = result;

    this.procedureFilteredOptions = this.procedure.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterProcedures(value))
    );
  }

  async getDentistsByFranchiseId() {
    let result: any = await lastValueFrom(this.dentistsService.getDentistsByFranchiseId());
    this.isLoadingDentist = false;
    this.defaultDentist = result.find((dentist: any) => { return dentist.id == this.user.dentistId });
    this.dentistOptions = result;

    this.dentistFilteredOptions = this.dentist.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterDentists(value))
    );

  }

  selectProcedureProthesis() {
    this.selectedProcedure.prothesis = this.prothesis.value;
  }

  selectProcedureDentist() {
    this.selectedProcedure.dentist = this.dentist.value;
  }

  selectProcedureTooth(event: any) {
    this.selectedProcedure.tooth = parseInt(event.target.value);
  }

  selectProcedureProthesisTooth(event: any) {
    this.selectedProcedure.prothesis.tooth = parseInt(event.target.value);
  }


  private _filterProcedures(value: any) {
    const filterValue = value.name ? value.name.toLowerCase() : '';
    return this.procedureOptions.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private _filterProthesis(value: any) {
    const filterValue = value.name ? value.name.toLowerCase() : '';
    return this.prothesisOptions.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private _filterDentists(value: any) {
    const filterValue = value.name ? value.name.toLowerCase() : '';
    return this.dentistOptions.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  displayFnProcedure(procedure: any): string {
    return procedure && procedure.name ? procedure.name : '';
  }

  displayFnProthesis(prothesis: any): string {
    return prothesis && prothesis.name ? prothesis.name : '';
  }

  displayFnDentist(dentist: any): string {
    return dentist && dentist.name ? dentist.name : '';
  }

  toggleProcedureDentist() {
    this.selectedProcedure.toggleDentist = true;
  }

  deleteProcedure(procedure: any) {
    const index: number = this.selectedProcedures.indexOf(procedure);
    if (index !== -1) {
      this.selectedProcedures.splice(index, 1);
    }
  }

  async sendData() {}
}
