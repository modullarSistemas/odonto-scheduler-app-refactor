import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/Patient';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {
  @Input() patient?: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
