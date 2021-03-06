import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './pages/cover/cover.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';




const appRoutes: Routes = [
    { path: '', component: CoverComponent},
    { path: 'home', component: CoverComponent},
    { path: 'cv', component: ResumeComponent},
    { path: 'portrait', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: 'home'}
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
