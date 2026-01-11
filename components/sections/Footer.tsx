"use client";

import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 md:py-16 bg-primary text-primary-foreground border-t border-border/20">
      <div className="container-wide">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-sm font-medium mb-2 text-primary-foreground">
                {t("header.brand")}
              </p>
              <p className="text-xs text-primary-foreground/70">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Contact */}
            {/* <div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-3">
                {t("footer.contact")}
              </p>
              <a
                href="mailto:hello@madarstudio.com"
                className="text-sm text-primary-foreground hover:opacity-70 transition-opacity"
              >
                hello@madarstudio.com
              </a>
            </div> */}

            {/* Social */}
            <div>
              <p className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-3">
                {t("footer.follow")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mohamedkh_9/"
                  className="text-sm text-primary-foreground hover:opacity-70 transition-opacity flex items-center gap-2"
                  target="_blank"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                |
                <a
                  href="https://www.linkedin.com/in/mohamed-kh-34b2301a3/?skipRedirect=true"
                  className="text-sm text-primary-foreground hover:opacity-70 transition-opacity flex items-center gap-2"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                |
                <a
                  href="https://www.behance.net/mohamed_kh"
                  className="text-sm text-primary-foreground hover:opacity-70 transition-opacity flex items-center gap-2"
                  target="_blank"
                >
                  Bē Behance
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-xs text-primary-foreground/70 mt-12">
            © {new Date().getFullYear()} MadarStudio. {t("footer.rights")}
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
