import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {
@Input() firstNameS = "";
@Input() lastNameS = "";
@Input() ageS = "";
@Output() curAge = new EventEmitter();
@Output() fullName = new EventEmitter();

getFullName() {
  this.fullName.emit(this.firstNameS + " " + this.lastNameS);
}

getcurAge() {
this.curAge.emit(this.ageS);
}
}

