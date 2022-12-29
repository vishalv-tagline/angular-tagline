import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../common';
import { ServeblogService } from '../Services/serveblog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  serveblogData !: Blog[]
  @Input() blogData!: Blog[];
  constructor(private serveblogService: ServeblogService) { }

  ngOnInit(): void {
    this.serveblogData = this.serveblogService.getData();
  }
}
