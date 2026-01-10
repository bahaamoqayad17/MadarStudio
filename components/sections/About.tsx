"use client";

import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("about.location"), label: "" },
    { value: "+150", label: t("about.projects") },
    { value: "+10", label: t("about.years") },
  ];

  const services = [
    t("services.logo"),
    t("services.brandIdentity"),
    t("services.artDirection"),
    t("services.strategy"),
    t("services.verbalGuides"),
    t("services.branding"),
    t("services.naming"),
    t("services.web"),
    t("services.packaging"),
    t("services.illustration"),
    t("services.3d"),
    t("services.motion"),
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Description */}
          <AnimatedSection>
            <p className="text-body text-base md:text-lg leading-relaxed mb-8">
              {t("about.description1")}
            </p>
            <p className="text-body text-base md:text-lg leading-relaxed">
              {t("about.description2")}
            </p>
          </AnimatedSection>

          {/* Right Column - Stats */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl md:text-2xl font-medium">
                    {stat.value}
                  </p>
                  {stat.label && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Services Tags */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-3 mt-12 pt-12 border-t border-border">
            {services.map((service, index) => (
              <span key={index} className="service-tag">
                {service}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
