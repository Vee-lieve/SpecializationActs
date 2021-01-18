import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  private url = "https://jsonplaceholder.typicode.com/posts";
  posts: Post[];
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void { //Component life cycle which executes everytime the component is created
    this.getPosts().subscribe(posts => { //posts is called an observer
      console.log(posts)
      this.posts = posts as Post[];
    }) //Assigned the value to this variable
  }

  getPosts() {
    return this.http.get(this.url); //return the url declared above
  }
}



export interface Post {
  userId?:number;
  id?:number;
  title:string;
  body:string;
}
