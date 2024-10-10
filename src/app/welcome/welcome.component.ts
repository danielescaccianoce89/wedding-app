import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { AlertService } from '../servizi/alert.service';
import { isPlatformServer } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  @ViewChild('secondVal') secondVal!: ElementRef<any>;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 50,
    //navText: ["<img src='/img/carousel/back.png' class='arrow-img'/>", "<img src='/img/carousel/next.png' class='arrow-img'/>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: 'animate__backInRight',
    animateOut: 'animate__fadeOutLeft',
    rewind: true    
  }

  slidesStore = [
    { id: '1', src: '/img/carousel/1.jpg', title: 'Slide 1', alt: '1' },
    { id: '2', src: '/img/carousel/2.jpg', title: 'Slide 1', alt: '1' },
    { id: '3', src: '/img/carousel/3.jpg', title: 'Slide 1', alt: '1' },
    { id: '4', src: '/img/carousel/4.jpg', title: 'Slide 1', alt: '1' },
    { id: '5', src: '/img/carousel/5.jpg', title: 'Slide 1', alt: '1' },
    { id: '6', src: '/img/carousel/6.jpeg', title: 'Slide 1', alt: '1' },
    { id: '7', src: '/img/carousel/7.jpg', title: 'Slide 1', alt: '1' },
    { id: '8', src: '/img/carousel/8.jpg', title: 'Slide 1', alt: '1' },
    { id: '9', src: '/img/carousel/9.jpg', title: 'Slide 1', alt: '1' },
    { id: '10', src: '/img/carousel/10.jpg', title: 'Slide 1', alt: '1' },
    { id: '11', src: '/img/carousel/11.jpg', title: 'Slide 1', alt: '1' },
    { id: '12', src: '/img/carousel/12.jpg', title: 'Slide 1', alt: '1' },
    { id: '13', src: '/img/carousel/13.jpg', title: 'Slide 1', alt: '1' },
    { id: '14', src: '/img/carousel/14.jpg', title: 'Slide 1', alt: '1' },
    { id: '15', src: '/img/carousel/15.jpeg', title: 'Slide 1', alt: '1' },
    { id: '16', src: '/img/carousel/16.jpeg', title: 'Slide 1', alt: '1' },
    { id: '17', src: '/img/carousel/17.jpeg', title: 'Slide 1', alt: '1' },
    { id: '18', src: '/img/carousel/18.jpeg', title: 'Slide 1', alt: '1' },
    { id: '19', src: '/img/carousel/19.jpeg', title: 'Slide 1', alt: '1' },
    { id: '20', src: '/img/carousel/20.jpg', title: 'Slide 1', alt: '1' },
    { id: '21', src: '/img/carousel/21.jpeg', title: 'Slide 1', alt: '1' }
  ];

  constructor(@Inject(PLATFORM_ID) private platform: Object) {}

  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;

  ngOnInit(): void {
    /* SOLUZIONE PER ERRORE NG0500 timeout (rif. https://stackoverflow.com/questions/78211490/angular-17-does-not-update-view-using-setinterval-with-ng0500-error-in-console) */
    if (!isPlatformServer(this.platform)) {
      this.countDown();
    }
    /*  */
  }

  countDown() {
    let countDownDate = new Date('Jul 11, 2025 18:30:00').getTime();

    setInterval(() => {
      this.secondVal.nativeElement.classList.remove('flip');
      let now = new Date().getTime();
      let distance = countDownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.secondVal.nativeElement.offsetWidth;
      this.secondVal.nativeElement.classList.add('flip');
    }, 1000);
  }
}
