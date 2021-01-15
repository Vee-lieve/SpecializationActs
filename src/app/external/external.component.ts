import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent {
  // @Input() name = '';
  @Input() person:Person;
  @Output() newPerson = new EventEmitter();
  @Output() update = new EventEmitter();

  show = false;

  viewDetails() {
    this.show = !this.show;
    console.log(this.show);
  }

  deleteBtn() {
    this.newPerson.emit(this.person.firstName);
    console.log(this.person.firstName)
  }

  updateBtn(person) {
    this.update.emit(person)
  }
}
