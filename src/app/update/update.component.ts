import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Person } from '../models';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  updateBtn() {
    this.updatedPerson.emit(this.updateInfo);
    // console.log("okay")
  }

  onSubmit(value : any) {
    // alert("Form Submitted");
    this.updateDetails.emit(value);
    console.log(value, "okay")
    setTimeout(() => {
      this.router.navigate(['/api'])
          }, 3000)

  }
  cancelBtn() {
    console.log("Naclick");
  }


}
