import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndustryComponent } from './industry/industry.component';
import { TalkComponent } from './talk/talk.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NotesComponent } from './notes/notes.component';
import { NewsComponent } from './news/news.component';
import { CommunityComponent } from './community/community.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},{
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'talk',
    component: TalkComponent
},
  {
    path: 'industry',
    component: IndustryComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IndustryComponent,
    TalkComponent,
    FooterComponent,
    ContactComponent,
    NotesComponent,
    NewsComponent,
    CommunityComponent,
    TechnologiesComponent,
    PolicyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
