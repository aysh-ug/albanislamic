import { Injectable, signal, effect, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  currentLang = signal<Language>('en');

  // Translation dictionary
  private translations: Record<Language, any> = {
    en: {
      nav: {
        home: 'Home',
        aboutUs: 'About Us',
        language: 'Language',
      },
      home: {
        heroTitle: 'Welcome to <br /> <span class="text-white">ALBAN ISLAMIC SCHOOL</span>',
        heroSubtitle:
          'Providing education and humanitarian assistance to children and communities in need.',
        missionTitle: 'Our Mission',
        missionText:
          'To provide humanitarian assistance and promote community development in accordance with Islamic principles.',
        visionTitle: 'Our Vision',
        visionText:
          'To create a world where every individual has access to basic needs and opportunities for growth and development.',
        whatWeDoTitle: 'What We Do',
        activities: [
          {
            title: 'Education Support',
            description: 'Support vulnerable children with education.',
          },
          { title: 'Mosques & Faith', description: 'Build mosques and strengthen Islamic faith.' },
          {
            title: 'Homes for Vulnerable',
            description: 'Construct homes for single mothers and widows.',
          },
          { title: 'Zakat Distribution', description: 'Distribute zakat to the poor and needy.' },
          {
            title: 'Safe Water',
            description: 'Provide safe water for communities, including borehole construction.',
          },
          {
            title: 'Qurban',
            description: 'Perform Qurban on Eid Adhuhiya days to help those in need.',
          },
          {
            title: 'Ramadhan Fasting',
            description: 'Support during the holy month of Ramadhan (Food basket/Ifutar program).',
          },
          { title: 'Al-adhuhiya', description: 'Al-adhuhiya program for the community.' },
          {
            title: 'Agriculture Inputs',
            description:
              'Provide agriculture inputs to farmers like maize, beans, cocoa seedlings.',
          },
        ],
        impactTitle: 'Our Impact',
        impactText:
          'Through our various programs, we strive to make a lasting difference in the Mayuge District, Uganda.',
        galleryTitle: 'Gallery',
      },
      about: {
        title: 'About Us',
        description:
          'Alban Islamic Primary School Limited is a nonprofit organization established and fully registered on 15th May, 2017 by the registrar of companies (Reg No: 80020000246307), and fully registered with the Ministry of Education and Sports. The objective of this organization is to improve on the social economic and education areas in the communities, catering for orphans and needy children. Our organization is also involved in providing relief and development services in ST. Mulumba Zone, Kyebando Parish, Mayuge Town Council, Mayuge District, Eastern Uganda.',
        managementTitle: 'Management Team',
        staff: [
          { name: 'Mutagobwa Birali iddi', role: 'Executive Director' },
          {
            name: 'Ibrahim siraj Luwemba. Kukulakweta',
            role: 'Finance and Administration Officer',
          },
          { name: 'Aisha Nangobi', role: 'In charge Education and social warfare' },
          { name: 'Kisita musa', role: 'Programs Coordinator, Relief and Community Development' },
        ],
      },
      footer: {
        contactUs: 'Contact Information',
        email: 'albanislamic@gmail.com',
        phone: '+256759860473 / +256782553697',
        address:
          'P.O BOX 1376, ST. Mulumba Zone, Kyebando Parish, Mayuge Town Council, Mayuge District, Uganda',
        copyright: '© 2026 Alban Islamic Primary School. All rights reserved.',
      },
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        aboutUs: 'من نحن',
        language: 'اللغة',
      },
      home: {
        heroTitle: 'مرحباً بكم في <br /> <span class="text-white">مدرسة ألبان الإسلامية</span>',
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
          {
            title: 'المياه الآمنة',
            description: 'توفير المياه الآمنة للمجتمعات، بما في ذلك بناء الآبار.',
          },
          { title: 'القربان', description: 'أداء القربان في أيام عيد الأضحى لمساعدة المحتاجين.' },
          {
            title: 'صيام رمضان',
            description: 'الدعم خلال شهر رمضان المبارك (سلة غذائية / إفطار).',
          },
          { title: 'الأضحية', description: 'برنامج الأضحية للمجتمع.' },
          {
            title: 'المدخلات الزراعية',
            description: 'توفير المدخلات الزراعية للمزارعين مثل الذرة والفاصوليا وشتلات الكاكاو.',
          },
          {
            title: 'العودة إلى المدرسة',
            description: 'توفير الحقائب المدرسية والمستلزمات الدراسية للطلاب.',
          },
        ],
        impactTitle: 'تأثيرنا',
        impactText:
          'من خلال برامجنا المختلفة، نسعى جاهدين لإحداث فرق دائم في مقاطعة مايوجي، أوغندا.',
        galleryTitle: 'معرض الصور',
      },
      about: {
        title: 'من نحن',
        description:
          'مدرسة ألبان الإسلامية الابتدائية المحدودة هي منظمة غير ربحية تأسست ومسجلة بالكامل في 15 مايو 2017 من قبل مسجل الشركات (رقم التسجيل: 80020000246307)، ومسجلة بالكامل لدى وزارة التعليم والرياضة. الهدف من هذه المنظمة هو تحسين المجالات الاجتماعية والاقتصادية والتعليمية في المجتمعات، وتلبية احتياجات الأيتام والأطفال المحتاجين. تشارك منظمتنا أيضاً في تقديم خدمات الإغاثة والتنمية في منطقة سانت مولومبا، أبرشية كيباندو، مجلس مدينة مايوجي، مقاطعة مايوجي، شرق أوغندا.',
        managementTitle: 'فريق الإدارة',
        staff: [
          { name: 'Mutagobwa Birali iddi', role: 'المدير التنفيذي' },
          { name: 'Ibrahim siraj Luwemba. Kukulakweta', role: 'مسؤول المالية والإدارة' },
          { name: 'Aisha Nangobi', role: 'مسؤولة التعليم والرعاية الاجتماعية' },
          { name: 'Kisita musa', role: 'منسق البرامج، الإغاثة وتنمية المجتمع' },
        ],
      },
      footer: {
        contactUs: 'معلومات الاتصال',
        email: 'albanislamic@gmail.com',
        phone: '+256759860473 / +256782553697',
        address:
          'صندوق بريد 1376، منطقة سانت مولومبا، أبرشية كيباندو، مجلس مدينة مايوجي، مقاطعة مايوجي، أوغندا',
        copyright: '© 2026 مدرسة ألبان الإسلامية الابتدائية. جميع الحقوق محفوظة.',
      },
    },
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
    this.currentLang.update((lang) => (lang === 'en' ? 'ar' : 'en'));
  }

  get t() {
    return this.translations[this.currentLang()];
  }
}
