import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 mt-4">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
