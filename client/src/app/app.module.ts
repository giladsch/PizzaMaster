import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaBuilderComponent } from './pizza-builder/pizza-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
