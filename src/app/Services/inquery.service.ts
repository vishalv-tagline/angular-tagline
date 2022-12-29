import { Injectable } from '@angular/core';
import { Inqury } from '../common';

@Injectable({
  providedIn: 'root'
})
export class InqueryService {

  private footers: Inqury[] = [{
    head: 'HR Inquiry',
    mail: 'hr@taglineinfotech.com',
    number: '+91 6354362521'
  },
  {
    head: 'Sales Inquiry',
    mail: 'solutions@taglineinfotech.com',
    number: 'Tagline infotech'
  }];

  getData() {
    return this.footers
  }

  helphead: string = 'Help & Advice';
  helps: string[] = [
    'Career',
    'About Us',
    'Contact Us',
    'Blog',
    'Privacy pilicy',
    'Sitemap'
  ]
  getHelpHead(): string {
    return this.helphead;
  }

  getHelpsData(): string[] {
    return this.helps
  }

  servicehead: string = 'Services'
  servicesfooters: string[] = [
    'Mobile',
    'web Development',
    'Web Design',
    'UI / UX Design',
    'Digital Marketing',
  ]

  getServeHead(): string {
    return this.servicehead
  }

  getServeData(): string[] {
    return this.servicesfooters;
  }

  hirehead: string = 'Hire Developer';
  hires: string[] = [
    'Hire Python Developer',
    'Hire Angular Developer',
    'Hire ROR Developer',
    'Hire Flutter Developer',
    'Hire React Js Developer',
    'Hire React Native Developer'
  ]

  getHireHead(): string {
    return this.hirehead;
  }

  getHireDatas(): string[] {
    return this.hires
  }

  constructor() { }
}
