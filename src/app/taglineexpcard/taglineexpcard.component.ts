import { Component, Input, OnInit } from '@angular/core';
import { Choose } from '../common';
import { ExpCardService } from '../Services/exp-card.service';

@Component({
  selector: 'app-taglineexpcard',
  templateUrl: './taglineexpcard.component.html',
  styleUrls: ['./taglineexpcard.component.scss']
})
export class TaglineexpcardComponent implements OnInit {

  public expCardData !: Choose[];
  @Input() chooseDatas!: Choose[];
  constructor(private expCardService: ExpCardService) { }

  ngOnInit(): void {
    this.expCardData = this.expCardService.getData();
  }

}
