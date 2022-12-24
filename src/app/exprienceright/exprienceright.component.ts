import { Component, Input, OnInit } from '@angular/core';

interface Numexp {
  image: string,
  heading: string,
  head2: string
}

@Component({
  selector: 'app-exprienceright',
  templateUrl: './exprienceright.component.html',
  styleUrls: ['./exprienceright.component.scss']
})
export class ExpriencerightComponent implements OnInit {
  @Input() numbersDatas!: Numexp[];
  constructor() { }

  ngOnInit(): void {
  }

}
