import { Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-display font-bold"
          >
            Varsik<span className="text-accent">.</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/varsik-nikoyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nikoyanvarsik@gmail.com"
              className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Varsik Nikoyan. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs flex items-center justify-center gap-1">
              Crafted with <Heart size={12} className="text-accent fill-accent" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
