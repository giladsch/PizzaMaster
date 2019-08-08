import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AngularMatImports } from './angular-mat-imports.module';
import { FormsModule } from '@angular/forms';
import { GroupSearchComponent } from './group-search/group-search.component';
import { IgxInputGroupModule, IgxSliderModule } from 'igniteui-angular';
import { NewPizzaGroupComponent } from './new-pizza-group/new-pizza-group.component';
import { MatSliderModule } from '@angular/material';
import { PizzaLoaderComponent } from './pizza-loader/pizza-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupSearchComponent,
    NewPizzaGroupComponent,
    PizzaLoaderComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    FormsModule,
    BrowserModule, AngularMatImports, IgxInputGroupModule,
    IgxSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
