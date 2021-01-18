import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  @Input() updateInfo: Person;
  @Output() update = new EventEmitter;
  @Output() updatedPerson = new EventEmitter;

  constructor() { }

  updateBtn() {
    this.updatedPerson.emit(this.updateInfo.firstName);
  }

  onSubmit() {
    alert("Form Submitted");
  }

  cancelBtn() {
    console.log("Naclick");
  }


}
