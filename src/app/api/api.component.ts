import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User } from '../models';

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
