import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface CarouselItem {
  imgSrc: string;
  title: string;
  offer: string;
  priceFrom: string;
  priceTo: string;
}

@Component({
  selector: 'app-carousel-secondary',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel-secondary.component.html',
  styleUrl: './carousel-secondary.component.css'
})

export class CarouselSecondaryComponent {
  images: CarouselItem[] = [
    {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/ferias-ofertas/banner450x273px.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/julho-renault-ofertas/kwid_ETECH-450x273.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/julho-renault-ofertas/stepway-450x273.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/julho-renault-ofertas/Duster%20Intense%20Plus%20Mobile.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/julho-renault-ofertas/Kwid%20Mobile%20Final.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/julho-renault-ofertas/OROCH-450x273.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/semana-de-vantagens/PREMIER_RENAULT_SEMANA_VANTAGENS_450x273_KWID.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  },
  {
      imgSrc: 'https://storage.googleapis.com/dealersites-content/premier/semana-de-vantagens/PREMIER_RENAULT_SEMANA_VANTAGENS_450x273_KARDIAN.webp',
      title: 'Teste1',
      offer: 'Oferta1',
      priceFrom: 'De R$50.000,00',
      priceTo: 'Por R$40.000,00'
  }
]
}
