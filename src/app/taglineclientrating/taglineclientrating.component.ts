import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from '../common';

@Component({
  selector: 'app-taglineclientrating',
  templateUrl: './taglineclientrating.component.html',
  styleUrls: ['./taglineclientrating.component.scss']
})
export class TaglineclientratingComponent implements OnInit {

  @Input() reviewNum: string[] = [];

  @Input() reviesDatas!: Reviews[];
  // numbers: number[] = [0, 1, 2, 3, 4];



  constructor() { }

  ngOnInit(): void {
    console.log('object :>> ', this.reviesDatas);
    console.log('object :>> ', this.reviewNum);
  }

}
