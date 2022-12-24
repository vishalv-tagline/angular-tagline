import { Component, Input, OnInit } from '@angular/core';
interface Languages {
  image: string,
  title: string
}

@Component({
  selector: 'app-technoback',
  templateUrl: './technoback.component.html',
  styleUrls: ['./technoback.component.scss']
})
export class TechnobackComponent implements OnInit {

  @Input() backendsData!: Languages[];
  constructor() { }

  ngOnInit(): void {
  }

}
