import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Accessibility, Shield, GraduationCap, Award } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "Cognitive Psychology",
      description: "Applying psychological principles to understand user behavior and decision-making",
    },
    {
      icon: Users,
      title: "User-Centered Research",
      description: "Conducting rigorous qualitative studies to inform product decisions",
    },
    {
      icon: Accessibility,
      title: "Inclusive Design",
      description: "Creating accessible experiences for diverse users and abilities",
    },
    {
      icon: Shield,
      title: "Trust & Confidence",
      description: "Designing for user trust in sensitive and critical applications",
    },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "M.S. Human Factors in Information Design",
      institution: "Bentley University, USA",
      year: "2025",
    },
    {
      icon: GraduationCap,
      title: "M.S. Clinical Psychology",
      institution: "Yerevan State University, Armenia",
      year: "2015",
    },
    {
      icon: Award,
      title: "Bentley Merit-Based Scholarship",
      institution: "Academic Excellence",
      year: "",
    },
    {
      icon: Award,
      title: "Hovnan Vorotnetsi Scholarship",
      institution: "Scholarly Merit",
      year: "",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="accent-bar mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
              Bridging <span className="text-accent">Psychology</span> and <span className="text-accent">Technology</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a human factors–oriented UX Researcher with a strong foundation in psychology and hands-on 
              experience across digital product development. My unique background combines clinical psychology 
              training with practical mobile engineering experience, allowing me to approach user research 
              with both analytical rigor and deep empathy for user behavior.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans qualitative research methods including stakeholder interviews, usability testing, 
              and behavioral analysis. I excel at synthesizing complex findings into clear, actionable product 
              decisions—ensuring research insights translate directly into feasible, well-implemented solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm particularly motivated by roles where research directly informs product strategy, accessibility, 
              and trust-critical user experiences. My technical fluency enables close collaboration with engineering 
              teams to ensure recommendations are implementable and impactful.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border card-hover group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-10">Education & Honors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-5 rounded-2xl bg-card border border-border card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1 leading-tight">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.institution}</p>
                {item.year && <p className="text-xs text-accent font-medium mt-1">{item.year}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
