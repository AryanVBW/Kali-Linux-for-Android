import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const operatingSystems = [
  {
    id: 1,
    name: "Parrot OS",
    description: "Security and privacy-focused distribution for ethical hacking and penetration testing",
    image: "https://camo.githubusercontent.com/1f50062b94342adb3d32718944387bdd62ec9a9e89b152cf085bdbdccd95714a/68747470733a2f2f6769746c61622e636f6d2f706172726f747365632f70726f6a6563742f67726170686963732f2d2f7261772f643139616338613131323932313336636461346231646638306132626431353666373638666564382f6c6f676f2f706172726f742d6c6f676f2e737667",
    category: "Security"
  },
  {
    id: 2,
    name: "Kali Linux",
    description: "Ultimate mobile penetration testing platform with full security tools range",
    image: "https://www.kali.org/images/kali-logo.svg",
    category: "Security"
  },
  {
    id: 3,
    name: "Ubuntu",
    description: "Popular, user-friendly Linux distribution with extensive package support",
    image: "https://assets.ubuntu.com/v1/ce518a18-CoF-2022_solid+O.svg",
    category: "General"
  },
  {
    id: 4,
    name: "Arch Linux",
    description: "Lightweight and flexible rolling-release distribution",
    image: "https://archlinux.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png",
    category: "Advanced"
  },
  {
    id: 5,
    name: "Debian",
    description: "Rock-solid stable and versatile operating system foundation",
    image: "https://www.debian.org/logos/openlogo-nd.svg",
    category: "General"
  },
  {
    id: 6,
    name: "Manjaro",
    description: "User-friendly Arch-based distribution with easy installation",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg",
    category: "Advanced"
  },
  {
    id: 7,
    name: "Void Linux",
    description: "Independent rolling-release with runit init system",
    image: "https://voidlinux.org/assets/img/void_bg.png",
    category: "Advanced"
  },
  {
    id: 8,
    name: "Alpine Linux",
    description: "Security-oriented, lightweight Linux for containers",
    image: "https://alpinelinux.org/alpinelinux-logo.svg",
    category: "General"
  },
  {
    id: 9,
    name: "Fedora",
    description: "Cutting-edge features and latest open-source technologies",
    image: "https://fedoraproject.org/assets/images/fedora-workstation-logo.png",
    category: "General"
  },
  {
    id: 10,
    name: "NetHunter RootLess",
    description: "Kali NetHunter for stock unrooted Android - specialized hacking platform",
    image: "https://www.kali.org/images/kali-logo.svg",
    category: "Security"
  }
];

const SupportedOS = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ["All", "Security", "General", "Advanced"];

  const filteredOS = operatingSystems.filter((os) => {
    const matchesSearch = os.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         os.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || os.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power2.out",
            delay: index * 0.03,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredOS]);

  return (
    <section ref={sectionRef} id="supported-os" className="py-20 relative -mt-16 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supported{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Distributions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from a wide range of Linux distributions optimized for Android
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search operating systems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* OS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOS.map((os, index) => (
            <Card
              key={os.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer will-change-transform"
            >
              <div className="relative h-48 overflow-hidden bg-muted/50 flex items-center justify-center p-4">
                <img
                  src={os.image}
                  alt={`${os.name} logo`}
                  className="max-h-32 max-w-[80%] object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden text-4xl font-bold text-muted-foreground">
                  {os.name.charAt(0)}
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 bg-foreground/90 text-background text-xs font-medium rounded-full">
                    {os.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                  {os.name}
                </h3>
                <p className="text-muted-foreground text-sm">{os.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredOS.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No operating systems found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupportedOS;
