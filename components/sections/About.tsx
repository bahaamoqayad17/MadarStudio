"use client";

import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("about.location"), label: "" },
    { value: "+50", label: t("about.projects") },
    { value: "+7", label: t("about.years") },
  ];

  const services = [
    t("services.logo"),
    t("services.brandIdentity"),
    t("services.artDirection"),
    t("services.strategy"),
    t("services.verbalGuides"),
    t("services.branding"),
    t("services.web"),
    t("services.illustration"),
    t("services.aiTools"),
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Description */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl max-w-xl font-bold">
              {t("about.title")}
            </h2>
          </AnimatedSection>

          {/* Right Column - Stats */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-8 mb-12">
              <span className="text-body text-base md:text-lg leading-relaxed mb-8">
                {t("about.description1")}
                <span className="text-black text-base font-bold md:text-lg leading-relaxed mb-8">
                  {t("about.subtitle")}
                </span>
                {t("about.description2")}
              </span>
              <div className="border-t border-b border-border py-4 flex flex-wrap gap-8 w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center pt-4">
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

              {/* Services Tags */}
            </div>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col flex-wrap gap-3 mt-12">
                {services.map((service, index) => (
                  <span
                    key={index}
                    className="text-body text-base md:text-lg leading-relaxed mb-2"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
