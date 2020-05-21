import { Component, OnInit, NgModule } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
    selector:'page-home',
    templateUrl:'home.page.html',
})

export class HomePage{
    bluetoothList:any=[];
    selectedPrinter:any;

    constructor(private print:PrintService) {}

    //This will list all of your bluetooth devices
    listPrinter() { 
      this.print.searchBluetoothPrinter()
       .then(resp=>{
   
        //List of bluetooth device list
        this.bluetoothList=resp;
        });
    }

    //This will store selected bluetooth device mac address
    selectPrinter(macAddress){
        //Selected printer macAddress stored here
        this.selectedPrinter=macAddress;
    }

    //This will print
    printStuff(){  
        //The text that you want to print
        var myText="Hello hello hello \n\n\n This is a test \n\n\n";
        this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
    }

}

