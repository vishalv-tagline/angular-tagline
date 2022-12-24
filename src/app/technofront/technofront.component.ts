import { Component, Input, OnInit } from '@angular/core';
interface Language {
  image: string,
  title: string
}
@Component({
  selector: 'app-technofront',
  templateUrl: './technofront.component.html',
  styleUrls: ['./technofront.component.scss']
})
export class TechnofrontComponent implements OnInit {

  @Input() frontendsData!: Language[];
  constructor() { }

  ngOnInit(): void {
  }

}
