import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AlertService } from '../servizi/alert.service';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(@Inject(PLATFORM_ID) private platform: Object) {}

  days: number | undefined ;  
  hours: number | undefined ;  
  minutes: number | undefined ;  
  seconds: number | undefined ;  

  ngOnInit(): void {
    /* SOLUZIONE PER ERRORE NG0500 timeout (rif. https://stackoverflow.com/questions/78211490/angular-17-does-not-update-view-using-setinterval-with-ng0500-error-in-console) */
    if (!isPlatformServer(this.platform)) {
      this.countDown();
    }
    /*  */
  }

  countDown() {
    let countDownDate = new Date("Jul 11, 2025 18:00:00").getTime();

    setInterval(() => {

      let now = new Date().getTime();
      let distance = countDownDate - now;
    
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    }, 1000);
  }

}
