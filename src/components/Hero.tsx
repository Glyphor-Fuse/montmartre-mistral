import { ArrowRight, MapPin, Clock, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-cafe-mist.jpg"
          alt="Montmartre Mistral Cafe Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm uppercase tracking-widest text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Open Now • 18 Rue des Abbesses</span>
          </div>
          
          <h1 className="mb-6 font-serif text-5xl font-medium leading-tight text-white md:text-7xl lg:text-8xl">
            Precision Brewing. <br />
            <span className="text-white/80 italic">Bohemian Soul.</span>
          </h1>
          
          <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl font-light leading-relaxed">
            A specialty coffee roastery in the heart of Montmartre. 
            Where the artistry of the bean meets the precision of the pour.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
              View The Menu
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
              Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <div className="h-12 w-[1px] bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
}
