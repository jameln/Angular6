import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColeurComponent } from './coleur/coleur.component';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColeurComponent,
    FilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
