import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  // getTask() {
  //   this.taskService.getTask('1')
  //   .subscribe(task => {
  //     console.log(task);
  //   });
  // }

}
