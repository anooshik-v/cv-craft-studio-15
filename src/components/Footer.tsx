import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/80">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
