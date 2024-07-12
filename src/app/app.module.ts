import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
