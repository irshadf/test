import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
