import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quer encontrar o imóvel ideal?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Nossos corretores estão prontos para te ajudar. 
            Agende uma visita ou fale conosco agora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Agendar Visita
            </Button>
            <Button variant="heroOutline" size="lg" className="gap-2 bg-accent/20 border-accent/40">
              <MessageCircle className="w-5 h-5" />
              Falar com Corretor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
