import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <div class="relative bg-primary text-white overflow-hidden bg-[url('https://placehold.co/1920x1080/028cd4/white?text=School+Background+Photo')] bg-cover bg-center">
      <div class="absolute inset-0 bg-primary/90"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white" [innerHTML]="ts.t.home.heroTitle"></h1>
          <p class="text-xl md:text-2xl font-medium mb-10 text-white opacity-90">{{ ts.t.home.heroSubtitle }}</p>
          <a routerLink="/about-us" class="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-lg">
            {{ ts.t.nav.aboutUs }}
          </a>
        </div>
      </div>
      <!-- Decorative element -->
      <div class="absolute bottom-0 w-full h-16 bg-white z-10" style="clip-path: polygon(0 100%, 100% 100%, 100% 0);"></div>
    </div>

    <!-- Mission & Vision -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-blue-50 rounded-2xl p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">{{ ts.t.home.missionTitle }}</h2>
            <p class="text-gray-700 text-lg leading-relaxed">{{ ts.t.home.missionText }}</p>
          </div>
          <div class="bg-blue-50 rounded-2xl p-10 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">{{ ts.t.home.visionTitle }}</h2>
            <p class="text-gray-700 text-lg leading-relaxed">{{ ts.t.home.visionText }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- What We Do -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-primary">{{ ts.t.home.whatWeDoTitle }}</h2>
          <div class="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let activity of ts.t.home.activities" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <!-- Image Placeholder -->
            <div class="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden group">
              <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span class="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs text-gray-600 rounded">Photo Space</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ activity.title }}</h3>
              <p class="text-gray-600">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Section -->
    <div class="py-20 bg-primary text-white text-center px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl font-extrabold mb-6 text-white">{{ ts.t.home.impactTitle }}</h2>
        <p class="text-xl leading-relaxed opacity-90">{{ ts.t.home.impactText }}</p>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-primary">{{ ts.t.home.galleryTitle }}</h2>
          <div class="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let img of galleryImages; let i = index" 
               (click)="openLightbox(i)"
               class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200 overflow-hidden relative group">
             <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
               </svg>
             </div>
             <!-- Placeholder for gallery image -->
             <img [src]="'https://placehold.co/600x600/f3f4f6/a1a1aa?text=Photo+' + img" alt="Gallery photo" class="w-full h-full object-cover">
          </div>
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
         <img [src]="'https://placehold.co/1200x800/f3f4f6/a1a1aa?text=Photo+' + galleryImages[selectedImageIndex]" 
              alt="Expanded gallery photo" 
              class="w-full h-full object-contain mx-auto rounded-md shadow-2xl">
         <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
           {{ selectedImageIndex + 1 }} / {{ galleryImages.length }}
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
export class HomeComponent {
  ts = inject(TranslationService);
  
  galleryImages = [1, 2, 3, 4, 5, 6, 7, 8];
  isLightboxOpen = false;
  selectedImageIndex = 0;

  openLightbox(index: number) {
    this.selectedImageIndex = index;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when open
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto';
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    } else {
      this.selectedImageIndex = this.galleryImages.length - 1; // Wrap around
    }
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedImageIndex < this.galleryImages.length - 1) {
      this.selectedImageIndex++;
    } else {
      this.selectedImageIndex = 0; // Wrap around
    }
  }
}
