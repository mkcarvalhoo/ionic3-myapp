import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeCliente:string = "Mike Carvalho"; //declaração de váriavel
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDeDoisNumeros(num1:number, num2:number): void //função recebendo parametros
  {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
   // this.somaDeDoisNumeros(20, 50); //chamada função passando parametros
  }

}
