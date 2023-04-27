import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/error/error.component';
import { SideNavbarComponent } from './core/side-navbar/side-navbar.component';
import { HomeComponent } from './core/home/home.component';
import { ProjectComponent } from './core/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SideNavbarComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
