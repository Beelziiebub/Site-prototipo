import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Edifício moderno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Encontre o imóvel
            <br />
            <span className="text-accent">dos seus sonhos</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl">
            Apartamentos, casas e terrenos nas melhores localizações. 
            Atendimento personalizado para você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-card rounded-xl p-4 md:p-6 shadow-card-hover max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
              <Home className="w-5 h-5 text-accent shrink-0" />
              <select className="bg-transparent w-full text-foreground outline-none text-sm font-medium cursor-pointer">
                <option>Tipo de Imóvel</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Terreno</option>
                <option>Comercial</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <select className="bg-transparent w-full text-foreground outline-none text-sm font-medium cursor-pointer">
                <option>Bairro</option>
                <option>Centro</option>
                <option>Jardins</option>
                <option>Vila Nova</option>
                <option>Boa Vista</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
              <DollarSign className="w-5 h-5 text-accent shrink-0" />
              <select className="bg-transparent w-full text-foreground outline-none text-sm font-medium cursor-pointer">
                <option>Faixa de Preço</option>
                <option>Até R$ 200 mil</option>
                <option>R$ 200 - 500 mil</option>
                <option>R$ 500 mil - 1M</option>
                <option>Acima de R$ 1M</option>
              </select>
            </div>

            <Button variant="cta" size="lg" className="w-full gap-2">
              <Search className="w-5 h-5" />
              Buscar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
