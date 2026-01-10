"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const team = [
    { name: "Ahmed Madar", roleKey: "team.creativeDirector", initials: "AM" },
    { name: "Sarah Chen", roleKey: "team.brandStrategist", initials: "SC" },
    { name: "Marcus Webb", roleKey: "team.artDirector", initials: "MW" },
    { name: "Luna Rodriguez", roleKey: "team.webDesigner", initials: "LR" },
    { name: "Ahmed Madar", roleKey: "team.creativeDirector", initials: "AM" },
    { name: "Sarah Chen", roleKey: "team.brandStrategist", initials: "SC" },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide mb-8">
        <AnimatedSection>
          <h2 className="text-caption mb-4">{t("team.title")}</h2>
        </AnimatedSection>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 px-5 md:px-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {team.map((member, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div
              className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar Placeholder */}
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <span className="text-6xl font-light text-muted-foreground/30">
                  {member.initials}
                </span>
              </div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {t(member.roleKey)}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
