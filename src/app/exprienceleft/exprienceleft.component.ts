import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exprienceleft',
  templateUrl: './exprienceleft.component.html',
  styleUrls: ['./exprienceleft.component.scss']
})
export class ExprienceleftComponent implements OnInit {

  @Input() exprienceTitle: string = '';
  @Input() exprienceDes: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
