import { motion } from "motion/react";

export default function StorySection() {
  const images = [
    { src: "/images/story-roaster.jpg", alt: "Master Roaster checking beans", class: "md:col-span-2 md:row-span-2 h-96 md:h-full" },
    { src: "/images/story-latte.jpg", alt: "Latte art detail", class: "md:col-span-1 md:row-span-1 h-64" },
    { src: "/images/story-shop.jpg", alt: "Shop interior ambiance", class: "md:col-span-1 md:row-span-1 h-64" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9F7F1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/60">Our Philosophy</span>
            <h2 className="mt-4 font-serif text-4xl font-medium text-primary md:text-5xl leading-tight">
              Small batch roasting.<br />
              <span className="italic text-accent-foreground/80">Parisian pace.</span>
            </h2>
          </div>
          <div className="text-lg text-primary/80 font-light leading-relaxed">
            <p>
              Nestled in the winding streets of Montmartre, we believe coffee is more than caffeine—it's a pause. 
              We roast our beans in small batches right here in the shop, filling the cobblestone streets 
              with the scent of caramel and toasted nuts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl group ${img.class}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
