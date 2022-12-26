import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fservices',
  templateUrl: './fservices.component.html',
  styleUrls: ['./fservices.component.scss']
})
export class FservicesComponent implements OnInit {

  @Input() serviceHead: string = '';
  @Input() serviceDatas: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
