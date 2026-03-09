import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-extrabold text-primary-foreground tracking-tight font-display">
            Imob<span className="text-accent">Casa</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Início", "Imóveis", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Contato
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-lg rounded-xl p-6 mb-4">
            <nav className="flex flex-col gap-4">
              {["Início", "Imóveis", "Sobre", "Contato"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-base font-medium"
                >
                  {item}
                </a>
              ))}
              <Button variant="cta" size="sm" className="gap-2 mt-2 w-fit">
                <Phone className="w-4 h-4" />
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
