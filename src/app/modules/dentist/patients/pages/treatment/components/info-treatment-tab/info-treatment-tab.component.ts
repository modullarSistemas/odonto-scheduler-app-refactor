import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-treatment-tab',
  templateUrl: './info-treatment-tab.component.html',
  styleUrls: ['./info-treatment-tab.component.css']
})
export class InfoTreatmentTabComponent implements OnInit {
  @Input() treatment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
