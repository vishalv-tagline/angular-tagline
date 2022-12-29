import { Component, Input, OnInit } from '@angular/core';
import { Inqury } from '../common';
import { InqueryService } from '../Services/inquery.service';

@Component({
  selector: 'app-inquiery',
  templateUrl: './inquiery.component.html',
  styleUrls: ['./inquiery.component.scss']
})
export class InquieryComponent implements OnInit {
  public inqueryData!: Inqury[];
  @Input() footerDatas: Inqury[] = [];
  constructor(private inqueryService: InqueryService) { }

  ngOnInit(): void {
    this.inqueryData = this.inqueryService.getData();
  }

}
