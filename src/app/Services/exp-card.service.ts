import { Injectable } from '@angular/core';
import { Choose } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ExpCardService {

  private chooses: Choose[] = [
    {
      image: '../assets/images/choose-roadmap.png',
      title1: '01',
      title2: 'Progressive Roadmap',
      des: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive'
    },
    {
      image: '../assets/images/choose-project.png',
      title1: '02',
      title2: 'Efficient Project Management',
      des: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently'
    },
    {
      image: '../assets/images/choose-flexible.svg',
      title1: '03',
      title2: 'Flexible Engagement Model',
      des: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.'
    },
    {
      image: '../assets/images/choose-cost.png',
      title1: '04',
      title2: 'Cost-Effective',
      des: 'Our team of developers provides the best development services at affordable prices. We believe thathigh-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring'
    },
    {
      image: '../assets/images/choose-delivery.png',
      title1: '05',
      title2: 'Consistent Delivery',
      des: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.'
    }
  ];

  getData() {
    return this.chooses
  }
  constructor() { }
}
