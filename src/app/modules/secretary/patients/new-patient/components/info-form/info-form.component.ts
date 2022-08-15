import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  @Input() infoForm: FormGroup | any;
  @ViewChild('picker') picker: any;

  public dateControl = new FormControl(new Date(2021,9,4,5,6,7));

  constructor() { }

  ngOnInit(): void {
  }

}
