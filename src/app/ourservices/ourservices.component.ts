import { Component, Input, OnInit } from '@angular/core';
interface Iservices {
  images: string,
  title: string,
  description: string,
  button: string
}
@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {

  @Input() servDataes!: Iservices[];

  constructor() { }

  ngOnInit(): void {
  }

}
