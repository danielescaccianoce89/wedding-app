import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CerimoniaComponent } from './cerimonia/cerimonia.component';
import { FaqComponent } from './faq/faq.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ServiziUtiliComponent } from './servizi-utili/servizi-utili.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [AppComponent,
    WelcomeComponent,
    ServiziUtiliComponent,
    RsvpComponent,
    QuizComponent,
    NavbarComponent,
    MainComponent,
    FaqComponent,
    CerimoniaComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatIconModule,
    NgxUiLoaderModule.forRoot({
      // Opzioni di configurazione opzionali
    }),
    HttpClientModule // Aggiungi HttpClientModule agli imports
  ],
  providers: [provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch())], // Configura HttpClient per usare fetch],
  bootstrap: [AppComponent],
})
export class AppModule {}
