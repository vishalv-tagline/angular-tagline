import { Component, Input, OnInit } from '@angular/core';
import { InqueryService } from '../Services/inquery.service';

@Component({
  selector: 'app-fhelpadvice',
  templateUrl: './fhelpadvice.component.html',
  styleUrls: ['./fhelpadvice.component.scss']
})
export class FhelpadviceComponent implements OnInit {

  // @Input() helpHead: string = '';
  // @Input() helpDatas: string[] = [];

  public helpHeadData: string = '';
  public helpDatas!: string[];
  constructor(private inqueryService: InqueryService) {
    this.helpHeadData = this.inqueryService.getHelpHead();
    this.helpDatas = this.inqueryService.getHelpsData();
  }

  ngOnInit(): void {
  }

}
