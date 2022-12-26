import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '../common';

@Component({
  selector: 'app-technofront',
  templateUrl: './technofront.component.html',
  styleUrls: ['./technofront.component.scss']
})
export class TechnofrontComponent implements OnInit {

  @Input() frontendsData!: Languages[];
  constructor() { }

  ngOnInit(): void {
  }

}
