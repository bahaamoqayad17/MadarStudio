"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    "header.brand": "MADARSTUDIO & CO",
    "header.getInTouch": "GET IN TOUCH",

    // Hero
    "hero.line1": "EVERYTHING",
    "hero.line2": "IS DESIGN, WE DESIGN",
    "hero.line3": "EVERYTHING",
    "hero.subline1": "BEYOND STANDARDS,",
    "hero.subline2": "CREATING TIMELESS BRANDS",

    // About
    "about.description1":
      "With over 10 years of experience, we've formed a collaborative, dynamic, and agile team that works end-to-end on complete processes including design, illustration, copywriting, and web design. We develop cases that externalize the essence of purposes, combining beauty, planning & exclusivity. Our work is present in major capitals and we've reached over 15 countries, launching more than 150 impactful brands and reaching an incredible diversity of niches.",
    "about.description2":
      "Far beyond aesthetics, planned design is one of the first and main fundamental elements of your branding strategy.",
    "about.location": "WORLDWIDE",
    "about.projects": "PROJECTS",
    "about.years": "YEARS",

    // Services
    "services.logo": "LOGO",
    "services.brandIdentity": "BRAND IDENTITY",
    "services.artDirection": "ART DIRECTION",
    "services.strategy": "STRATEGY",
    "services.verbalGuides": "VERBAL GUIDES",
    "services.branding": "BRANDING",
    "services.naming": "NAMING",
    "services.web": "WEB",
    "services.packaging": "PACKAGING",
    "services.illustration": "ILLUSTRATION",
    "services.3d": "3D",
    "services.motion": "MOTION",

    // Selected Work
    "work.title": "Featured Work",
    "work.viewAll": "View All →",
    "work.madarBranding": "Madar Branding",
    "work.brandIdentity": "Brand Identity",
    "work.solaraStudios": "Solara Studios",
    "work.visualIdentity": "Visual Identity",
    "work.nordicWave": "Nordic Wave",
    "work.artDirection": "Art Direction",
    "work.apexVentures": "Apex Ventures",
    "work.brandStrategy": "Brand Strategy",
    "work.luminaDesign": "Lumina Design",
    "work.webPresence": "Web Presence",
    "work.terraCollective": "Terra Collective",
    "work.packaging": "Packaging",

    // Team
    "team.title": "The Team",
    "team.creativeDirector": "Creative Director",
    "team.brandStrategist": "Brand Strategist",
    "team.artDirector": "Art Director",
    "team.webDesigner": "Web Designer",

    // CTA
    "cta.title": "LET'S CREATE A NEW CHAPTER",

    // Footer
    "footer.tagline": "Brand identity & visual systems",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.rights": "All rights reserved.",
  },
  ar: {
    // Header
    "header.brand": "مدار ستوديو وشركاه",
    "header.getInTouch": "تواصل معنا",

    // Hero
    "hero.line1": "كل شيء",
    "hero.line2": "هو تصميم، ونحن نصمم",
    "hero.line3": "كل شيء",
    "hero.subline1": "ما وراء المعايير،",
    "hero.subline2": "نصنع علامات تجارية خالدة",

    // About
    "about.description1":
      "مع أكثر من 10 سنوات من الخبرة، شكلنا فريقًا تعاونيًا وديناميكيًا ومرنًا يعمل من البداية إلى النهاية على عمليات كاملة تشمل التصميم والرسم التوضيحي وكتابة المحتوى وتصميم الويب. نطور حالات تُظهر جوهر الأهداف، تجمع بين الجمال والتخطيط والتميز. عملنا موجود في العواصم الكبرى ووصلنا إلى أكثر من 15 دولة، وأطلقنا أكثر من 150 علامة تجارية مؤثرة ووصلنا إلى تنوع مذهل من المجالات.",
    "about.description2":
      "أبعد من الجماليات، التصميم المخطط هو أحد العناصر الأساسية الأولى والرئيسية لاستراتيجية علامتك التجارية.",
    "about.location": "حول العالم",
    "about.projects": "مشروع",
    "about.years": "سنوات",

    // Services
    "services.logo": "شعار",
    "services.brandIdentity": "هوية العلامة التجارية",
    "services.artDirection": "الإخراج الفني",
    "services.strategy": "استراتيجية",
    "services.verbalGuides": "أدلة لفظية",
    "services.branding": "العلامة التجارية",
    "services.naming": "التسمية",
    "services.web": "الويب",
    "services.packaging": "التغليف",
    "services.illustration": "الرسم التوضيحي",
    "services.3d": "ثلاثي الأبعاد",
    "services.motion": "الحركة",

    // Selected Work
    "work.title": "أعمال مختارة",
    "work.viewAll": "← عرض الكل",
    "work.madarBranding": "علامة مدار",
    "work.brandIdentity": "هوية العلامة التجارية",
    "work.solaraStudios": "ستوديوهات سولارا",
    "work.visualIdentity": "الهوية البصرية",
    "work.nordicWave": "نورديك ويف",
    "work.artDirection": "الإخراج الفني",
    "work.apexVentures": "أبكس فنتشرز",
    "work.brandStrategy": "استراتيجية العلامة التجارية",
    "work.luminaDesign": "لومينا ديزاين",
    "work.webPresence": "الحضور الرقمي",
    "work.terraCollective": "تيرا كوليكتيف",
    "work.packaging": "التغليف",

    // Team
    "team.title": "الفريق",
    "team.creativeDirector": "المدير الإبداعي",
    "team.brandStrategist": "استراتيجي العلامة التجارية",
    "team.artDirector": "المدير الفني",
    "team.webDesigner": "مصمم ويب",

    // CTA
    "cta.title": "لنصنع فصلاً جديداً معاً",

    // Footer
    "footer.tagline": "هوية العلامة التجارية والأنظمة البصرية",
    "footer.contact": "تواصل",
    "footer.follow": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
