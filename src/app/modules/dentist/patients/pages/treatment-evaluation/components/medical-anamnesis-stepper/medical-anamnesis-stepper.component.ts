import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-anamnesis-stepper',
  templateUrl: './medical-anamnesis-stepper.component.html',
  styleUrls: ['./medical-anamnesis-stepper.component.css']
})
export class MedicalAnamnesisStepperComponent implements OnInit {
  @Input() medicalQuestionaire?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
