import { useEffect, useRef } from "react";
import { Shield, Zap, Smartphone, Code, Download, Lock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols to protect your data and privacy."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with minimal resource usage for smooth operation on any device."
  },
  {
    icon: Smartphone,
    title: "No Root Required",
    description: "Run Linux distributions without rooting your Android device. Safe and simple."
  },
  {
    icon: Code,
    title: "Full CLI Access",
    description: "Complete command-line interface with all your favorite Linux tools and utilities."
  },
  {
    icon: Download,
    title: "Easy Installation",
    description: "One-click installation process with automatic updates and dependency management."
  },
  {
    icon: Lock,
    title: "100% Open Source",
    description: "Fully transparent codebase available on GitHub. Audit, modify, and contribute freely."
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gradient-hero),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to run a full Linux environment on your Android device
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/10 text-foreground mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
