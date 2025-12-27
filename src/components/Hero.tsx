import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/varsik-photo.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, hsl(220 20% 98%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 20% 98%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Available for opportunities</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Varsik Nikoyan
            </motion.h1>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl lg:text-3xl text-primary-foreground/90 font-light">
                <span className="text-accent font-semibold">UX Researcher</span> & <span className="text-accent font-semibold">Human Factors Specialist</span>
              </p>
              
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                Bridging psychology and technology to create intuitive, accessible, and trust-building digital experiences. 
                Master's in Human Factors with a unique blend of clinical psychology and mobile development expertise.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-base px-8 py-6 font-semibold"
              >
                Get in Touch
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/25 text-base px-8 py-6 font-semibold backdrop-blur-sm"
              >
                <a href="/Varsik_Nikoyan_CV.pdf" download="Varsik_Nikoyan_CV.pdf">
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://linkedin.com/in/varsik-nikoyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all shadow-soft hover:shadow-glow group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:nikoyanvarsik@gmail.com"
                className="p-4 rounded-2xl bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all shadow-soft hover:shadow-glow group"
                aria-label="Email"
              >
                <Mail size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 scale-110 rounded-full border-2 border-accent/20 animate-pulse" />
              <div className="absolute inset-0 scale-125 rounded-full border border-accent/10" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
              
              <img
                src={profileImage}
                alt="Varsik Nikoyan - UX Researcher"
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-accent/50 shadow-elegant"
              />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-card px-5 py-3 rounded-2xl shadow-medium border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-sm font-semibold text-foreground">Bentley University</p>
                <p className="text-xs text-muted-foreground">M.S. Human Factors</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-primary-foreground/60 hover:text-accent transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
