import { Component, Input, OnInit } from '@angular/core';
interface Address {
  head: string,
  add: string,
  number: string
  email?: string
}
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
