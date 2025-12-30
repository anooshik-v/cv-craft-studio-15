import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, ExternalLink } from "lucide-react";

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const upworkProfileUrl = "https://www.upwork.com/freelancers/~01e17169cda21ee429?viewMode=1";

  const testimonials = [
    {
      name: "Fadi Mikaelian",
      role: "Project Manager",
      project: "DOXI",
      content: "She is a superstar. She understands the goal of the project, is focused on addressing any challenge that surfaces, and always has a positive attitude. She is tenacious and does not give up in the face of adversity. The quality of her work is superior and she is reliable, working the extra mile to ensure the project is delivered on time and within budget.",
    },
    {
      name: "Jessica O'Brien",
      role: "Product Lead",
      project: "DOXI V1",
      content: "She always makes time for the project and goes the extra mile to ensure delivery. She cares about customer satisfaction, takes pride in her work, and her results speak for themselves. Great job! Would work with her anytime again if an opportunity resurfaces.",
    },
    {
      name: "David",
      role: "Startup Founder",
      project: "Flutter MVP Apps",
      content: "Great work by Varsik! Excellent communication, quality work done on schedule. Look forward to working together again!",
    },
    {
      name: "Tech Startup Client",
      role: "CEO",
      project: "Flutter MVP Apps",
      content: "Another great job by Varsik - good communications + job completed successfully. Look forward to working together again.",
    },
    {
      name: "Silicon Valley Startup",
      role: "Hiring Manager",
      project: "Flutter Development",
      content: "Varsik is very professional, and good communicator.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What People Say</h2>
          <div className="accent-bar mt-6 mb-8" />
          <p className="section-subtitle">
            Feedback from colleagues and clients about working together
          </p>
          
          {/* Upwork Profile Link */}
          <motion.a
            href={upworkProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-full font-medium transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>View all reviews on Upwork</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-glow">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Project badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full mb-4">
                {testimonial.project}
              </span>
              
              <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-accent font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
