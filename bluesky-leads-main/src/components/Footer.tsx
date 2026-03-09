import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4 font-display">
              Imob<span className="text-accent">Casa</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Sua imobiliária de confiança. Encontre o imóvel perfeito com atendimento personalizado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {["Imóveis à Venda", "Imóveis para Alugar", "Sobre Nós", "Blog"].map((item) => (
                <a key={item} href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Contato
            </h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Rua das Flores, 123 - Centro</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> (11) 99999-0000</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> contato@imobcasa.com.br</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/40 text-xs">
          © 2026 ImobCasa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
