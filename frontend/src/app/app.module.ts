import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnouncementsComponent,
    DashboardComponent,
    ProjectsComponent,
    MyaccountComponent,
    HelpdeskComponent,
    SettingsComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
