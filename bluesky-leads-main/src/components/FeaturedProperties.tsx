import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Apartamento Moderno",
    location: "Centro, São Paulo",
    price: "R$ 450.000",
    beds: 2,
    baths: 2,
    area: "75m²",
    tag: "Destaque",
  },
  {
    id: 2,
    image: property2,
    title: "Casa com Jardim",
    location: "Jardins, Campinas",
    price: "R$ 680.000",
    beds: 3,
    baths: 3,
    area: "180m²",
    tag: "Novo",
  },
  {
    id: 3,
    image: property3,
    title: "Cobertura Premium",
    location: "Vila Nova, Curitiba",
    price: "R$ 1.200.000",
    beds: 4,
    baths: 3,
    area: "220m²",
    tag: "Exclusivo",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Imóveis em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Selecionamos as melhores oportunidades para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {property.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {property.location}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {property.title}
                </h3>
                <p className="text-2xl font-extrabold text-accent mb-4">
                  {property.price}
                </p>

                <div className="flex items-center gap-4 text-muted-foreground text-sm border-t border-border pt-4">
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds}</span>
                  <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todos os imóveis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
