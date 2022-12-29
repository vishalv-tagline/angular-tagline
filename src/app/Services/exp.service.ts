import { Injectable } from '@angular/core';
import { Numexp } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ExpService {


  private numbers: Numexp[] = [
    {
      image: '../assets/images/contentlogo.webp',
      heading: '125+',
      head2: 'Profesional'
    },
    {
      image: '../assets/images/contentlogo2.webp',
      heading: '450+',
      head2: 'Completed Projects'
    },
    {
      image: '../assets/images/contentlogo3.webp',
      heading: '150+',
      head2: 'Freelance Hours'
    },
    {
      image: '../assets/images/contentlogo4.webp',
      heading: '5+',
      head2: 'Years of experience'
    }
  ];
  constructor() { }

  gerData() {
    return this.numbers
  }
}
