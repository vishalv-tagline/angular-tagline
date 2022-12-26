import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhiredevl',
  templateUrl: './fhiredevl.component.html',
  styleUrls: ['./fhiredevl.component.scss']
})
export class FhiredevlComponent implements OnInit {

  @Input() hireHead: string = '';
  @Input() hiredevDatas: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
