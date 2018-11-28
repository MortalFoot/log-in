import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  Correos= [];
  Correo = '';
  Pass ='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController, public storage: Storage ) {
      
  }

  
  clickLog(Correo){

    if (this.Pass.length >= 8) {

      this.Pass = "";

      this.storage.set('Correo2', JSON.stringify(this.Correo));

      const alert = this.alertCtrl.create({
        title: 'Registro exitoso',
        subTitle: 'Usuario guardado',
        buttons: ['OK']
    });

    alert.present();

  }

  if (this.Correo.length > 12) {

    this.Correo = "";

    this.storage.set('Correo2', JSON.stringify(this.Correo));

    const alert = this.alertCtrl.create({
      title: 'Registro exitoso',
      subTitle: 'Usuario guardado',
      buttons: ['OK']
  });

  alert.present();

}

    else {
      console.log('El password no tiene 8 letras');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'El password necesita 8 letras',
        buttons: ['OK']
      });
      alert.present();
    }

   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

 


}
