import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.page.html',
  styleUrls: ['./add-empresa.page.scss'],
})
export class AddEmpresaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
}

}
