import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {AngularMatImports} from './angular-mat-imports.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,AngularMatImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
