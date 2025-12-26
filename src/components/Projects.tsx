import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Heart, Award } from "lucide-react";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Users,
      title: "Shell & Claw - Restaurant UX Research",
      description: "Conducted comprehensive usability study for restaurant ordering system, identifying key friction points in the customer journey and providing actionable recommendations for improved conversion rates.",
      tags: ["Usability Testing", "User Interviews", "Affinity Mapping"],
      impact: "Identified 12+ usability issues",
    },
    {
      icon: Globe,
      title: "Bentley Safe - Campus Safety App",
      description: "Led UX research initiative for campus safety application, focusing on emergency response flows and accessibility for diverse student populations.",
      tags: ["Accessibility Evaluation", "Stakeholder Research", "Information Architecture"],
      impact: "Enhanced emergency UX flows",
    },
    {
      icon: Heart,
      title: "Eleanor Health - Behavioral Healthcare Platform",
      description: "Evaluated digital mental health platform usability, emphasizing trust-building elements and reducing cognitive load for users in vulnerable states.",
      tags: ["Healthcare UX", "Cognitive Load Assessment", "Trust Design"],
      impact: "Improved patient engagement",
    },
    {
      icon: Award,
      title: "Koala Wallet - Cryptocurrency Mobile App",
      description: "Led development of cryptocurrency wallet serving thousands of users, focusing on security-conscious onboarding and accessibility best practices.",
      tags: ["Flutter Development", "Security UX", "Inclusive Design"],
      impact: "Thousands of active users",
    },
  ];

  const leadership = {
    title: "InMotion Armenia Youth NGO",
    role: "Co-Founder & Chairman",
    period: "Jun 2018 – Present",
    description: "Co-founded and led a youth NGO with full responsibility for EU-funded programs impacting 500+ participants. Provided organizational leadership across strategy, partnerships, funding, and delivery, working closely with international stakeholders to ensure compliance, impact, and sustainable collaboration.",
    impact: "500+ participants impacted through EU-funded programs",
  };

  return (
    <section id="projects" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="accent-bar mt-6 mb-8" />
          <p className="section-subtitle">
            Research projects and initiatives that showcase my approach to user-centered design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-3xl overflow-hidden border border-border card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <project.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">Leadership & Community</h3>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 lg:p-10 border border-accent/20">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-2xl font-display font-bold text-foreground">{leadership.title}</h4>
                  <span className="px-3 py-1 text-sm font-semibold bg-accent/20 text-accent rounded-full">
                    {leadership.role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{leadership.period}</p>
                <p className="text-foreground/80 leading-relaxed mb-4">{leadership.description}</p>
                <p className="font-semibold text-accent">{leadership.impact}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
