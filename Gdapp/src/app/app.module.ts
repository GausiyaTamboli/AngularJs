import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
