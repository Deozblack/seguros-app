import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';

import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [ provideClientHydration() ],  // add this line
  bootstrap: [AppComponent],
})
export class AppModule { }
