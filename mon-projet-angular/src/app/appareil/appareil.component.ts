import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  // appareilName = 'Machine à laver';
  // appareilStatus: string = 'éteint';
  appareilStatus: 'éteint'; // resolves #21

  constructor() {
  }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
