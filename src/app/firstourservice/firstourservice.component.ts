import { Component, OnInit } from '@angular/core';
import { ServicesAll } from '../common';

@Component({
  selector: 'app-firstourservice',
  templateUrl: './firstourservice.component.html',
  styleUrls: ['./firstourservice.component.scss']
})
export class FirstourserviceComponent implements OnInit {
  serv: ServicesAll = {
    title1: 'Our Services',
    title2: 'Find the',
    title3: 'right offers',
    title4: 'for you.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
