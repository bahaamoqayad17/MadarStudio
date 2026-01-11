"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-5 md:mx-6 mt-5 md:mt-6">
        <div className="bg-primary text-primary-foreground rounded-lg px-5 py-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={40}
            className="logo-image"
          />
          {/* <span className="text-sm font-medium tracking-tight">
            {t("header.brand")}
          </span> */}

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  language === "en"
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:opacity-70"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  language === "ar"
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:opacity-70"
                }`}
              >
                ع
              </button>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              <ArrowIcon className="w-4 h-4" />
              {t("header.getInTouch")}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
