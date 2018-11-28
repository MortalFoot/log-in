import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  agl = RegistroPage;
  Correos = [];
  Correo = '';
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage 
    ) {


      this.storage.keys()
      .then(keys => {
       if(keys.some(key => key == 'Correos2')){
         this.storage.get('Correos2')
         .then(notas => {
           //this.Correos = JSON.parse(Correo)
         })
       }
      })



  }

  clickAgregar(){

    this.navCtrl.push(this.agl);


  }


}
