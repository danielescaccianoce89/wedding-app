import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('navbar_toggler_btn') navbar_btn!: ElementRef<HTMLButtonElement>;
  @ViewChild('navbarTooglerIcon') navbarTooglerIcon!: ElementRef<any>;

  navbarExpanded: boolean = false;
  activeItem!: String;
  currentUrl: any;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        console.log('URL dopo la navigazione:', this.currentUrl);

        switch(this.currentUrl) {
          case "/welcome": this.activeItem = "0"; break;
          case "/cerimonia": this.activeItem = "1"; break;
          case "/rsvp": this.activeItem = "2"; break;
          case "/faq": this.activeItem = "4"; break;
          case "/quiz": this.activeItem = "5"; break;
          default: break;
        }
      }
    });
  }

  navItems = [
    {
      imgUrl: '/img/home.png',
      id: '0',
      label: 'Home',
      link: 'welcome',
    },
    {
      imgUrl: '/img/balloon.png',
      id: '1',
      label: 'Cerimonia e Ricevimento',
      link: 'cerimonia',
    },
    {
      imgUrl: '/img/rsvp.png',
      id: '2',
      label: 'RSVP',
      link: 'rsvp',
    },
    {
      imgUrl: '/img/services.png',
      id: '3',
      label: 'Servizi Utili',
      link: 'servizi',
    },
    {
      imgUrl: '/img/faq.png',
      id: '4',
      label: 'FAQs',
      link: 'faq',
    },
    {
      imgUrl: '/img/quiz.png',
      id: '5',
      label: 'Quanto conosci gli sposi?',
      link: 'quiz',
    },
  ];

  isNavbarExpanded() {
    return this.navbar_btn.nativeElement.ariaExpanded;
  }

  onItemClick(ev: any) {
    ev.preventDefault;
    this.activeItem = ev.target.parentNode.id === "" ? ev.target.parentElement.parentNode.id : ev.target.parentNode.id;
    console.log(this.activeItem === ev.target.parentNode.id)
    this.navBarAction();
  }


  navBarAction() {
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
