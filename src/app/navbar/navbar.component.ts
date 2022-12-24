import { Component, Input, OnInit } from '@angular/core';
interface Navbar {
  about: string;
  heiD: string;
  tech: string,
  indu: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarItems!: string[];

  // caseStudy: string = 'Case Study'

  // navbar: Navbar = {
  //   about: 'About',
  //   heiD: 'Hire developer',
  //   tech: 'Technology',
  //   indu: 'Industry'
  // };

  btntype: string = 'Button';


  constructor() { }

  ngOnInit(): void {
  }

}
