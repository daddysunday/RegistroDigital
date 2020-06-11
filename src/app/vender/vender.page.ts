import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  constructor(
    private taskService: TaskService, private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  getList() {
    this.taskService.getList()
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

  toggleMenu(){
    this.menuCtrl.toggle();
}

// createTask() {
//   const task = {
//     Empaque: 'change title',
//     EmpaquedId: '1',
//     Nombre: 'Helado',
//     Precio: '10',
//     ProductoId: '400'
//   };
//   this.taskService.createTask(task)
//   .subscribe((newTask) => {
//     console.log(newTask);
//   });
// }

}
