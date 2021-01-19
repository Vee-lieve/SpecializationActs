import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  // private url = "https://jsonplaceholder.typicode.com/posts";
  // posts: Post[];
  private url = "https://jsonplaceholder.typicode.com/users";
  users: User[];
  
  constructor(private http:HttpClient) { } //instantiate object of type HttpClient

  ngOnInit(): void { //Component life cycle which executes everytime the component is created
    // this.getPosts().subscribe(posts => { //posts is called an observer
    //   console.log(posts)
    //   this.posts = posts as Post[];
    // }) //Assigned the value to this variable

    this.getUsers().subscribe(users => {
      console.log(users)
      this.users = users as User[];
    })
  }

  // getPosts() {
  //   return this.http.get(this.url); //return the url declared above
  // }

  getUsers() {
    return this.http.get(this.url);
  }
}

// export interface Post {
//   userId?:number;
//   id?:number;
//   title:string;
//   body:string;
// }

export interface User {
  id? : number;
  name : string;
  username : string;
  email : string;
  address : [{
    street : string; 
    suite : string;
    city : string;
    zipcode : number;
    geo : {
      lat : number;
      lng : number;
    }
  }];
  phone : string;
  website : string;
  company : [{
    name : string;
    catchPhrase : string;
    bs : string;
  }];

}