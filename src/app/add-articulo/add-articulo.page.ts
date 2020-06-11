import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.page.html',
  styleUrls: ['./add-articulo.page.scss'],
})
export class AddArticuloPage implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
}

}
