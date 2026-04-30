import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header -->
    <div class="bg-gray-50 py-16 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-6">{{ ts.t.about.title }}</h1>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {{ ts.t.about.description }}
        </p>
      </div>
    </div>

    <!-- Management Team -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-primary">{{ ts.t.about.managementTitle }}</h2>
          <div class="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div *ngFor="let member of ts.t.about.staff" class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <!-- Staff Image -->
            <div class="h-72 relative">
              <img [src]="member.image" [alt]="member.name" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-gray-600 font-medium">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutUsComponent {
  ts = inject(TranslationService);
}
