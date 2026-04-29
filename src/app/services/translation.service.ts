import { Injectable, signal, effect, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('en');

  // Translation dictionary
  private translations: Record<Language, any> = {
    en: {
      nav: {
        home: 'Home',
        aboutUs: 'About Us',
        language: 'Language'
      },
      home: {
        heroTitle: 'Welcome to Alban Islamic Primary School',
        heroSubtitle: 'Providing education and humanitarian assistance to children and communities in need.',
        missionTitle: 'Our Mission',
        missionText: 'To provide humanitarian assistance and promote community development in accordance with Islamic principles.',
        visionTitle: 'Our Vision',
        visionText: 'To create a world where every individual has access to basic needs and opportunities for growth and development.',
        whatWeDoTitle: 'What We Do',
        activities: [
          { title: 'Education Support', description: 'Support vulnerable children with education.' },
          { title: 'Mosques & Faith', description: 'Build mosques and strengthen Islamic faith.' },
          { title: 'Homes for Vulnerable', description: 'Construct homes for single mothers and widows.' },
          { title: 'Zakat Distribution', description: 'Distribute zakat to the poor and needy.' },
          { title: 'Safe Water', description: 'Provide safe water for communities.' },
          { title: 'Qurban', description: 'Perform Qurban to help those in need.' },
          { title: 'Ramadhan Fasting', description: 'Support during the holy month of Ramadhan.' },
          { title: 'Al-adhuhiya', description: 'Al-adhuhiya program for the community.' }
        ],
        impactTitle: 'Our Impact',
        impactText: 'Through our various programs, we strive to make a lasting difference in the Mayuge District, Uganda.',
        galleryTitle: 'Gallery'
      },
      about: {
        title: 'About Us',
        description: 'Alban Islamic Primary School Limited is a legally nonprofit organization with Reg No. 80020000246307, dedicated to providing educational opportunities to children in need. We believe that education is a fundamental right and strive to ensure that every child has access to quality learning. Our organization is also involved in providing relief and development services in vulnerable communities in Mayuge District, Uganda.',
        managementTitle: 'Management Team',
        staff: [
          { name: 'Mutagobwa Birali iddi', role: 'Executive Director' },
          { name: 'Ibrahim siraj Luwemba. Kukulakweta', role: 'Finance and Administration Officer' },
          { name: 'Aisha Nangobi', role: 'In charge Education and social warfare' },
          { name: 'Kisita musa', role: 'Programs Coordinator, Relief and Community Development' }
        ]
      },
      footer: {
        contactUs: 'Contact Information',
        email: 'admin@albanislamic.org',
        phone: '+256 [Placeholder]',
        address: 'St Matia Mulumba Village, Mayuge Town, Mayuge District, Uganda',
        copyright: '© 2026 Alban Islamic . All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        aboutUs: 'من نحن',
        language: 'اللغة'
      },
      home: {
        heroTitle: 'مرحباً بكم في مدرسة ألبان الإسلامية الابتدائية',
        heroSubtitle: 'توفير التعليم والمساعدة الإنسانية للأطفال والمجتمعات المحتاجة.',
        missionTitle: 'مهمتنا',
        missionText: 'تقديم المساعدة الإنسانية وتعزيز تنمية المجتمع وفقاً للمبادئ الإسلامية.',
        visionTitle: 'رؤيتنا',
        visionText: 'خلق عالم يحصل فيه كل فرد على الاحتياجات الأساسية وفرص النمو والتطور.',
        whatWeDoTitle: 'ماذا نفعل',
        activities: [
          { title: 'دعم التعليم', description: 'دعم الأطفال الضعفاء في التعليم.' },
          { title: 'المساجد والإيمان', description: 'بناء المساجد وتعزيز العقيدة الإسلامية.' },
          { title: 'منازل للضعفاء', description: 'بناء منازل للأمهات العازبات والأرامل.' },
          { title: 'توزيع الزكاة', description: 'توزيع الزكاة على الفقراء والمحتاجين.' },
          { title: 'المياه الآمنة', description: 'توفير المياه الآمنة للمجتمعات.' },
          { title: 'القربان', description: 'أداء القربان لمساعدة المحتاجين.' },
          { title: 'صيام رمضان', description: 'الدعم خلال شهر رمضان المبارك.' },
          { title: 'الأضحية', description: 'برنامج الأضحية للمجتمع.' }
        ],
        impactTitle: 'تأثيرنا',
        impactText: 'من خلال برامجنا المختلفة، نسعى جاهدين لإحداث فرق دائم في مقاطعة مايوجي، أوغندا.',
        galleryTitle: 'معرض الصور'
      },
      about: {
        title: 'من نحن',
        description: 'مدرسة ألبان الإسلامية الابتدائية المحدودة هي منظمة غير ربحية قانونياً برقم تسجيل 80020000246307، مكرسة لتوفير فرص تعليمية للأطفال المحتاجين. نحن نؤمن بأن التعليم حق أساسي ونسعى لضمان حصول كل طفل على تعليم جيد. وتشارك منظمتنا أيضاً في تقديم خدمات الإغاثة والتنمية في المجتمعات الضعيفة في مقاطعة مايوجي، أوغندا.',
        managementTitle: 'فريق الإدارة',
        staff: [
          { name: 'Mutagobwa Birali iddi', role: 'المدير التنفيذي' },
          { name: 'Ibrahim siraj Luwemba. Kukulakweta', role: 'مسؤول المالية والإدارة' },
          { name: 'Aisha Nangobi', role: 'مسؤولة التعليم والرعاية الاجتماعية' },
          { name: 'Kisita musa', role: 'منسق البرامج، الإغاثة وتنمية المجتمع' }
        ]
      },
      footer: {
        contactUs: 'معلومات الاتصال',
        email: 'admin@albanislamic.org',
        phone: '+256 [Placeholder]',
        address: 'قرية سانت ماتيا مولومبا، بلدة مايوجي، مقاطعة مايوجي، أوغندا',
        copyright: '© 2026 Alban Islamic. جميع الحقوق محفوظة.'
      }
    }
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Automatically switch direction based on language
    effect(() => {
      const lang = this.currentLang();
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.document.documentElement.dir = dir;
      this.document.documentElement.lang = lang;
    });
  }

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'en' ? 'ar' : 'en');
  }

  get t() {
    return this.translations[this.currentLang()];
  }
}
