import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Problem", id: "problem" },
  { name: "Workflow", id: "workflow" },
  { name: "Model", id: "model" },
  { name: "Metrics", id: "metrics" },
  { name: "Path", id: "roadmap" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleRequestDeck = () => {
    window.location.href = "mailto:hello@freshnode.in?subject=Requesting Investor Deck";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-bold tracking-tight text-white flex items-center">
              FreshNode
              <span className="w-1.5 h-1.5 rounded-full bg-primary ml-1 translate-y-[2px]"></span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all rounded-full px-6"
              onClick={handleRequestDeck}
            >
              Request Deck
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-6"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col gap-6 text-lg mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-white/80 hover:text-white font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6 border-t border-white/10 mt-4">
                <Button 
                  className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-6 text-lg"
                  onClick={handleRequestDeck}
                >
                  Request Investor Deck
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
