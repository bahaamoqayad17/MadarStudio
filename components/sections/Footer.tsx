"use client";

import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-sm font-medium mb-2">{t("header.brand")}</p>
              <p className="text-xs text-muted-foreground">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Contact */}
            {/* <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {t("footer.contact")}
              </p>
              <a
                href="mailto:hello@madarstudio.com"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                hello@madarstudio.com
              </a>
            </div> */}

            {/* Social */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {t("footer.follow")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mohamedkh_9/"
                  className="text-sm hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-kh-34b2301a3/?skipRedirect=true"
                  className="text-sm hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.behance.net/mohamed_kh"
                  className="text-sm hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-xs text-muted-foreground mt-12">
            © {new Date().getFullYear()} MadarStudio. {t("footer.rights")}
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
