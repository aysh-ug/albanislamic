import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface GalleryImage {
  id: number;
  currentExt: string;
  hasError: boolean;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header -->
    <div class="bg-gray-50 py-16 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-6">{{ ts.t.home.galleryTitle }}</h1>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {{ ts.t.home.heroSubtitle }}
        </p>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="py-20 bg-white min-h-[50vh]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ng-container *ngFor="let img of images; let i = index">
            <!-- Only show images that haven't errored out completely -->
            <div *ngIf="!img.hasError" 
                 (click)="openLightbox(i)"
                 class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200 overflow-hidden relative group">
               <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                 </svg>
               </div>
               <img [src]="'gallery/' + img.id + img.currentExt" 
                    (error)="handleError(img)"
                    alt="Gallery photo" 
                    class="w-full h-full object-cover">
            </div>
          </ng-container>
        </div>
        
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div *ngIf="isLightboxOpen" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm" (click)="closeLightbox()">
      
      <!-- Close Button -->
      <button (click)="closeLightbox()" class="absolute top-6 right-6 text-white hover:text-gray-300 p-2 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Previous Button -->
      <button (click)="prevImage($event)" class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 rtl:rotate-180">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <!-- Main Image -->
      <div class="relative max-w-5xl max-h-[80vh] w-full px-4" (click)="$event.stopPropagation()">
         <img *ngIf="validImages.length > 0"
              [src]="'gallery/' + validImages[selectedValidIndex].id + validImages[selectedValidIndex].currentExt" 
              alt="Expanded gallery photo" 
              class="w-full h-full object-contain mx-auto rounded-md shadow-2xl">
         <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
           {{ selectedValidIndex + 1 }} / {{ validImages.length }}
         </div>
      </div>

      <!-- Next Button -->
      <button (click)="nextImage($event)" class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 rtl:rotate-180">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  `
})
export class GalleryComponent implements OnInit {
  ts = inject(TranslationService);
  
  images: GalleryImage[] = [];
  
  isLightboxOpen = false;
  selectedValidIndex = 0;

  ngOnInit() {
    // Generate up to 50 images to check
    for (let i = 1; i <= 50; i++) {
      this.images.push({
        id: i,
        currentExt: '.jpg',
        hasError: false
      });
    }
  }

  // Get only images that have not errored out for the lightbox
  get validImages() {
    return this.images.filter(img => !img.hasError);
  }

  handleError(img: GalleryImage) {
    if (img.currentExt === '.jpg') {
      img.currentExt = '.png';
    } else if (img.currentExt === '.png') {
      img.currentExt = '.jpeg';
    } else {
      img.hasError = true;
    }
  }

  openLightbox(originalIndex: number) {
    // We need to find the index of this image in the validImages array
    const clickedImage = this.images[originalIndex];
    if (clickedImage.hasError) return;
    
    this.selectedValidIndex = this.validImages.findIndex(img => img.id === clickedImage.id);
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto';
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedValidIndex > 0) {
      this.selectedValidIndex--;
    } else {
      this.selectedValidIndex = this.validImages.length - 1;
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedValidIndex < this.validImages.length - 1) {
      this.selectedValidIndex++;
    } else {
      this.selectedValidIndex = 0;
    }
  }
}
