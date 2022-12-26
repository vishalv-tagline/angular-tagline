import { Component, Input, OnInit } from '@angular/core';
import { Numexp } from '../common';

@Component({
  selector: 'app-exprienceright',
  templateUrl: './exprienceright.component.html',
  styleUrls: ['./exprienceright.component.scss']
})
export class ExpriencerightComponent implements OnInit {
  @Input() numbersDatas!: Numexp[];
  constructor() { }

  ngOnInit(): void {
  }

}
