import { Component, Input, OnInit } from '@angular/core';
import { Inqury } from '../common';

@Component({
  selector: 'app-inquiery',
  templateUrl: './inquiery.component.html',
  styleUrls: ['./inquiery.component.scss']
})
export class InquieryComponent implements OnInit {

  @Input() footerDatas: Inqury[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
