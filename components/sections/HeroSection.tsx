"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const heroImages = [
  "/03.png",
  "/03.png",
  "/03.png",
  "/03.png",
  "/03.png",
  "/03.png",
  // "/22.png",
  // "/555.png",
  // "/556.jpg",
  // "/meow.png",
  // "/5.jpg",
  // "/6.jpg",
  // "/7.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 md:pt-32">
      <div className="container-wide">
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <h1 className="text-display">
            {t("hero.line1")}
            <br />
            {t("hero.line2")}
            <br />
            {t("hero.line3")}
          </h1>
          <span className="text-4xl md:text-5xl font-light mt-2 block">©</span>
        </motion.div>

        {/* Hero Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full aspect-[21/16] md:aspect-[21/11] overflow-hidden rounded-lg"
        >
          {heroImages.map((image, index) => (
            <motion.img
              key={index}
              src={image as string}
              alt={`Hero image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Image indicators */}
          <div className="absolute bottom-4 start-4 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImage === index ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Secondary Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-start justify-between"
        >
          <h2 className="text-headline max-w-xl">
            {t("hero.subline1")}
            <br />
            {t("hero.subline2")}
          </h2>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl hidden md:block"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
