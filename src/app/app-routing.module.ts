import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './pages/cover/cover.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StartComponent } from './pages/start/start.component';



const appRoutes: Routes = [
    // { path: '', component: CoverComponent},
    { path: 'home', component: CoverComponent},
    { path: 'portrait', component: PortfolioComponent},
    { path: 'cv', component: ResumeComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
