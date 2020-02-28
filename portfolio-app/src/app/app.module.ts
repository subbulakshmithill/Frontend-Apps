import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfileItemComponent } from './profile/profile-list/profile-item/profile-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    ProfileItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
