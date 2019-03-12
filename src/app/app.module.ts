import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BackcoverComponent } from './pages/backcover/backcover.component';
import { CoverComponent } from './pages/cover/cover.component';
import { StartComponent } from './pages/start/start.component';
import { RigthSideComponent } from './pages/rigth-side/rigth-side.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    BackcoverComponent,
    CoverComponent,
    StartComponent,
    RigthSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
