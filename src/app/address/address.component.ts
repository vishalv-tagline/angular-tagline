import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../common';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addressDatas!: Address[];

  constructor() { }

  ngOnInit(): void {
  }

}
