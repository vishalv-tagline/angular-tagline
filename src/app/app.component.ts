import { Component } from '@angular/core';
import { Experience, Footermain, Heading, ReviewHead, TechHead } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'taglineProject';

  navbar: string[] = ['Case Study', 'About', 'Hire developer', 'Technology', 'Industry']

  heading: Heading = {
    head1: 'Software Development Company ',
    head2: '& IT Consultancy',
    title1: 'Serving',
    title2: 'Start-UPs To Fortune 500 ',
    des1: 'With the help of Innovation and Technology, We give you the power to ',
    des2: 'change the world with your ideas.',
    button: 'Schedule a meeting',
    image: '../assets/images/images.png'
  }
  servtitle1: string = "Our Services"

  exprience: Experience = {
    title: 'We have the experience',
    des: 'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience',
  }
  womenImg: string = '../assets/images/woman.webp';



  tech: TechHead = {
    head: 'Our Technologies',
    subHead: 'Web',
    title1: 'Back End',
    title2: 'Front End'
  }


  chooseHead: string = "Why Choose Tagline Infotech ?";
  chooseDes: string = "We have a team of developers who use their expertise to provide complete web development,mobile app development,testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideasof the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us."

  reviewhead: ReviewHead = {
    mainHead: 'Words From Our Clientele',
    des1: 'Good things come for those who work hard, and thats why our clientele appreciate our efforts. Tagline Infotechprovides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.',
    des2: 'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback,and stories about partnering with us before making your own decision.'
  }


  address: string = 'Our Global Presence';


  add3: string = 'solutions@taglineinfotech.com';

  formHead: string = 'Get Your Free Quote Today';

  awardtitle1: string = 'Awards & '
  awardtitle2: string = 'Recognitions'
  awards: string[] = [
    '../assets/images/award-2.webp',
    '../assets/images/award-3.webp',
    '../assets/images/award-4.webp',
    '../assets/images/award-5.webp',
    '../assets/images/award-6.webp'
  ]

  footerhead: Footermain = {
    headMian: 'Get latest from Tagline Infotech',
    head1: 'Share your email so we can send you',
    head2: 'guides',
    head3: 'and',
    head4: 'industry news.',
    head5: 'Subscribe',
    head6: 'You can unsubscribe at any time. Read our privacy policy.',
    head7: '2022',
    head8: 'All rights reserved by',
    head9: 'Tagline Infotech LLP'
  }

  tecnologies: string[] = [
    'Web',
    'Mobile',
    'Desktop',
    'Plateform',
    'Database / Data Storage',
    'Big Data',
    'Machine Learning',
    'DevOps',
    'Clouds'
  ];
}