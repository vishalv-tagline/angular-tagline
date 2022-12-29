import { Component, Input, OnInit } from '@angular/core';
import { Languages } from '../common';
import { BacklanguageService } from '../Services/backlanguage.service';
@Component({
  selector: 'app-technoback',
  templateUrl: './technoback.component.html',
  styleUrls: ['./technoback.component.scss']
})
export class TechnobackComponent implements OnInit {

  @Input() backendsData!: Languages[];
  public backData!: Languages[];
  constructor(private backlanguageService: BacklanguageService) { }

  ngOnInit(): void {
    this.backData = this.backlanguageService.getData();
  }

}
