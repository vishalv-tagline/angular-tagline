import { Injectable } from '@angular/core';
import { Languages } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FrontlanguageService {


  private frontends: Languages[] = [
    {
      image: '../assets/images/react-js.png',
      title: 'React Js'
    },

    {
      image: '../assets/images/angular-icon.png',
      title: 'Angular'
    },

    {
      image: '../assets/images/typescript-icon.png',
      title: 'Typescript'
    },

    {
      image: '../assets/images/vue-js.png',
      title: 'Vue Js'
    },

    {
      image: '../assets/images/meter-js.png',
      title: 'Mateor Js'
    },

    {
      image: '../assets/images/javascript-icon.png',
      title: 'Java Script'
    },

    {
      image: '../assets/images/html5.png',
      title: 'HTML 5'
    },
  ];

  getData() {
    return this.frontends;
  }
  constructor() { }
}
