import { NotesComponent } from './notes/notes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ControlPanelComponent } from './control-panel/control-panel.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:FeedbacksComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {path:'userprofile',component:UserProfileComponent, canActivate:[AuthGuard]},
  {path:'control-panel',component:ControlPanelComponent, canActivate:[AuthGuard]},
  {path:'notes',component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
