import { Component, Input, OnInit } from '@angular/core';
import { Choose } from '../common';

@Component({
  selector: 'app-taglineexpcard',
  templateUrl: './taglineexpcard.component.html',
  styleUrls: ['./taglineexpcard.component.scss']
})
export class TaglineexpcardComponent implements OnInit {
  @Input() chooseDatas!: Choose[];
  constructor() { }

  ngOnInit(): void {
  }

}
