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
    "hero.line1": "Madar — Focused Design",
    "hero.line2": "Real Impact. ©",
    "hero.line3": "Creating Timeless Brands",
    "hero.subline1": "Beyond Standards,",
    "hero.subline2": "We Create Timeless Brands",

    // About
    "about.title": "BEYOND STANDARDS, CREATING TIMELESS BRANDS",
    "about.subtitle":
      "brand identity design, brand building, visual design, and web design.",
    "about.description1":
      "With over seven years of experience, Madar Studio leads its journey in designing and building brands through a strategic vision that combines creativity, precision, and speed of execution. We work in complete harmony between thinking and design to deliver integrated solutions that include ",
    "about.description2":
      ", and the impact of our work has extended to more than 15 countries, contributing to the launch and development of over 50 successful brands across diverse industries, giving us a deep understanding of different markets and cultures.",
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
    "services.aiTools": "AI TOOLS",

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
    "team.founder": "Founder / CEO",
    "team.designer": "Designer",

    // CTA
    "cta.title": "LET'S CREATE A NEW CHAPTER",

    // Footer
    "footer.tagline": "Brand identity & visual systems",
    "footer.contact": "Contact",
    "footer.follow": "Follow",
    "footer.rights": "All rights reserved.",

    // Contact Form
    "contact.title": "Get In Touch",
    "contact.description":
      "Let's discuss your project and create something amazing together.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "What is this regarding?",
    "contact.message": "Project Details",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.submit": "Send Message",
    "contact.submitting": "Sending...",
    "contact.success": "Thank you! Your message has been sent successfully.",
    "contact.error": "Something went wrong. Please try again.",
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
    "about.title": "ما وراء المعايير، نصنع علامات تجارية خالدة",
    "about.subtitle":
      "تصميم هوية العلامة التجارية، بناء العلامة التجارية، التصميم البصري، وتصميم الويب.",
    "about.description1":
      "مع أكثر من سبع سنوات من الخبرة، تقود مدار ستوديو رحلتها في تصميم وبناء العلامات التجارية من خلال رؤية استراتيجية تجمع بين الإبداع والدقة وسرعة التنفيذ. نعمل في انسجام كامل بين التفكير والتصميم لتقديم حلول متكاملة تشمل ",
    "about.description2":
      "، وامتد تأثير عملنا إلى أكثر من 15 دولة، مما ساهم في إطلاق وتطوير أكثر من 50 علامة تجارية ناجحة عبر صناعات متنوعة، مما منحنا فهماً عميقاً للأسواق والثقافات المختلفة.",
    "about.description":
      "مع أكثر من 7 سنوات من الخبرة، مدار ستوديو يقود رحلته في تصميم وبناء العلامات التجارية عبر رؤية استراتيجية متكاملة تجمع بين الإبداع والدقة  وسرعة التنفيذ. نعمل في إتحاد مثالي بين التفكير والتصميم لتقديم حلول متكاملة متضمنة التصميم المرصود للعلامة التجارية وبناء العلامة التجارية والتصميم البصري وتصميم الويب. أثبتت التأثيرات الخاصة بنا انتشارها إلى أكثر من 15 دولة، وتمكنت من تحقيق نجاح العلامات التجارية الناجحة لأكثر من 50 علامة تجارية في مختلف الصناعات، مما أعطى لنا فهم عميق للأسواق والثقافات المختلفة.",
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
    "services.aiTools": "أدوات الذكاء الاصطناعي",

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
    "team.founder": "المؤسس / الرئيس التنفيذي",
    "team.designer": "مصمم",

    // CTA
    "cta.title": "لنصنع فصلاً جديداً معاً",

    // Footer
    "footer.tagline": "هوية العلامة التجارية والأنظمة البصرية",
    "footer.contact": "تواصل",
    "footer.follow": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",

    // Contact Form
    "contact.title": "تواصل معنا",
    "contact.description": "دعنا نناقش مشروعك ونصنع شيئاً رائعاً معاً.",
    "contact.name": "الاسم",
    "contact.namePlaceholder": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.emailPlaceholder": "بريدك@example.com",
    "contact.subject": "الموضوع",
    "contact.subjectPlaceholder": "بماذا يتعلق هذا؟",
    "contact.message": "تفاصيل المشروع",
    "contact.messagePlaceholder": "أخبرنا عن مشروعك...",
    "contact.submit": "إرسال الرسالة",
    "contact.submitting": "جاري الإرسال...",
    "contact.success": "شكراً لك! تم إرسال رسالتك بنجاح.",
    "contact.error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
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
    // Add/remove Arabic font class and update CSS variable
    if (isRTL) {
      document.documentElement.classList.add("font-arabic");
      document.documentElement.style.setProperty(
        "--font-sans",
        '"KOSans", system-ui, sans-serif'
      );
    } else {
      document.documentElement.classList.remove("font-arabic");
      document.documentElement.style.setProperty(
        "--font-sans",
        '"Inter", system-ui, sans-serif'
      );
    }
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
