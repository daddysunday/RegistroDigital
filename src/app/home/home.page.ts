import { Component, OnInit, NgModule } from '@angular/core';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';

@Component({
    selector:'app-home',
    templateUrl:'home.page.html',
})

export class HomePage{
    bluetoothList:any=[];
    selectedPrinter:any;

    constructor(private btSerial:BluetoothSerial,private alertController:AlertController) {}

    ActivarBluetooth(){
        this.btSerial.isEnabled().then(response=>{
            //this.isEnabled("Encendido")
            this.ListaDispositivos();
        },error=>{
            this.isEnabled("Apagado");
        })
    }

    ListaDispositivos(){
        this.btSerial.list().then(response=>{
            this.bluetoothList=response;
        },error=>{
            console.log("error");
        })
    }

    connect(address){
        this.btSerial.connect(address).subscribe(success=>{
            this.deviceConnected();
        },error=>{
            console.log("error");            
        })
    }

    deviceConnected(){
        this.btSerial.subscribe('/n').subscribe(success=>{
            this.hundler(success);
        })
    }

    hundler(msg){
        console.log(msg);
    }

    sebData(){
        this.btSerial.write("7").then(response=>{
            console.log("oky");
        },error=>{
            console.log("un problema");
        })
    }

    Disconnected(){
        this.btSerial.disconnect();
        console.log("dispositivo desconectado");
    }

    async isEnabled(msg){
        const alert=await this.alertController.create({
            header:'Alerta',
            message:msg,
            buttons:[{
                text:"Okay",
                handler:()=>{
                    console.log("Okay");
                }
            }]
        })
    }

    // //This will list all of your bluetooth devices
    // listPrinter() { 
    //   this.print.searchBluetoothPrinter()
    //    .then(resp=>{
   
    //     //List of bluetooth device list
    //     this.bluetoothList=resp;
    //     });
    // }

    // //This will store selected bluetooth device mac address
    // selectPrinter(macAddress){
    //     //Selected printer macAddress stored here
    //     this.selectedPrinter=macAddress;
    // }

    // //This will print
    // printStuff(){  
    //     //The text that you want to print
    //     var myText="Hello hello hello \n\n\n This is a test \n\n\n";
    //     this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
    // }

}

