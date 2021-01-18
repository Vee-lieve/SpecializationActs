import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  @Input() updateInfo: Person;
  // @Input() firstName = "";
  // @Input() lastName = "";
  // @Input() age = "";
  // @Input() nationality = "";
  // @Input() gender = "";
  @Output() update = new EventEmitter;
  @Output() updatedPerson = new EventEmitter;
  @Output() updateDetails = new EventEmitter;

  constructor() { }

  updateBtn() {
    this.updatedPerson.emit(this.updateInfo);
    // console.log("okay")
  }

  onSubmit(value : any) {
    // alert("Form Submitted");
    this.updateDetails.emit(value);
    console.log(value, "okay")

  }

  cancelBtn() {
    console.log("Naclick");
  }


}
