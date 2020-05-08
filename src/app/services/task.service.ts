import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private api = 'http://34.217.53.8:8085';
  private api = 'http://34.217.53.8:8085/api';


  constructor( private http: HttpClient ) { }


  getAllTasks() {
    // const path = `${this.api}/api/Productos/`;
    const path = `${this.api}/Productos/`;

    return this.http.get<Task[]>(path);
  }

  // getTask() {
  //   const path = `${this.api}/todos/${id}`;
  //   return this.http.get<Task>(path);
  // }
}
