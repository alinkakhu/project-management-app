import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
      AppComponent,
      WelcomePageComponent,
      HeaderComponent,
      FooterComponent,
      ButtonComponent,

    ],
    imports: [
      FormsModule,
      BrowserModule,
      MatIconModule,
      MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }