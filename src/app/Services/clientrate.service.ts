import { Injectable } from '@angular/core';
import { Reviews } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ClientrateService {

  private reviews: Reviews[] = [
    {
      head: 1,
      des: '"Everything always turns out perfectly done."',
      name: 'IT & Computer Scientict and self employe',
      verify: 'Verified Review'
    },

    {
      head: 2,
      des: '"They understand complex technical requirements, and they have a team that quickly gets up to speed."',
      name: 'Founder, Cimpro.io',
      verify: 'Verified Review'
    },

    {
      head: 3,
      des: '"…they’re able to tackle pretty much everything you throw at them."',
      name: 'CEO, Promoprep',
      verify: 'Verified Review'
    },

    {
      head: 4,
      des: '"The team takes up new challenges and finishes the project on time."',
      name: 'Software Architect, Specialty Finance Company',
      verify: 'Verified Review'
    },

    {
      head: 5,
      des: '"We are getting close to launch now and its been a tremendous help to have their developers on my team."',
      name: 'Owner, e-Commerce Support Company',
      verify: 'Verified Review'
    },
    {
      head: 4,
      des: 'When things go wrong, they were good at adepting and problem solving on the fly',
      name: 'CEO,SupplimentSnoop',
      verify: 'Verified Review'
    },
  ];

  getData() {
    return this.reviews
  }
  constructor() { }
}
