import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from '../common';
import { ClientrateService } from '../Services/clientrate.service';

@Component({
  selector: 'app-taglineclientrating',
  templateUrl: './taglineclientrating.component.html',
  styleUrls: ['./taglineclientrating.component.scss']
})
export class TaglineclientratingComponent implements OnInit {

  starRating: number = 0;

  @Input() reviesDatas!: Reviews[];

  public clientrateData!: Reviews[];
  constructor(private clientrateService: ClientrateService) { }

  ngOnInit(): void {
    this.clientrateData = this.clientrateService.getData();
    // console.log('object :>> ', this.reviesDatas);
    // console.log('object :>> ', this.reviewNum);
  }

}
