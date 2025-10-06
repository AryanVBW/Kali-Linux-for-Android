import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Download, Terminal, Code, Zap } from "lucide-react";
import heroKali from "@/assets/hero-kali.png";
import heroDownload from "@/assets/hero-download.png";
import heroUbuntu from "@/assets/hero-ubuntu.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const sliderRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [heroKali, heroDownload, heroUbuntu];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation - faster and smoother
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out"
      });

      gsap.from(featuresRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out"
      });

      // Lighter parallax effect for better performance
      gsap.to(imageRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      // Smoother image slider scroll animation
      sliderRef.current.forEach((slide, index) => {
        if (slide) {
          gsap.to(slide, {
            x: index === 0 ? "-100%" : index === 1 ? "0%" : "100%",
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
              onUpdate: (self) => {
                const progress = self.progress;
                if (progress < 0.33) setCurrentSlide(0);
                else if (progress < 0.66) setCurrentSlide(1);
                else setCurrentSlide(2);
              }
            }
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-32">
      {/* Metallic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Smooth blend gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div ref={textRef} className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground font-medium backdrop-blur-sm">
                <Terminal className="inline h-4 w-4 mr-2" />
                Linux CLI + GUI for Android
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                LinuxDroid
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Original open-source operating systems collection. Experience a variety of Linux distributions on Android devices with CLI and GUI support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                One-Click Install
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </div>
            
            <div ref={featuresRef} className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <Code className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <p className="text-xs text-muted-foreground">CLI Support</p>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <Terminal className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <p className="text-xs text-muted-foreground">GUI Support</p>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <Zap className="h-6 w-6 mx-auto mb-2 text-foreground" />
                <p className="text-xs text-muted-foreground">Auto Install</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image Slider */}
          <div ref={imageRef} className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-muted/10 blur-3xl" />
            <div className="relative h-full overflow-hidden rounded-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => (sliderRef.current[index] = el)}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateX(${index * 100}%)` }}
                >
                  <img
                    src={image}
                    alt={`LinuxDroid terminal interface ${index + 1}`}
                    className="h-full w-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
