import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    setInterval(() => { this.generateRandomFace(); }, 1000);
  }

  baseUrl = 'https://api.adorable.io/avatars/500/';
  urlSuffix = '@adorable.io.png';
  imageUrl = '';

  generateRandomFace() {
    this.imageUrl = this.baseUrl + Math.random() + this.urlSuffix;
    // window.location.reload();
  }
}
