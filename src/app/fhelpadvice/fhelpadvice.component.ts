import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhelpadvice',
  templateUrl: './fhelpadvice.component.html',
  styleUrls: ['./fhelpadvice.component.scss']
})
export class FhelpadviceComponent implements OnInit {

  @Input() helpHead: string = '';
  @Input() helpDatas: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
