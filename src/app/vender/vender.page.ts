import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  taskData: any;

  constructor(
    private taskService: TaskService, private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  getAllProductos() {
    //Get saved list of students
    this.taskService.getList().subscribe(response => {
      console.log(response);
      this.taskData = response;
    })
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
