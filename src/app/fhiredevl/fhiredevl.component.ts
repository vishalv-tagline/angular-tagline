import { Component, Input, OnInit } from '@angular/core';
import { InqueryService } from '../Services/inquery.service';

@Component({
  selector: 'app-fhiredevl',
  templateUrl: './fhiredevl.component.html',
  styleUrls: ['./fhiredevl.component.scss']
})
export class FhiredevlComponent implements OnInit {

  @Input() hireHead: string = '';
  @Input() hiredevDatas: string[] = [];

  public hireHead2: string = '';
  public hireDatas!: string[];

  constructor(private inqueryService: InqueryService) {
    this.hireHead2 = this.inqueryService.getHireHead();
    this.hireDatas = this.inqueryService.getHireDatas();
  }

  ngOnInit(): void {
  }

}
