import { Component, OnInit } from '@angular/core';
import { ServicesAll } from '../common';

@Component({
  selector: 'app-lastourservice',
  templateUrl: './lastourservice.component.html',
  styleUrls: ['./lastourservice.component.scss']
})
export class LastourserviceComponent implements OnInit {
  serv: ServicesAll = {
    title5: 'Don\'t know what to choose? ',
    title6: 'Drop us a line.',
    title7: 'Contact Us',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
