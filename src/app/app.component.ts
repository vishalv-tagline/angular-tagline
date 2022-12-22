import { Component } from '@angular/core';

interface Navbar {
  about: string;
  heiD: string;
  tech: string,
  indu: string
}

interface Heading {
  head1: string,
  head2: string,
  title1: string,
  title2: string,
  des1: string,
  des2: string,
  button: string,
  image: string
}

interface ServicesAll {
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string,
  title6: string,
  title7: string
}

interface Iservices {
  images: string,
  title: string,
  description: string,
  button: string
}

interface Experience {
  title: string,
  des: string,
}

interface Numexp {
  image: string,
  heading: string,
  head2: string
}

interface Languages {
  image: string,
  title: string
}

interface Choose {
  image: string,
  title1: string,
  title2: string,
  des: string
}

interface ReviewHead {
  mainHead: string,
  des1: string,
  des2: string
}


interface Blog {
  image: string,
  button: string,
  date: string,
  head1: string,
  des: string,
  endbtn: string
}

interface ChooseEnd {
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  btn: string
}

interface Address {
  head: string,
  add: string,
  number: string
  email?: string
}

interface Inqury {
  head: string,
  mail: string,
  number: string
}

interface Footericon {
  head: string,
  item1: string,
  item2: string,
  item3: string,
  item4: string,
  item5: string,
  item6?: string
}

interface Award {
  title1: string,
  title2: string,
  image1: string,
  image2: string,
  image3: string,
  image4: string,
  image5: string
}

interface Footermain {
  headMian: string,
  head1: string,
  head2: string,
  head3: string,
  head4: string,
  head5: string,
  head6: string,
  head7: string,
  head8: string,
  head9: string
}

interface TechHead {
  head: string,
  subHead: string,
  title1: string,
  title2: string
}

interface Tech {
  item1: string,
  item2: string,
  item3: string,
  item4: string,
  item5: string,
  item6: string,
  item7: string,
  item8: string
  item9: string
}

interface Reviews {
  head: string,
  des: string,
  name: string,
  verify: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taglineProject';

  caseStudy: string = 'Case Study'

  navbar: Navbar = {
    about: 'About',
    heiD: 'Hire developer',
    tech: 'Technology',
    indu: 'Industry'
  };

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

  btntype: string = 'Button';


  serv: ServicesAll = {
    title1: 'Our Services',
    title2: 'Find the',
    title3: 'right offers',
    title4: 'for you.',
    title5: 'Don\'t know what to choose? ',
    title6: 'Drop us a line.',
    title7: 'Contact Us',
  }

  service1: Iservices = {
    images: '../assets/images/mobile.png',
    title: 'Application Management and Modernisation',
    description: 'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
    button: 'Learn More ->'
  }

  service2: Iservices = {
    images: '../assets/images/web-design-icon.webp',
    title: 'Software Product Engineering',
    description: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing,developing, testing, and deploying the software products.',
    button: 'Learn More ->'
  }

  service3: Iservices = {
    images: '../assets/images/testing-icon.webp',
    title: 'Agile QA, Automation, and DevOps',
    description: 'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QAensures the quality of the software.',
    button: 'Learn More ->'
  }

  service4: Iservices = {
    images: '../assets/images/uiux-design-icon.webp',
    title: 'Digital Strategy & Design',
    description: 'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
    button: 'Learn More ->'
  }

  service5: Iservices = {
    images: '../assets/images/software-development-1.png',
    title: 'Software outsourcing company',
    description: 'Tagline Infotech is an experienced software outsourcing company that provides services for variousbusinesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
    button: 'Learn More ->'
  }

  exprience: Experience = {
    title: 'We have the experience',
    des: 'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience',
  }
  womenImg: string = '../assets/images/woman.webp';

  numExp1: Numexp = {
    image: '../assets/images/contentlogo.webp',
    heading: '125+',
    head2: 'Profesional'
  }

  numExp2: Numexp = {
    image: '../assets/images/contentlogo2.webp',
    heading: '450+',
    head2: 'Completed Projects'
  }

