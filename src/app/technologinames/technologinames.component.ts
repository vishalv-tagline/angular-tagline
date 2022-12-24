import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologinames',
  templateUrl: './technologinames.component.html',
  styleUrls: ['./technologinames.component.scss']
})
export class TechnologinamesComponent implements OnInit {

  @Input() technoNames!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
