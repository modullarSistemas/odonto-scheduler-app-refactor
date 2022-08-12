import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependants-form',
  templateUrl: './dependants-form.component.html',
  styleUrls: ['./dependants-form.component.css']
})
export class DependantsFormComponent implements OnInit {

  @Input() dependants: [] | any;
  @Input() dependantsForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
  }

  addDependant() {
    this.dependants?.push(this.dependantsForm.value);
    this.dependantsForm.reset();
  }

  removeDependant(dependant: any) {
    const index: number = this.dependants.indexOf(dependant);
    if (index !== -1) {
      this.dependants.splice(index, 1);
    }
  }

}
