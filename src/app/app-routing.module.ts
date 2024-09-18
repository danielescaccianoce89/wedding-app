import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerimoniaComponent } from './cerimonia/cerimonia.component';
import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ServiziUtiliComponent } from './servizi-utili/servizi-utili.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cerimonia', component: CerimoniaComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'servizi', component: ServiziUtiliComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
