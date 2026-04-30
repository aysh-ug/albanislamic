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

    <!-- Call to Action instead of Gallery -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-primary mb-8">{{ ts.t.home.galleryTitle }}</h2>
        <a routerLink="/gallery" class="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors text-lg">
          View Our Photo Gallery
        </a>
      </div>
    </div>
  `
})
export class HomeComponent {
  ts = inject(TranslationService);
}
