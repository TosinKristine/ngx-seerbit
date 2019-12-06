import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-seer-demo';
  options = {
    "tranref": new Date().getTime(),
    "currency": "NGN",
    "description": "TEST",
    "country": "NG",
    "amount": "100.00",
    "callbackurl": "localhost:4200",
    "public_key": "SBTESTPUBK_RdyvBj4Nn4IhVuovRmCqCSiZkerlkuV9", //replace this with your own public key 
   // "close": this.PaymentCancel(0)
    // "callback": function callback(response) {
    //   console.log(response) /*response of transaction*/
    // },
    // "close": function close(close) {
    //   console.log(close) /*transaction close*/
    // }
  };
  PaymentDone(response) {
    console.log(response) /*response of transaction*/
  }
  PaymentCancel(response) {
    console.log(response) /*transaction close*/
  }
}
