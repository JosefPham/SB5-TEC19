import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationGuard } from './authentification.guard';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthentificationGuard] },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
