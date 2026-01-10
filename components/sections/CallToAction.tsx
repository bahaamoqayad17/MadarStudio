"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <AnimatedSection>
          <motion.a
            href="mailto:hello@madarstudio.com"
            className="block text-center group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight group-hover:opacity-70 transition-opacity">
              {t("cta.title")}
            </h2>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
