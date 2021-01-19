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
  @Input() firstName = "";
  @Input() lastName ="";
  @Input() age = "";
  @Input() gender="";
  @Input() nationality="";
  @Output() update = new EventEmitter;
  @Output() updatedPerson = new EventEmitter;
  @Output() updateDetails = new EventEmitter;

  show = false;
  
  constructor(private router:Router) { }

  updateBtn() {
    this.updatedPerson.emit(this.updateInfo);
  }

  onSubmit(value : any) {
    this.updateDetails.emit(value);
    console.log(value, "update");

    // setTimeout(() => {
    //   this.router.navigate(['/api'])
    //       }, 3000)

  }
}