  numExp3: Numexp = {
    image: '../assets/images/contentlogo3.webp',
    heading: '150+',
    head2: 'Freelance Hours'
  }

  numExp4: Numexp = {
    image: '../assets/images/contentlogo4.webp',
    heading: '5+',
    head2: 'Years of experience'
  }

  tech: TechHead = {
    head: 'Our Technologies',
    subHead: 'Web',
    title1: 'Back End',
    title2: 'Front End'
  }

  ror: Languages = {
    image: '../assets/images/ror.png',
    title: 'Ruby on Rails'
  }

  python: Languages = {
    image: '../assets/images/python.png',
    title: 'Pythomn'
  }

  node: Languages = {
    image: '../assets/images/node_js.svg',
    title: 'Node Js'
  }

  php: Languages = {
    image: '../assets/images/php.png',
    title: 'Php'
  }

  java: Languages = {
    image: '../assets/images/android-java.png',
    title: 'Java'
  }

  go: Languages = {
    image: '../assets/images/go.png',
    title: 'Go Language'
  }

  react: Languages = {
    image: '../assets/images/react-js.png',
    title: 'React Js'
  }

  angular: Languages = {
    image: '../assets/images/angular-icon.png',
    title: 'Angular'
  }

  typescript: Languages = {
    image: '../assets/images/typescript-icon.png',
    title: 'Typescript'
  }

  vuejs: Languages = {
    image: '../assets/images/vue-js.png',
    title: 'Vue Js'
  }

  mateor: Languages = {
    image: '../assets/images/meter-js.png',
    title: 'Mateor Js'
  }

  javascript: Languages = {
    image: '../assets/images/javascript-icon.png',
    title: 'Java Script'
  }

  html: Languages = {
    image: '../assets/images/html5.png',
    title: 'HTML 5'
  }

  choose1: Choose = {
    image: '../assets/images/choose-roadmap.png',
    title1: '01',
    title2: 'Progressive Roadmap',
    des: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive'
  }

  choose2: Choose = {
    image: '../assets/images/choose-project.png',
    title1: '02',
    title2: 'Efficient Project Management',
    des: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently'
  }

  choose3: Choose = {
    image: '../assets/images/choose-flexible.svg',
    title1: '03',
    title2: 'Flexible Engagement Model',
    des: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.'
  }

  choose4: Choose = {
    image: '../assets/images/choose-cost.png',
    title1: '04',
    title2: 'Cost-Effective',
    des: 'Our team of developers provides the best development services at affordable prices. We believe thathigh-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring'
  }

  choose5: Choose = {
    image: '../assets/images/choose-delivery.png',
    title1: '05',
    title2: 'Consistent Delivery',
    des: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.'
  }

  chooseHead: string = "Why Choose Tagline Infotech ?";
  chooseDes: string = "We have a team of developers who use their expertise to provide complete web development,mobile app development,testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideasof the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us."

  reviewhead: ReviewHead = {
    mainHead: 'Words From Our Clientele',
    des1: 'Good things come for those who work hard, and thats why our clientele appreciate our efforts. Tagline Infotechprovides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.',
    des2: 'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback,and stories about partnering with us before making your own decision.'
  }

  blog1: Blog = {
    image: '../assets/images/Python-vs-Java.png',
    button: 'Python',
    date: '15/12/22',
    head1: 'Python vs Java Comparison Of',
    des: 'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
    endbtn: 'Read More ->'
  }

  blog2: Blog = {
    image: '../assets/images/Node.js-Application.png',
    button: 'Node Js',
    date: '9/12/22',
    head1: 'Best Practices for Node.js Application Development:...',
    des: 'Quick Summary Want to know about node js architecture and node js architecture best',
    endbtn: 'Read More ->'
  }

  blog3: Blog = {
    image: '../assets/images/Kotlin-vs-Java.png',
    button: 'RoR',
    date: '9/12/22',
    head1: 'JavaScript vs Ruby On Rails: What...',
    des: 'JavaScript vs Ruby On Rails: What...',
    endbtn: 'Read More ->'
  }

