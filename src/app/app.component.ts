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
    this.persons.splice(this.persons.findIndex(x => x.firstName === i),1)
    // let index = this.persons.findIndex(x => x.firstName == i);
    // this.persons.splice(index, 1);
  }

  updateBtn() {
   
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }


  //Activity 5
  
  // names = ["Eva Rain", "Belle", "Cole", "Black", "Midnight"];
  // newName = "";
  
  // addName() {
  //   this.names.push(this.newName)
  //   this.newName = "";
  // }

  // firstNameA = '';
  // lastNameA = '';
  // fullName = '';
  // Age = '';
  // curAge = '';

  // getFullName(event : Event) {
  //   this.fullName = String(event);
  // }
  // getcurAge(event : Event) {
  //     this.curAge = String(event);
  //   }

  // isActive = true;
  // name = "";
  // defaultName = "Vanz";
  
  // imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YoYm_znkDTYKfIxmIwSk0WKHcpUmtvpV9A&usqp=CAU";
  // image = "https://pm1.narvii.com/6278/de797c2c623314526f8c9c21b066ad099f4fcb89_00.jpg";

  // sayHi(){
  //   alert("Hi");
  // }

  // inputs() {
  //   if (this.name === this.defaultName) {
  //     alert("The same");
  //   } 
  //   else {
  //   }
  //   this.reset();
  // }
  // reset(){
  //   this.name = "";
  // }
}
 