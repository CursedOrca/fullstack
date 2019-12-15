// tslint:disable-next-line:import-spacing
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';

// tslint:disable-next-line:import-spacing
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
