import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../common';

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
