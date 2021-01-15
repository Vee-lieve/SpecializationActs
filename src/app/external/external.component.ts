import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {
  // @Input() name = '';
  @Input() person:Person;
  @Output() newPerson = new EventEmitter();
  @Output() update = new EventEmitter();
  ngOnInit(): void {
  }
  show = false;
  ishidden = false;

  viewDetails() {
    this.show = !this.show;
    console.log(this.show);
  }

  deleteBtn() {
    this.newPerson.emit(this.person.firstName);
    console.log(this.person.firstName)
  }

  updateBtn(item : any) {
    this.update.emit(item)
  }
}
