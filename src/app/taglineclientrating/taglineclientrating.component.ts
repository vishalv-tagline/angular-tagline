import { Component, Input, OnInit } from '@angular/core';
interface Reviews {
  head: string,
  des: string,
  name: string,
  verify: string
}
@Component({
  selector: 'app-taglineclientrating',
  templateUrl: './taglineclientrating.component.html',
  styleUrls: ['./taglineclientrating.component.scss']
})
export class TaglineclientratingComponent implements OnInit {
  @Input() reviesDatas!: Reviews[];
  constructor() { }

  ngOnInit(): void {
  }

}
