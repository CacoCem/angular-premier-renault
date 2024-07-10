import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface carouselImage {
  imgSrc:string;
  imgAlt:string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  @Input()
  images:carouselImage[]=[]

  selectedIndex = 0;

  @Input()
  indicators = true;

  @Input()
  controls = true;

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }
}
