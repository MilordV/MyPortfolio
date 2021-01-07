import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routesComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './@templates/loader/loader.component';
import { NotFoundComponent } from './@templates/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routesComponents,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
