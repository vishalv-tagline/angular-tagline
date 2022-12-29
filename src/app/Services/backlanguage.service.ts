import { Injectable } from '@angular/core';
import { Languages } from '../common';

@Injectable({
  providedIn: 'root'
})
export class BacklanguageService {

  private backends: Languages[] = [
    {
      image: '../assets/images/ror.png',
      title: 'Ruby on Rails'
    },

    {
      image: '../assets/images/python.png',
      title: 'Pythomn'
    },

    {
      image: '../assets/images/node_js.svg',
      title: 'Node Js'
    },

    {
      image: '../assets/images/php.png',
      title: 'Php'
    },

    {
      image: '../assets/images/android-java.png',
      title: 'Java'
    },

    {
      image: '../assets/images/go.png',
      title: 'Go Language'
    },

  ];
  constructor() { }

  getData() {
    return this.backends
  }
}
