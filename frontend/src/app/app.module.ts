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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
@NgModule({
    declarations: [
      AppComponent,
      WelcomePageComponent,
      HeaderComponent,
      FooterComponent,
      ButtonComponent,
      LoginComponent
    ],
    imports: [
      FormsModule,
      BrowserModule,
      MatIconModule,
      MatToolbarModule,
      MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }