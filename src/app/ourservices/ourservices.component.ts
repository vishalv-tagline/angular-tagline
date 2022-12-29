import { Component, Input, OnInit } from '@angular/core';
import { Iservices } from '../common';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {

  public ourserve!: Iservices[];

  // @Input() servDataes!: Iservices[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.ourserve = this.dataService.getData();
    // console.log(this.ourserve)
  }

}
