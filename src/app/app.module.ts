import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Declare the AppComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    FormsModule    // Import FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
