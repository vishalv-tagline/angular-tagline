import { Component, Input, OnInit } from '@angular/core';
import { Numexp } from '../common';
import { ExpService } from '../Services/exp.service';

@Component({
  selector: 'app-exprienceright',
  templateUrl: './exprienceright.component.html',
  styleUrls: ['./exprienceright.component.scss']
})
export class ExpriencerightComponent implements OnInit {
  @Input() numbersDatas!: Numexp[];
  constructor(private expService: ExpService) { }

  public expData!: Numexp[];

  ngOnInit(): void {
    this.expData = this.expService.gerData();
  }

}
