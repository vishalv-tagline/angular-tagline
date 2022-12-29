import { Component, Input, OnInit } from '@angular/core';
import { InqueryService } from '../Services/inquery.service';

@Component({
  selector: 'app-fservices',
  templateUrl: './fservices.component.html',
  styleUrls: ['./fservices.component.scss']
})
export class FservicesComponent implements OnInit {

  @Input() serviceHead: string = '';
  @Input() serviceDatas: string[] = [];

  serveHead: string = '';
  serveDatas!: string[];
  constructor(private inqueryService: InqueryService) { }

  ngOnInit(): void {
    this.serveHead = this.inqueryService.getServeHead();
    this.serveDatas = this.inqueryService.getServeData();
  }

}
