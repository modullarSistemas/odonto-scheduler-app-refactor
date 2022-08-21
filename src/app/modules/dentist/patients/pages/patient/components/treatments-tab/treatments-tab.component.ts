import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Treatment } from 'src/app/shared/models/Treatment';

@Component({
  selector: 'app-treatments-tab',
  templateUrl: './treatments-tab.component.html',
  styleUrls: ['./treatments-tab.component.css']
})
export class TreatmentsTabComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() treatments?: Treatment[];

  constructor() { }

  ngOnInit(): void {
  }

}
