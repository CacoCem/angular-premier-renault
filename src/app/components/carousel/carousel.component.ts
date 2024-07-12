import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';



interface carouselImage {
  imgSrc:string;
  imgAlt:string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  @Input()
  images:carouselImage[]=[]

  @Input()
  indicators = true;

  @Input()
  controls = true;

  @Input()
  autoSlide = false;

  @Input()
  slideInterval = 3000;

  selectedIndex = 0;


  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}

