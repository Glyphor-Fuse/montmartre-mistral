import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Coffee, Star, Thermometer, Timer } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BREW_METHODS = [
  {
    id: "v60",
    name: "Hario V60",
    description: "A clean, transparent cup that highlights acidity and floral notes.",
    bean: "Ethiopia Yirgacheffe",
    notes: ["Jasmine", "Bergamot", "Lemon Zest"],
    temp: "93°C",
    time: "2:45",
    image: "/images/method-v60.jpg"
  },
  {
    id: "chemex",
    name: "Chemex",
    description: "Rich clarity with a silky body, perfect for complex single origins.",
    bean: "Colombia Huila Pink Bourbon",
    notes: ["Red Apple", "Caramel", "Floral"],
    temp: "94°C",
    time: "3:30",
    image: "/images/method-chemex.jpg"
  },
  {
    id: "aeropress",
    name: "Aeropress",
    description: "Full immersion brewing resulting in a bold, juicy body with low acidity.",
    bean: "Kenya Nyeri AA",
    notes: ["Blackcurrant", "Tomato Vine", "Brown Sugar"],
    temp: "88°C",
    time: "1:45",
    image: "/images/method-aeropress.jpg"
  }
];

export default function DailyPourMenu() {
  const [activeMethod, setActiveMethod] = useState(BREW_METHODS[0]);

  return (
    <section className="py-24 px-6 bg-background md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">The Daily Pour</span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">Curated Brew Methods</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We pair specific beans with the brew method that best unlocks their hidden potential. 
            Select a method to see today's feature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Menu Selection */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {BREW_METHODS.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method)}
                className={`group relative flex items-center justify-between p-6 text-left transition-all duration-300 border rounded-xl hover:shadow-md ${
                  activeMethod.id === method.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-card-foreground border-border hover:border-primary/30"
                }`}
              >
                <span className="font-serif text-xl font-medium">{method.name}</span>
                {activeMethod.id === method.id && (
                  <motion.div layoutId="active-dot" className="h-2 w-2 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Display Area */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethod.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card className="overflow-hidden border-none shadow-2xl h-full bg-[#1a1a1a] text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="h-64 md:h-auto relative">
                       <img
                        src={activeMethod.image}
                        alt={activeMethod.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-2 text-accent text-sm font-medium uppercase tracking-wider">Today's Bean</div>
                      <h3 className="font-serif text-3xl md:text-4xl mb-2">{activeMethod.bean}</h3>
                      <p className="text-white/70 mb-8 font-light leading-relaxed">{activeMethod.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-white/50 block mb-3">Tasting Notes</span>
                          <div className="flex flex-wrap gap-2">
                            {activeMethod.notes.map((note) => (
                              <Award key={note} variant="outline" className="border-white/20 text-white font-normal px-3 py-1">
                                {note}
                              </Award>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                          <div className="flex flex-col gap-1">
                            <Coffee className="h-5 w-5 text-accent mb-1" />
                            <span className="text-xs text-white/50 uppercase">Method</span>
                            <span className="font-medium">{activeMethod.name}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Thermometer className="h-5 w-5 text-accent mb-1" />
                            <span className="text-xs text-white/50 uppercase">Temp</span>
                            <span className="font-medium">{activeMethod.temp}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Timer className="h-5 w-5 text-accent mb-1" />
                            <span className="text-xs text-white/50 uppercase">Time</span>
                            <span className="font-medium">{activeMethod.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
