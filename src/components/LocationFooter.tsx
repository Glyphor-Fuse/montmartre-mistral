import { Clock, Instagram, Mail, MapPin, Phone, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LocationFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-24 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Brand & Narrative */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl">Montmartre Mistral</h2>
            <p className="max-w-md text-primary-foreground/70 font-light text-lg">
              Specialty coffee roasters in the heart of the 18th arrondissement. 
              Come for the coffee, stay for the atmosphere.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-white/20 hover:bg-white hover:text-primary">
                <Instagram className="mr-2 h-4 w-4" /> @montmartremistral
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                    <p className="text-white/70 font-light">18 Rue des Abbesses,<br/>75018 Paris, France</p>
                    <a href="#" className="inline-flex items-center text-accent text-sm mt-2 hover:underline">
                      Get Directions <Star className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <p className="text-white/70 font-light">+33 1 42 55 55 55</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-medium text-lg mb-3">Opening Hours</h3>
                  <div className="space-y-2 text-sm text-white/70 font-light w-full">
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Mon - Fri</span>
                      <span>07:30 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Saturday</span>
                      <span>08:30 - 19:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Sunday</span>
                      <span>09:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2024 Montmartre Mistral. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
