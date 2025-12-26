import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Linkedin, ExternalLink } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikoyanvarsik@gmail.com",
      href: "mailto:nikoyanvarsik@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 617 206 0772",
      href: "tel:+16172060772",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Belmont, MA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-36 bg-hero-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, hsl(220 20% 98%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 20% 98%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full mb-8" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities where research can directly inform 
            product strategy, accessibility, and trust-critical user experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="bg-card/10 backdrop-blur-xl rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent hover:bg-card/20 transition-all shadow-soft hover:shadow-glow text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <p className="text-sm text-primary-foreground/60 mb-2 uppercase tracking-wide font-medium">{item.label}</p>
                <p className="text-primary-foreground font-semibold text-lg">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-base px-8 py-6 font-semibold"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
              asChild
            >
              <a href="https://linkedin.com/in/varsik-nikoyan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
                <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
