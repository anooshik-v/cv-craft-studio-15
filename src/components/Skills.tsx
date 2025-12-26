import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Brain, FileText, Wrench } from "lucide-react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Search,
      category: "Research Methods",
      skills: [
        "Stakeholder Interviews",
        "User Interviews",
        "Moderated Usability Testing",
        "Study Planning",
        "Discussion Guides",
        "Thematic Analysis",
        "Affinity Mapping",
      ],
    },
    {
      icon: Brain,
      category: "Human Factors",
      skills: [
        "Cognitive Load Assessment",
        "Accessibility Evaluation",
        "Inclusive Design",
        "User Confidence & Trust",
        "Behavioral Psychology",
        "Information Architecture",
      ],
    },
    {
      icon: FileText,
      category: "Deliverables",
      skills: [
        "Research Readouts",
        "Findings Reports",
        "Action Plans",
        "Severity/Effort Prioritization",
        "Client Presentations",
        "Design Recommendations",
      ],
    },
    {
      icon: Wrench,
      category: "Tools & Technical",
      skills: [
        "Figma",
        "Sketch",
        "InVision",
        "Jira",
        "Asana",
        "Google Analytics",
        "Flutter/Dart",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Core Competencies</h2>
          <div className="accent-bar mt-6 mb-8" />
          <p className="section-subtitle">
            A comprehensive skill set spanning research methodology, human factors principles, and technical implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-card rounded-3xl p-8 border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground/80 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
