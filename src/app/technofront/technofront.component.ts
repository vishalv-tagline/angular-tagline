import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '../common';
import { FrontlanguageService } from '../Services/frontlanguage.service';

@Component({
  selector: 'app-technofront',
  templateUrl: './technofront.component.html',
  styleUrls: ['./technofront.component.scss']
})
export class TechnofrontComponent implements OnInit {
  public frontData!: Languages[];
  @Input() frontendsData!: Languages[];
  constructor(private frontlanguageService: FrontlanguageService) { }

  ngOnInit(): void {
    this.frontData = this.frontlanguageService.getData();
  }

}
