import { Component, OnInit } from '@angular/core';
// interface ServicesAll {
//   title1: string,
//   title2: string,
//   title3: string,
//   title4: string,
//   title5: string,
//   title6: string,
//   title7: string
// }

interface Iservices {
  images: string,
  title: string,
  description: string,
  button: string
}
@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {

  // serv: ServicesAll = {
  //   title1: 'Our Services',
  //   title2: 'Find the',
  //   title3: 'right offers',
  //   title4: 'for you.',
  //   title5: 'Don\'t know what to choose? ',
  //   title6: 'Drop us a line.',
  //   title7: 'Contact Us',
  // }

  services: Iservices[] = [
    {
      images: '../assets/images/mobile.png',
      title: 'Application Management and Modernisation',
      description: 'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
      button: 'Learn More ->'
    },
    {
      images: '../assets/images/web-design-icon.webp',
      title: 'Software Product Engineering',
      description: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing,developing, testing, and deploying the software products.',
      button: 'Learn More ->'
    },
    {
      images: '../assets/images/testing-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description: 'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QAensures the quality of the software.',
      button: 'Learn More ->'
    },
    {
      images: '../assets/images/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description: 'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
      button: 'Learn More ->'
    },
    {
      images: '../assets/images/software-development-1.png',
      title: 'Software outsourcing company',
      description: 'Tagline Infotech is an experienced software outsourcing company that provides services for variousbusinesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
      button: 'Learn More ->'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
