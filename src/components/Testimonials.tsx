import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Fadi Mikaelian",
      role: "Project Manager",
      content: "She is a superstar. She understands the goal of the project, is focused on addressing any challenge that surfaces, and always has a positive attitude. She is tenacious and does not give up in the face of adversity. The quality of her work is superior and she is reliable, working the extra mile to ensure the project is delivered on time and within budget.",
    },
    {
      name: "Jessica O'Brien",
      role: "Product Lead",
      content: "She always makes time for the project and goes the extra mile to ensure delivery. She cares about customer satisfaction, takes pride in her work, and her results speak for themselves. Great job! Would work with her anytime again if an opportunity resurfaces.",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      content: "Outstanding developer with excellent problem-solving skills. She consistently delivers high-quality code and is always willing to help teammates. Her technical expertise and positive attitude make her a valuable asset to any team.",
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-glow">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="font-display font-semibold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-accent font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
