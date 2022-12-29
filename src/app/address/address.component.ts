import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../common';
import { ServeaddressService } from '../Services/serveaddress.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  serveaddData!: Address[];
  @Input() addressDatas!: Address[];

  constructor(private serveaddressService: ServeaddressService) { }

  ngOnInit(): void {
    this.serveaddData = this.serveaddressService.getData();
  }

}
