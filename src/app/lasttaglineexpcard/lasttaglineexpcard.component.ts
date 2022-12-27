import { Component, OnInit } from '@angular/core';
import { ChooseEnd } from '../common';

@Component({
  selector: 'app-lasttaglineexpcard',
  templateUrl: './lasttaglineexpcard.component.html',
  styleUrls: ['./lasttaglineexpcard.component.scss']
})
export class LasttaglineexpcardComponent implements OnInit {
  endblog: ChooseEnd = {
    title1: 'Empower',
    title2: ' Your ',
    title3: 'Business',
    title4: 'with Dedicated Developers',
    btn: 'Talk to our Expert'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
