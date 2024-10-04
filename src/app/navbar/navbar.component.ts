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
  activeItem!: String;
  

  navItems = [
    {
      icon: 'fa-solid fa-house',
      id: '0',
      label: 'Home',
      link: 'welcome',
    },
    // {
    //   icon: 'fa-regular fa-heart',
    //   label: 'La nostra storia',
    //   link: 'history',
    // },
    {
      icon: 'fa-solid fa-champagne-glasses',
      id: '1',
      label: 'Cerimonia e Ricevimento',
      link: 'cerimonia',
    },
    {
      icon: 'fa-solid fa-user-check',
      id: '2',
      label: 'RSVP',
      link: 'rsvp',
    },
    {
      icon: 'fa-solid fa-basket-shopping',
      id: '3',
      label: 'Servizi Utili',
      link: 'servizi',
    },
    {
      icon: 'fa-solid fa-circle-question',
      id: '4',
      label: 'FAQs',
      link: 'faq',
    },
    {
      icon: 'fa-solid fa-face-grin-hearts',
      id: '5',
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

  onItemClick(ev: any) {
    this.activeItem = ev.target.parentNode.id;
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
