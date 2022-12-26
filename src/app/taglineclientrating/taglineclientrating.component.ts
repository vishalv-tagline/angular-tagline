import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from '../common';

@Component({
  selector: 'app-taglineclientrating',
  templateUrl: './taglineclientrating.component.html',
  styleUrls: ['./taglineclientrating.component.scss']
})
export class TaglineclientratingComponent implements OnInit {

  starRating: number = 0;

  @Input() reviesDatas!: Reviews[];




  constructor() { }

  ngOnInit(): void {
    // console.log('object :>> ', this.reviesDatas);
    // console.log('object :>> ', this.reviewNum);
  }

}
