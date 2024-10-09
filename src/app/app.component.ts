import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {

  // receiveDataMain(data: any) {
  //   console.log('Received data from main component: ' + data);
  // }

  ngAfterViewInit(): void {
    console.log('La finestra è stata completamente caricata! : ' + window.innerHeight);
  }

  title = 'wedding-app';

  /*   toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato']; */
}
