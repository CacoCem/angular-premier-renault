import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselSecondaryComponent } from '../../components/carousel-secondary/carousel-secondary.component';
CarouselSecondaryComponent


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent,CarouselComponent, CarouselSecondaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    {
      imgSrc:
      'https://cdn.appdealersites.com.br/premier/julho-renault-ofertas/Kardian%20banner.webp',
      imgAlt: 'imagem1'
    },
    {
      imgSrc:
      'https://cdn.appdealersites.com.br/premier/julho-renault-ofertas/Kwid%20Banner%20Final.webp',
      imgAlt: 'imagem2'
    },
    {
      imgSrc:
      'https://cdn.appdealersites.com.br/premier/julho-renault-ofertas/WhatsApp%20Image%202024-07-09%20at%2014.08.12.webp',
      imgAlt: 'imagem3'
    },
    {
      imgSrc:
      'https://cdn.appdealersites.com.br/premier/julho-renault-ofertas/Duster%20Intense%20Plus%201.6.webp',
      imgAlt: 'imagem4'
    }
  ]
}
