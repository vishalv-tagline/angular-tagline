import { Component, Input, OnInit } from '@angular/core';
import { InqueryService } from '../Services/inquery.service';

@Component({
  selector: 'app-fservices',
  templateUrl: './fservices.component.html',
  styleUrls: ['./fservices.component.scss']
})
export class FservicesComponent implements OnInit {

  // @Input() serviceHead: string = '';
  // @Input() serviceDatas: string[] = [];

  public serveHead: string = '';
  public serveDatas!: string[];

  constructor(private inqueryService: InqueryService) {
    this.serveHead = this.inqueryService.getServeHead();
    this.serveDatas = this.inqueryService.getServeData();
  }

  ngOnInit(): void {
  }

}
