"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

interface WorkCardProps {
  images: string[];
  titleKey: string;
  categoryKey: string;
  index: number;
}

const WorkCard = ({ images, titleKey, categoryKey, index }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg aspect-[4/2]">
          <motion.img
            src={images[0] as string}
            alt={t(titleKey)}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={images[1]}
            alt={`${t(titleKey)} alternate`}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium">{t(titleKey)}</h3>
          <p className="text-xs text-muted-foreground mt-1">{t(categoryKey)}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const SelectedWork = () => {
  const { t } = useLanguage();

  const works = [
    {
      images: ["/work-1.png", "/work1.jpg"],
      titleKey: "Novrix - KSA",
      categoryKey: "Branding & visual identity",
    },
    {
      images: ["/work-2.jpg", "/work2.jpg"],
      titleKey: "Toqueen - Oman",
      categoryKey: "Branding & visual identity",
    },
    {
      images: ["/work-3.jpg", "/work3.jpg"],
      titleKey: "Qiyas pro - KSA",
      categoryKey: "Branding & visual identity",
    },
    {
      images: ["/work-4.jpg", "/work4.jpg"],
      titleKey: "Lora - UAE",
      categoryKey: "Branding & visual identity",
    },
    {
      images: ["/work-5.png", "/work5.png"],
      titleKey: "Veks - Germany",
      categoryKey: "Branding & visual identity",
    },
    {
      images: ["/work-6.png", "/work6.jpg"],
      titleKey: "Talent Square - KSA",
      categoryKey: "Branding & visual identity",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-caption">{t("work.title")}</h2>
            <a
              href="#"
              className="text-caption hover:text-foreground transition-colors"
            >
              {t("work.viewAll")}
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              images={work.images}
              titleKey={work.titleKey}
              categoryKey={work.categoryKey}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
