import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white pt-12 pb-8 border-t-4 border-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <img src="logo.png" alt="Alban Islamic Logo" class="h-10 w-auto object-contain" />
              <span class="text-2xl font-bold">Alban Islamic</span>
            </div>
            <p class="text-gray-400 mt-4 max-w-md">
              {{ ts.t.home.heroSubtitle }}
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-bold text-primary mb-4">{{ ts.t.footer.contactUs }}</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary mt-1 mr-3 rtl:ml-3 rtl:mr-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span class="text-gray-300">{{ ts.t.footer.address }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary mt-1 mr-3 rtl:ml-3 rtl:mr-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <span class="text-gray-300">{{ ts.t.footer.location }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-primary mr-3 rtl:ml-3 rtl:mr-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:admin@albanislamic.org" class="text-gray-300 hover:text-white transition-colors">{{ ts.t.footer.email }}</a>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-primary mr-3 rtl:ml-3 rtl:mr-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span class="text-gray-300">{{ ts.t.footer.phone }}</span>
              </li>
            </ul>
          </div>
          
          <div class="lg:col-span-1 h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden shadow-lg border border-gray-700/50 relative">
            <div class="absolute inset-0 bg-gray-800 animate-pulse" id="map-skeleton"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Mayuge%20Town%20Council,%20Uganda&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="relative z-10 w-full h-full"
              onload="document.getElementById('map-skeleton').style.display='none';"
            ></iframe>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{{ ts.t.footer.copyright }}</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  ts = inject(TranslationService);
}
