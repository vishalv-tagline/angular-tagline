import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '../common';
@Component({
  selector: 'app-technoback',
  templateUrl: './technoback.component.html',
  styleUrls: ['./technoback.component.scss']
})
export class TechnobackComponent implements OnInit {

  @Input() backendsData!: Languages[];
  constructor() { }

  ngOnInit(): void {
  }

}
