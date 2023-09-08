import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: StartComponent,title:"home" },
  { path: 'about', component: AboutComponent,title:"about" },
  { path: 'portfolio', component: PortfolioComponent ,title:"portfolio"},
  { path: 'contact', component: ContactComponent,title:"contact us" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
