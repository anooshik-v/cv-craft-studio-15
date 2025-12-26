import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "UX Researcher",
      subtitle: "University-Sponsored Client Projects",
      company: "Bentley University",
      location: "Waltham, MA",
      period: "Aug 2024 – May 2025",
      clients: "Shell & Claw, Bentley Safe, Raysecur, DealCrane, Eleanor Health",
      description: [
        "Partnered with 5 client organizations to define research objectives, success metrics, and priority user journeys",
        "Designed and executed 15+ qualitative UX research studies including stakeholder interviews and usability testing",
        "Identified 50+ usability issues and accessibility barriers through systematic observation and user feedback",
        "Synthesized findings using affinity mapping and thematic analysis into severity-ranked recommendations",
        "Delivered client-ready research presentations with actionable recommendations prioritized by severity/effort",
        "Collaborated with multidisciplinary teams to translate insights into revised information architecture",
      ],
    },
    {
      title: "Senior Flutter Developer",
      subtitle: "Product & UX Focus",
      company: "Eucalyptus Labs (Koala Wallet)",
      location: "USA",
      period: "May 2022 – Dec 2024",
      description: [
        "Led mobile development for cryptocurrency wallet serving thousands of users across platforms",
        "Collaborated with product and design teams to translate user flows into production features",
        "Conducted informal usability testing, gathering qualitative feedback on onboarding and security features",
        "Applied accessibility best practices including screen reader support, color contrast, and touch targets",
      ],
    },
    {
      title: "Flutter Developer",
      subtitle: "Healthcare UX",
      company: "Viveo Health",
      location: "Remote",
      period: "Aug 2020 – Mar 2021",
      description: [
        "Built telemedicine platform features focusing on HIPAA-compliant user experiences",
        "Collaborated with clinical stakeholders to understand workflows and reduce cognitive load",
        "Translated requirements into intuitive mobile interfaces for healthcare professionals",
      ],
    },
    {
      title: "Flutter Developer",
      subtitle: "Inclusive Design for Neurodiversity",
      company: "Noomee",
      location: "Remote",
      period: "Apr 2020 – Jan 2021",
      description: [
        "Developed mobile application for children with Autism Spectrum Disorder",
        "Prioritized accessibility and usability informed by clinical research psychology",
        "Applied behavioral psychology insights to design therapy tracking features for neurodiverse users",
      ],
    },
    {
      title: "Invited Professor / Lecturer of Psychology",
      company: "National Polytechnic University of Armenia",
      location: "Yerevan, Armenia",
      period: "Oct 2017 – Mar 2022",
      description: [
        "Delivered interactive psychology teaching focusing on cognitive and educational psychology",
        "Trained professors in inclusive teaching methodologies and student-centered approaches",
        "Developed curriculum aligned with non-formal education principles",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-36 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="accent-bar mt-6 mb-8" />
          <p className="section-subtitle">
            A journey through UX research, product development, and psychology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 lg:pl-12 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[7px] lg:left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 lg:left-1 top-1 w-4 h-4 rounded-full bg-accent shadow-glow" />
              
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">{exp.title}</h3>
                    {exp.subtitle && (
                      <p className="text-accent font-medium mt-1">{exp.subtitle}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase size={16} className="text-accent" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-full whitespace-nowrap">
                    <Calendar size={16} className="text-accent" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                {exp.clients && (
                  <p className="text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">Clients:</span> {exp.clients}
                  </p>
                )}
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
