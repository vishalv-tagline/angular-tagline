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

  hireHead2: string = '';
  hireDatas!: string[];
  constructor(private inqueryService: InqueryService) { }

  ngOnInit(): void {
    this.hireHead2 = this.inqueryService.getHireHead();
    this.hireDatas = this.inqueryService.getHireDatas();
  }

}
