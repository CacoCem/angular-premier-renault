import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface carouselImage {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 1000;

  selectedIndex = 0;
  private autoSlideInterval: any;

  constructor() {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectedImage(index: number): void {
    clearInterval(this.autoSlideInterval); // Reset the interval to avoid overlapping
    this.selectedIndex = index;
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  onPrevClick(): void {
    clearInterval(this.autoSlideInterval); // Reset the interval to avoid overlapping
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  onNextClick(): void {
    clearInterval(this.autoSlideInterval); // Reset the interval to avoid overlapping
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
}
