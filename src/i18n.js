import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        home: 'Home',
        about: 'About Us',
        activities: 'Activities',
        joinUs: 'Join Us',
        donate: 'Donate',
      },
      // Hero
      hero: {
        badge: 'Established 1978 in Morocco',
        title: 'Defending Human Rights & {{highlight}} Since 1978',
        highlight: 'Amazigh Culture',
        subtitle:
          'Tamaynut is an independent NGO committed to the universal values of human rights and the preservation of indigenous Amazigh identity through advocacy, education, and empowerment.',
        discoverBtn: 'Discover Our Work',
        joinBtn: 'Join the Movement',
      },
      // Mission
      mission: {
        sectionTitle: 'Our Core Mission',
        humanRights: { title: 'Human Rights', description: 'Protecting individual and collective freedoms, monitoring violations, and advocating for legal reforms that align with international standards.' },
        culture: { title: 'Cultural Heritage', description: 'Promoting the Tamazight language, preserving oral traditions, and ensuring Amazigh identity is recognized as a central pillar of North African history.' },
        youth: { title: 'Youth Empowerment', description: 'Building the capacity of the next generation through leadership workshops, educational programs, and cultural exchange initiatives.' },
      },
      // Activities
      activities: {
        sectionTitle: 'Recent Activities',
        sectionSubtitle: 'Stay updated with our latest field work and events.',
        viewAll: 'View All Reports',
        readMore: 'Read More',
      },
      // CTA
      cta: {
        title: 'Be Part of the Change. Support Our Mission.',
        subtitle: 'Your contributions help us continue our advocacy work and preserve the rich culture of the Amazigh people.',
        donate: 'Make a Donation',
        volunteer: 'Become a Volunteer',
      },
    },
  },

  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        activities: 'Activités',
        joinUs: 'Nous rejoindre',
        donate: 'Faire un don',
      },
      hero: {
        badge: 'Fondée en 1978 au Maroc',
        title: 'Défendre les Droits Humains & {{highlight}} depuis 1978',
        highlight: 'la Culture Amazighe',
        subtitle:
          `Tamaynut est une ONG indépendante engagée dans les valeurs universelles des droits humains et la préservation de l'identité amazighe à travers le plaidoyer, l'éducation et l'autonomisation.`,
        discoverBtn: 'Découvrir nos actions',
        joinBtn: 'Rejoindre le mouvement',
      },
      mission: {
        sectionTitle: 'Notre Mission Principale',
        humanRights: { title: 'Droits Humains', description: 'Protéger les libertés individuelles et collectives, surveiller les violations et plaider pour des réformes juridiques conformes aux normes internationales.' },
        culture: { title: 'Patrimoine Culturel', description: `Promouvoir la langue tamazight, préserver les traditions orales et faire reconnaître l'identité amazighe comme pilier central de l'histoire nord-africaine.` },
        youth: { title: 'Autonomisation des Jeunes', description: 'Renforcer les capacités de la prochaine génération par des ateliers de leadership, des programmes éducatifs et des échanges culturels.' },
      },
      activities: {
        sectionTitle: 'Activités Récentes',
        sectionSubtitle: 'Restez informé de nos derniers travaux de terrain et événements.',
        viewAll: 'Voir tous les rapports',
        readMore: 'Lire la suite',
      },
      cta: {
        title: 'Soyez acteur du changement. Soutenez notre mission.',
        subtitle: 'Vos contributions nous aident à poursuivre notre plaidoyer et à préserver la riche culture du peuple amazigh.',
        donate: 'Faire un don',
        volunteer: 'Devenir bénévole',
      },
    },
  },

  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        activities: 'الأنشطة',
        joinUs: 'انضم إلينا',
        donate: 'تبرع',
      },
      hero: {
        badge: 'تأسست عام 1978 في المغرب',
        title: 'ندافع عن حقوق الإنسان و{{highlight}} منذ 1978',
        highlight: 'الثقافة الأمازيغية',
        subtitle:
          'تاماينوت منظمة غير حكومية مستقلة تلتزم بالقيم الكونية لحقوق الإنسان والحفاظ على الهوية الأمازيغية الأصيلة من خلال المناصرة والتعليم والتمكين.',
        discoverBtn: 'اكتشف عملنا',
        joinBtn: 'انضم إلى الحركة',
      },
      mission: {
        sectionTitle: 'مهمتنا الأساسية',
        humanRights: { title: 'حقوق الإنسان', description: 'حماية الحريات الفردية والجماعية ورصد الانتهاكات والمناصرة من أجل إصلاحات قانونية تتوافق مع المعايير الدولية.' },
        culture: { title: 'التراث الثقافي', description: 'تعزيز اللغة الأمازيغية والحفاظ على التقاليد الشفهية وضمان الاعتراف بالهوية الأمازيغية ركيزةً أساسية في تاريخ شمال أفريقيا.' },
        youth: { title: 'تمكين الشباب', description: 'بناء قدرات الجيل القادم من خلال ورش قيادية وبرامج تعليمية ومبادرات التبادل الثقافي.' },
      },
      activities: {
        sectionTitle: 'الأنشطة الأخيرة',
        sectionSubtitle: 'ابق على اطلاع بآخر أعمالنا الميدانية وفعالياتنا.',
        viewAll: 'عرض جميع التقارير',
        readMore: 'اقرأ المزيد',
      },
      cta: {
        title: 'كن جزءاً من التغيير. ادعم مهمتنا.',
        subtitle: 'تساعدنا مساهماتك على مواصلة عمل المناصرة والحفاظ على الثقافة الغنية للشعب الأمازيغي.',
        donate: 'تبرع الآن',
        volunteer: 'كن متطوعاً',
      },
    },
  },

  zgh: {
    translation: {
      nav: {
        home: 'ⴰⵖⴰⵔⴰⵙ',
        about: 'ⵖⴼ ⵜⴰⵎⴰⵢⵏⵓⵜ',
        activities: 'ⵜⵉⵣⵉⴽⴽⵉⵡⵉⵏ',
        joinUs: 'ⵙⵎⵓⵏ ⵏⵖ',
        donate: 'ⵄⴰⵡⵏ',
      },
      hero: {
        badge: 'ⵜⵜⵓⵙⴽⴰⵔ ⴷ 1978 ⴳ ⵍⵎⵖⵔⵉⴱ',
        title: 'ⴰⵙⵔⴰⴳ ⵏ ⵜⵣⴷⴷⵓⵢⵉⵏ ⵏ ⵓⴼⴳⴰⵏ & {{highlight}} ⵙⵉⵔ 1978',
        highlight: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
        subtitle:
          'ⵜⴰⵎⴰⵢⵏⵓⵜ ⴷ ⵓⵙⵎⴰⴷ ⴰⵎⴰⵏⵏⴰⵡ ⵉⵙⵔⴰⴳⵏ ⵜⵣⴷⴷⵓⵢⵉⵏ ⵏ ⵓⴼⴳⴰⵏ ⴷ ⵜⵎⴰⵣⵉⵖⵜ ⵙ ⵓⵙⵏⵓⴱⴳ ⴷ ⵓⵙⵎⴷ ⴷ ⵓⵙⵡⵓⴷⴷⵓ.',
        discoverBtn: 'ⵙⵙⵏ ⵢⵉⴼⴼⵓⵙ ⵏⵖ',
        joinBtn: 'ⵙⵎⵓⵏ ⴰⵎⵓⵙⵙⵓ',
      },
      mission: {
        sectionTitle: 'ⴰⵙⵖⵉⵡⵙ ⴰⵎⴰⵜⴰⵢ',
        humanRights: { title: 'ⵜⵣⴷⴷⵓⵢⵉⵏ ⵏ ⵓⴼⴳⴰⵏ', description: 'ⵙⵔⴰⴳ ⵜⵉⵍⵍⵉⵜⵉⵏ ⵏ ⵎⴷⴷⵏ ⴷ ⵓⵣⵔⴼ ⵏ ⵜⵎⴰⵜⵉⴽⵜ.' },
        culture: { title: 'ⴰⴷⴷⴰⵍ ⴰⵎⵖⵔⵉⴱⵉ', description: 'ⴰⵙⴼⵍⵙ ⵏ ⵜⵎⴰⵣⵉⵖⵜ ⴷ ⵡⴰⵏⴰⵡⵏ ⵉⵏⵣⵡⵉⵏ ⵏ ⵜⵏⴼⴰⵍⵉⵜ.' },
        youth: { title: 'ⴰⵙⵡⵓⴷⴷⵓ ⵏ ⵉⵎⵣⵉⵢⵢⴰⵏ', description: 'ⴰⵙⵎⵓⵏⵏⵉ ⵏ ⵉⵎⵣⵉⵢⵢⴰⵏ ⵙ ⵜⴷⵓⵙⵉ ⴷ ⵡⴰⵜⵉⴳ.' },
      },
      activities: {
        sectionTitle: 'ⵜⵉⵣⵉⴽⴽⵉⵡⵉⵏ ⵉⵏⵏⴰⵥⵓⵕⵏ',
        sectionSubtitle: 'ⵙⵙⵏ ⴰⵎⴰⵢⵏⵓ ⵏ ⵜⵎⵙⵙⴰⵔⵉⵏ ⵏⵖ.',
        viewAll: 'ⵥⵕ ⵎⵏⵏⴰⵡⵜ ⵏ ⵜⵓⵣⵣⵓⵎⴰ',
        readMore: 'ⵔⵣⵓ ⵓⴳⴳⴰⵔ',
      },
      cta: {
        title: 'ⵉⵍⵉ ⴷ ⴰⵎⵏⵖⵉ. ⵄⴰⵡⵏ ⴰⵙⵖⵉⵡⵙ ⵏⵖ.',
        subtitle: 'ⵜⵉⵄⵄⵉⵣⵉⵏ ⵏⵏⴽ ⴰⴷ ⵉⵖⵓⵍⵏ ⵜⴰⵎⴰⵢⵏⵓⵜ ⴰⴷ ⵜⵙⴼⵍⵙ ⵜⵉⵏⵎⵍ ⵉⵎⴰⵣⵉⵖⵏ.',
        donate: 'ⵄⴰⵡⵏ ⴷⵉⵖ',
        volunteer: 'ⵉⵍⵉ ⴷ ⴰⵎⵏⴰⴹ',
      },
    },
  },
};

// Set document direction based on language
const setDocDir = (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar', 'zgh'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Set direction on initial load
setDocDir(i18n.language);

// Update direction whenever language changes
i18n.on('languageChanged', setDocDir);

export default i18n;
