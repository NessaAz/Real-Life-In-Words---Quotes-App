import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { QuotesComponent } from './quotes/quotes.component';
//import { AccountComponent } from './useraccount/useraccount.component';//

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    QuotesComponent,
    //AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
