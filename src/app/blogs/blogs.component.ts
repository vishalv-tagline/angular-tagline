import { Component, Input, OnInit } from '@angular/core';
interface Blog {
  image: string,
  button: string,
  date: string,
  head1: string,
  des: string,
  endbtn: string
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  @Input() blogData!: Blog[];
  constructor() { }

  ngOnInit(): void {
  }
}
