import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AngularMatImports } from './angular-mat-imports.module';
import { FormsModule } from '@angular/forms';
import { GroupSearchComponent } from './group-search/group-search.component';
import { IgxInputGroupModule, IgxSliderModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupSearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule, AngularMatImports, IgxInputGroupModule,
    IgxSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
