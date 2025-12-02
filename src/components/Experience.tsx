import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: [
        "Led development of high-performance web applications serving 100K+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization",
        "Collaborated with cross-functional teams to deliver features on time",
      ],
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client-facing applications",
        "Implemented responsive designs and improved user experience",
        "Integrated third-party APIs and services",
        "Participated in agile development process",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2018 - 2020",
      description: [
        "Built features for web applications using modern frameworks",
        "Fixed bugs and improved code quality",
        "Learned best practices and industry standards",
        "Contributed to team projects and documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft hover:shadow-medium transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
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
