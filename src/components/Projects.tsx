import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Globe, Heart, Smartphone, Leaf, MapPin, FileText, Recycle, Video, Baby, TreePine, Store, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import project images
import appKoala from "@/assets/projects/app-10.jpg";
import appViveo from "@/assets/projects/app-5.jpg";
import appNoomee from "@/assets/projects/app-4.jpg";
import appDoxi from "@/assets/projects/app-7.jpg";
import appCannachange from "@/assets/projects/app-9.jpg";
import appTrashTalk from "@/assets/projects/app-6.jpg";
import appCommuniTree from "@/assets/projects/app-2.jpg";
import appLocalLoyal from "@/assets/projects/app-3.jpg";
import appByoorakn from "@/assets/projects/app-8.jpg";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const researchProjects = [
    {
      icon: Users,
      title: "Shell & Claw - Restaurant UX Research",
      description: "Conducted comprehensive usability study for restaurant ordering system, identifying key friction points in the customer journey.",
      tags: ["Usability Testing", "User Interviews", "Affinity Mapping"],
      impact: "Identified 12+ usability issues",
    },
    {
      icon: Globe,
      title: "Bentley Safe - Campus Safety App",
      description: "Led UX research initiative for campus safety application, focusing on emergency response flows and accessibility.",
      tags: ["Accessibility Evaluation", "Stakeholder Research"],
      impact: "Enhanced emergency UX flows",
    },
    {
      icon: Heart,
      title: "Eleanor Health - Behavioral Healthcare",
      description: "Evaluated digital mental health platform usability, emphasizing trust-building elements and cognitive load reduction.",
      tags: ["Healthcare UX", "Cognitive Load Assessment"],
      impact: "Improved patient engagement",
    },
  ];

  const mobileApps = [
    {
      icon: Smartphone,
      name: "Koala Wallet",
      description: "Cryptocurrency wallet with NFT support and multi-chain capabilities",
      availability: "Worldwide",
      contributions: ["UI", "Custom UI & Animations", "REST API", "Firebase Push Notifications", "Analytics"],
      color: "from-purple-500/20 to-pink-500/20",
      image: appKoala,
    },
    {
      icon: Video,
      name: "Viveo Health",
      description: "Telemedicine platform for 24/7 medical consultations and health records",
      availability: "Worldwide",
      contributions: ["Chat/Video call", "REST API", "Firebase Push Notifications", "Payment System"],
      color: "from-blue-500/20 to-cyan-500/20",
      image: appViveo,
    },
    {
      icon: Baby,
      name: "Noomee",
      description: "App for children with Autism, ADHD, Asperger - featuring social stories and routines",
      availability: "Worldwide",
      contributions: ["UX Research", "Android/iOS Native Services", "REST API", "Firebase Push Notifications"],
      color: "from-green-400/20 to-emerald-500/20",
      image: appNoomee,
    },
    {
      icon: FileText,
      name: "Doxi",
      description: "Document management app for storing IDs, vaccination cards and important files",
      availability: "Worldwide",
      contributions: ["UI/UX", "REST API", "Document Management", "Payment System"],
      color: "from-slate-400/20 to-slate-600/20",
      image: appDoxi,
    },
    {
      icon: Leaf,
      name: "Cannachange",
      description: "Sustainable cannabis recycling platform with dispensary locator",
      availability: "USA & Canada",
      contributions: ["UI/UX", "Map Integration", "REST API", "Firebase Push Notifications", "Payment System"],
      color: "from-teal-500/20 to-green-500/20",
      image: appCannachange,
    },
    {
      icon: Recycle,
      name: "Trash-Talk",
      description: "Environmental education app helping schools become plastic-free",
      availability: "Ireland",
      contributions: ["UI/UX", "Deep Linking", "REST API", "Authorization", "Animations"],
      color: "from-emerald-500/20 to-teal-500/20",
      image: appTrashTalk,
    },
    {
      icon: TreePine,
      name: "CommuniTree",
      description: "Eco-friendly lifestyle app with daily challenges and personalized tree growth",
      availability: "Ireland",
      contributions: ["UI/UX", "Deep Linking", "REST API", "Firebase Authorization", "Google Maps"],
      color: "from-green-600/20 to-lime-500/20",
      image: appCommuniTree,
    },
    {
      icon: Store,
      name: "Local Loyal",
      description: "Support local UK businesses with membership cards and exclusive discounts",
      availability: "UK",
      contributions: ["UI/UX", "Payment System", "REST API", "QR Scanning", "Google Maps"],
      color: "from-orange-500/20 to-amber-500/20",
      image: appLocalLoyal,
    },
    {
      icon: MapPin,
      name: "Byoorakn",
      description: "Water fountain locator app for Armenia with crowdsourced locations",
      availability: "Armenia",
      contributions: ["UI", "Google Places/Directions", "REST API", "Firebase Push Notifications"],
      color: "from-sky-400/20 to-blue-500/20",
      image: appByoorakn,
    },
  ];

  const leadership = {
    title: "InMotion Armenia Youth NGO",
    role: "Co-Founder & Chairman",
    period: "Jun 2018 – Present",
    description: "Co-founded and led a youth NGO with full responsibility for EU-funded programs impacting 500+ participants. Provided organizational leadership across strategy, partnerships, funding, and delivery, working closely with international stakeholders to ensure compliance, impact, and sustainable collaboration.",
    impact: "500+ participants impacted through EU-funded programs",
  };

  return (
    <section id="projects" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="accent-bar mt-6 mb-8" />
          <p className="section-subtitle">
            Research projects and initiatives that showcase my approach to user-centered design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-3xl overflow-hidden border border-border card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Apps Portfolio */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-3">Mobile App Development</h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Apps I've contributed to as a Flutter Developer, combining technical expertise with UX research
          </p>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {mobileApps.map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Project Image - Left side */}
                  <div 
                    className="relative w-full md:w-72 lg:w-80 flex-shrink-0 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage({ src: app.image, alt: `${app.name} app screenshot` })}
                  >
                    <div className="aspect-[4/3] md:aspect-auto md:h-full">
                      <img 
                        src={app.image} 
                        alt={`${app.name} app screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${app.color} opacity-20`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Content - Right side */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    {/* App Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <app.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h4 className="font-display font-bold text-foreground text-xl">{app.name}</h4>
                          <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                            {app.availability}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Key Contributions */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-3">Key Contributions</p>
                      <div className="flex flex-wrap gap-2">
                        {app.contributions.map((contrib) => (
                          <span
                            key={contrib}
                            className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-colors"
                          >
                            {contrib}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">Leadership & Community</h3>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 lg:p-10 border border-accent/20">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-2xl font-display font-bold text-foreground">{leadership.title}</h4>
                  <span className="px-3 py-1 text-sm font-semibold bg-accent/20 text-accent rounded-full">
                    {leadership.role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{leadership.period}</p>
                <p className="text-foreground/80 leading-relaxed mb-4">{leadership.description}</p>
                <p className="font-semibold text-accent">{leadership.impact}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
