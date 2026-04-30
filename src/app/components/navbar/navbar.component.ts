import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="flex items-center gap-2">
              <img src="logo.png" alt="Alban Islamic Logo" class="h-10 w-auto object-contain" />
              <span class="text-2xl font-bold text-primary">Alban Islamic</span>
            </a>
          </div>
          
          <div class="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
            <a routerLink="/" routerLinkActive="text-primary border-b-2 border-primary" [routerLinkActiveOptions]="{exact: true}" class="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ ts.t.nav.home }}
            </a>
            <a routerLink="/about-us" routerLinkActive="text-primary border-b-2 border-primary" class="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ ts.t.nav.aboutUs }}
            </a>
            <a routerLink="/gallery" routerLinkActive="text-primary border-b-2 border-primary" class="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              {{ ts.t.nav.gallery }}
            </a>
            
            <button (click)="ts.toggleLanguage()" class="ml-4 rtl:mr-4 rtl:ml-0 inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {{ ts.currentLang() === 'en' ? 'عربي' : 'English' }}
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button (click)="ts.toggleLanguage()" class="mr-4 rtl:ml-4 rtl:mr-0 inline-flex items-center justify-center p-2 rounded-md text-primary border border-primary hover:bg-primary hover:text-white focus:outline-none">
              {{ ts.currentLang() === 'en' ? 'AR' : 'EN' }}
            </button>
            <button (click)="isMenuOpen = !isMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div *ngIf="isMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a routerLink="/" routerLinkActive="bg-gray-100 text-primary" [routerLinkActiveOptions]="{exact: true}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" (click)="isMenuOpen = false">
            {{ ts.t.nav.home }}
          </a>
          <a routerLink="/about-us" routerLinkActive="bg-gray-100 text-primary" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" (click)="isMenuOpen = false">
            {{ ts.t.nav.aboutUs }}
          </a>
          <a routerLink="/gallery" routerLinkActive="bg-gray-100 text-primary" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" (click)="isMenuOpen = false">
            {{ ts.t.nav.gallery }}
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  ts = inject(TranslationService);
  isMenuOpen = false;
}
