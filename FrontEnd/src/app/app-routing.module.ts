import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:FeedbacksComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
