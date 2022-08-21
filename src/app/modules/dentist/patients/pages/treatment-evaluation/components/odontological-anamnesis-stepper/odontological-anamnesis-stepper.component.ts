import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odontological-anamnesis-stepper',
  templateUrl: './odontological-anamnesis-stepper.component.html',
  styleUrls: ['./odontological-anamnesis-stepper.component.css']
})
export class OdontologicalAnamnesisStepperComponent implements OnInit {
  @Input() odontologicalQuestionaire: any;

  constructor() { }

  ngOnInit(): void {
  }

}
