"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const team = [
    {
      name: "Mohamed Al Khatib",
      roleKey: "team.founder",
      initials: "AM",
      image: "/team/1.png",
    },
    {
      name: "Ibrahim Naser",
      roleKey: "team.designer",
      initials: "SC",
      image: "/team/2.png",
    },
    {
      name: "Zaid Katch",
      roleKey: "team.artDirector",
      initials: "MW",
      image: "/team/3.png",
    },
  ];

  // Duplicate team array for infinite scroll
  const duplicatedTeam = [...team, ...team, ...team];

  useEffect(() => {
    const scrollSpeed = 2; // pixels per frame
    let animationFrameId: number;
    let currentPosition = 0;

    const animate = () => {
      if (!scrollRef.current) return;

      currentPosition += scrollSpeed;

      // Calculate the width of one set of team members dynamically
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      if (!firstChild) return;

      const itemWidth = firstChild.offsetWidth;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const setWidth = team.length * (itemWidth + gap);

      // Reset position when we've scrolled one full set for seamless loop
      if (currentPosition >= setWidth) {
        currentPosition = currentPosition - setWidth;
      }

      scrollRef.current.style.transform = `translateX(-${currentPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [team.length]);

  return (
    <section className="section-padding overflow-hidden" dir="ltr">
      <div className="container-wide mb-8">
        <AnimatedSection>
          <h2 className="text-caption mb-4 text-center text-2xl md:text-3xl font-bold">
            {t("team.title")}
          </h2>
        </AnimatedSection>
      </div>

      {/* Infinite Auto-Scroll Slider */}
      <div className="overflow-hidden max-w-4xl mx-auto">
        <motion.div
          ref={scrollRef}
          className="flex gap-6 px-5 md:px-6 pb-4"
          style={{ willChange: "transform" }}
        >
          {duplicatedTeam.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar Placeholder */}
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden mb-4 flex items-center justify-center relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {t(member.roleKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
