import { Component, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from './models'; //Person Interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'External Component';
  names = ['Eva Rain', 'Black', 'Cole', 'Vee'];
  persons:Person[] = [
    {firstName: 'Eva Rain', lastName: 'Ramirez', age: 19, nationality: 'Filipino', gender: 'female'},
    {firstName: 'Black', lastName: 'Demetri', age: 25, nationality: 'Filipino-Italian', gender: 'male'},
    {firstName: 'Vee', lastName: 'Suarez', age: 26, gender: 'female'},
    {firstName: 'Cole', lastName: 'Ramirez', age: 26, nationality: 'Filipino-Spanish', gender: 'male'}
  ]
  userDetails = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    nationality: [''],
    gender: ['']
  })
  isHidden  = false;


  constructor(private fb: FormBuilder) { }

 addUser(){
   this.persons.push(this.userDetails.value)
  console.log(this.userDetails.value)
  this.userDetails.reset();
 }

  deleteBtn(i : any){
    // this.persons.splice(this.persons.findIndex(x => x.firstName === i),1)
    let index = this.persons.findIndex(x => x.firstName == i);
    this.persons.splice(index, 1);
  }

  index;
  updateBtn(value : Person) {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
    this.index = value;
    console.log(this.index);

  }

  onSubmit(value : any) {
    let i = this.persons.findIndex(x => x === this.index);
    this.persons[i] = value;
    console.log(i, "app");
    this.isHidden = !this.isHidden;
  }
}
 