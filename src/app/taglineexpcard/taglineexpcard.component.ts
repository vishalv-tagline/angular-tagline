import { Component, Input, OnInit } from '@angular/core';
interface Choose {
  image: string,
  title1: string,
  title2: string,
  des: string
}
@Component({
  selector: 'app-taglineexpcard',
  templateUrl: './taglineexpcard.component.html',
  styleUrls: ['./taglineexpcard.component.scss']
})
export class TaglineexpcardComponent implements OnInit {
  @Input() chooseDatas!: Choose[];
  constructor() { }

  ngOnInit(): void {
  }

}
