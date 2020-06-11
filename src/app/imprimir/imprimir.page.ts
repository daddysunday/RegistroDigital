import { Component, OnInit } from '@angular/core';

import { Printer, PrintOptions } from '@ionic-native/printer/ngx';



@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.page.html',
  styleUrls: ['./imprimir.page.scss'],
})
export class ImprimirPage implements OnInit {

  constructor(private printer: Printer) { }

  ngOnInit() {
  }

}
