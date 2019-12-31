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
    "public_key": "SBTESTPUBK_p8GqvFSFNCBahSJinczKd9aIPoRUZfda"
  };
  PaymentDone(response) {
    console.log(response) /*response of transaction*/
  }
  PaymentCancel(response) {
    console.log(response) /*transaction close*/
  }
}
