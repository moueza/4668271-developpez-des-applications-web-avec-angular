import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor(){

    var firebaseConfig = {
      apiKey: "AIzaSyAmxHDD91CZACxUf5_04_rnOy2Om2LDTg0",
      authDomain: "alls-authenth.firebaseapp.com",
      databaseURL: "https://alls-authenth.firebaseio.com",
      projectId: "alls-authenth",
      storageBucket: "alls-authenth.appspot.com",
      messagingSenderId: "385739580962",
      appId: "1:385739580962:web:b6c8a2d1d1de74b4fdcc7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

}