  endblog: ChooseEnd = {
    title1: 'Empower',
    title2: ' Your ',
    title3: 'Business',
    title4: 'with Dedicated Developers',
    btn: 'Talk to our Expert'
  }

  address: string = 'Our Global Presence';

  add1: Address = {
    head: 'India (HQ)',
    add: 'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,Gujarat 394101',
    number: '+91 9913 808 285'
  }

  add2: Address = {
    head: 'U.S.A',
    add: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    number: '+1 (404) 483-3388'
  }

  add3: Address = {
    head: 'United Kingdom',
    add: '65 Byron road North wembley Middlesex, london HA0 3PB',
    number: '+44 78240 75400',
    email: 'solutions@taglineinfotech.com'
  }

  formHead: string = 'Get Your Free Quote Today';

  footer1: Inqury = {
    head: 'HR Inquiry',
    mail: 'hr@taglineinfotech.com',
    number: '+91 6354362521'
  }

  footer2: Inqury = {
    head: 'Sales Inquiry',
    mail: 'solutions@taglineinfotech.com',
    number: 'Tagline infotech'
  }

  award: Award = {
    title1: 'Awards & ',
    title2: 'Recognitions',
    image1: '../assets/images/award-2.webp',
    image2: '../assets/images/award-3.webp',
    image3: '../assets/images/award-4.webp',
    image4: '../assets/images/award-5.webp',
    image5: '../assets/images/award-6.webp'
  }

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

  tecno: Tech = {
    item1: 'Web',
    item2: 'Mobile',
    item3: 'Desktop',
    item4: 'Plateform',
    item5: 'Database / Data Storage',
    item6: 'Big Data',
    item7: 'Machine Learning',
    item8: 'DevOps',
    item9: 'Clouds'
  }

  help: Footericon = {
    head: 'Help & Advice',
    item1: 'Career',
    item2: 'About Us',
    item3: 'Contact Us',
    item4: 'Blog',
    item5: 'Privacy pilicy',
    item6: 'Sitemap'
  }

  service: Footericon = {
    head: 'Services',
    item1: 'Mobile',
    item2: 'web Development',
    item3: 'Web Design',
    item4: 'UI / UX Design',
    item5: 'Digital Marketing',
  }

  hire: Footericon = {
    head: 'Hire Developer',
    item1: 'Hire Python Developer',
    item2: 'Hire Angular Developer',
    item3: 'Hire ROR Developer',
    item4: 'Hire Flutter Developer',
    item5: 'Hire React Js Developer',
    item6: 'Hire React Native Developer'
  }

  revie1: Reviews = {
    head: '5.0',
    des: '"Everything always turns out perfectly done."',
    name: 'IT & Computer Scientict and self employe',
    verify: 'Verified Review'
  }

  revie2: Reviews = {
    head: '5.0',
    des: '"They understand complex technical requirements, and they have a team that quickly gets up to speed."',
    name: 'Founder, Cimpro.io',
    verify: 'Verified Review'
  }

  revie3: Reviews = {
    head: '5.0',
    des: '"…they’re able to tackle pretty much everything you throw at them."',
    name: 'CEO, Promoprep',
    verify: 'Verified Review'
  }

  revie4: Reviews = {
    head: '5.0',
    des: '"The team takes up new challenges and finishes the project on time."',
    name: 'Software Architect, Specialty Finance Company',
    verify: 'Verified Review'
  }

  revie5: Reviews = {
    head: '5.0',
    des: '"We are getting close to launch now and its been a tremendous help to have their developers on my team."',
    name: 'Owner, e-Commerce Support Company',
    verify: 'Verified Review'
  }

  revie6: Reviews = {
    head: '5.0',
    des: 'When things go wrong, they were good at adepting and problem solving on the fly',
    name: 'CEO,SupplimentSnoop',
    verify: 'Verified Review'
  }
}