import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbar_toggler_btn') navbar_btn!: ElementRef<HTMLButtonElement>;
  @ViewChild('navbarTooglerIcon') navbarTooglerIcon!: ElementRef<any>;

  navbarExpanded: boolean = false;
  

  navItems = [
    {
      icon: 'bi bi-house',
      label: 'Home',
      link: 'welcome',
    },
    {
      icon: 'fa-regular fa-heart',
      label: 'La nostra storia',
      link: 'history',
    },
    {
      icon: 'fa-solid fa-champagne-glasses',
      label: 'Cerimonia e Ricevimento',
      link: 'cerimonia',
    },
    {
      icon: 'fa-solid fa-user-check',
      label: 'RSVP',
      link: 'rsvp',
    },
    {
      icon: 'fa-solid fa-basket-shopping',
      label: 'Servizi Utili',
      link: 'servizi',
    },
    {
      icon: 'fa-solid fa-circle-question',
      label: 'FAQs',
      link: 'faq',
    },
    {
      icon: 'fa-solid fa-face-grin-hearts',
      label: 'Quanto conosci gli sposi?',
      link: 'quiz',
    },
  ];

  // ngOnInit() {
  //   this.navbarExpanded = false;
  // }

  isNavbarExpanded() {
    return this.navbar_btn.nativeElement.ariaExpanded;
  }

  closeTogglerBtn() {
    scrollTo(0, 0); //ritorna al top pagina
    if (this.isNavbarExpanded() === 'true') {
      this.navbar_btn.nativeElement.click(); //chiudo navbar items
    }
  }

  onClickToogler(e: any) {
    
    e.preventDefault;
    this.navbarTooglerIcon.nativeElement.classList.remove('run-animation-toogler');
    this.navbarTooglerIcon.nativeElement.offsetWidth;
    this.navbarTooglerIcon.nativeElement.classList.add('run-animation-toogler');
   }
}
