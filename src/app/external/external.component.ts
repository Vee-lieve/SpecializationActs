import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../models';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {
  @Input() name = '';
  @Input() person:Person;
  @Output() newPerson = new EventEmitter<Person>();
  ngOnInit(): void {
  }
  show = false;


  // constructor(
  //   private app: AppComponent
  // ){}

  viewDetails() {
    this.show = !this.show;
    console.log(this.show);
  }

  deleteBtn() {
    // this.app.deleteBtn(this.person.firstName)
    this.newPerson.emit(this.person);

    console.log(this.person)
  }
}
