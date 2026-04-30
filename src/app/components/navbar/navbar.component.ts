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
            <button (click)="isDonatePopupOpen = true" class="ml-4 rtl:mr-4 rtl:ml-0 inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {{ ts.t.nav.donate }}
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button (click)="ts.toggleLanguage()" class="mr-2 rtl:ml-2 rtl:mr-0 inline-flex items-center justify-center p-2 rounded-md text-primary border border-primary hover:bg-primary hover:text-white focus:outline-none">
              {{ ts.currentLang() === 'en' ? 'AR' : 'EN' }}
            </button>
            <button (click)="isDonatePopupOpen = true" class="mr-2 rtl:ml-2 rtl:mr-0 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-bold shadow-sm">
              {{ ts.t.nav.donate }}
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
      
      <!-- Donate Popup -->
      <div *ngIf="isDonatePopupOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
        <!-- Close background layer -->
        <div class="absolute inset-0" (click)="isDonatePopupOpen = false"></div>
        
        <!-- Modal content -->
        <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all relative z-10">
          <div class="bg-primary p-6 text-center relative">
            <button (click)="isDonatePopupOpen = false" class="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-white/80 hover:text-white focus:outline-none transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white">{{ ts.t.nav.donateTitle }}</h3>
            <p class="text-white/90 mt-2">{{ ts.t.nav.donateSubtitle }}</p>
          </div>
          
          <div class="p-6 md:p-8">
            <h4 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Bank Transfer Details</h4>
            
            <div class="flex gap-2 mb-6">
              <button (click)="activeAccount = 1" [class]="activeAccount === 1 ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'" class="flex-1 py-2 rounded-lg font-bold text-sm transition-all">
                DFCU-UGX
              </button>
              <button (click)="activeAccount = 2" [class]="activeAccount === 2 ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'" class="flex-1 py-2 rounded-lg font-bold text-sm transition-all">
                DFCU-Dollar
              </button>
            </div>
            
            <div *ngIf="activeAccount === 1" class="space-y-4 text-left rtl:text-right">
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Account Name</span>
                <span class="text-gray-900 font-bold text-lg leading-tight">Alban Islamic primary school Limited</span>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bank Name</span>
                <span class="text-gray-900 font-bold leading-tight">Development finance company in Uganda (Dfcu)</span>
              </div>
              
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200 flex flex-col gap-1 relative overflow-hidden">
                <div class="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-24 h-24 bg-primary/5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full -mr-4 rtl:-mr-0 rtl:-ml-4 -mt-4"></div>
                <span class="text-xs text-primary font-bold uppercase tracking-wider mb-1">Account Number</span>
                <div class="flex items-center gap-3">
                  <span class="text-gray-900 font-bold font-mono text-xl tracking-wider">01981021010565</span>
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-xs font-semibold text-gray-600 shadow-sm border border-gray-100">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> UGX Account
                  </span>
                </div>
              </div>
            </div>
            
            <div *ngIf="activeAccount === 2" class="space-y-4 text-left rtl:text-right">
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Account Name</span>
                <span class="text-gray-900 font-bold text-lg leading-tight">Alban Islamic primary school Limited</span>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bank Name</span>
                <span class="text-gray-900 font-bold leading-tight">Development finance company in Uganda (DFCU)</span>
              </div>
              
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200 flex flex-col gap-1 relative overflow-hidden">
                <div class="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-24 h-24 bg-primary/5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full -mr-4 rtl:-mr-0 rtl:-ml-4 -mt-4"></div>
                <span class="text-xs text-primary font-bold uppercase tracking-wider mb-1">Account Number</span>
                <div class="flex items-center gap-3">
                  <span class="text-gray-900 font-bold font-mono text-xl tracking-wider">02530010033463</span>
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-xs font-semibold text-gray-600 shadow-sm border border-gray-100">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Dollar Account
                  </span>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                  <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Swift Code</span>
                  <span class="text-gray-900 font-bold font-mono">DFCUUGKA</span>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-1">
                  <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Branch</span>
                  <span class="text-gray-900 font-bold">Iganga</span>
                </div>
              </div>
            </div>
            
            <div class="mt-8 text-center text-sm text-gray-500 font-medium italic">
              "Jazakallah Khair for your generous support"
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  ts = inject(TranslationService);
  isMenuOpen = false;
  isDonatePopupOpen = false;
  activeAccount = 1;
}
