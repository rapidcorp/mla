import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { descHi: "ग्रामीणों से मुलाकात", descEn: "Meeting villagers", color: "from-primary/60 to-saffron-dark/60" },
  { descHi: "सड़क निर्माण निरीक्षण", descEn: "Inspecting road construction", color: "from-accent/60 to-accent/40" },
  { descHi: "विधानसभा में भाषण", descEn: "Speaking in Assembly", color: "from-primary/60 to-secondary/60" },
  { descHi: "जल परियोजना उद्घाटन", descEn: "Water project inauguration", color: "from-accent/60 to-primary/40" },
  { descHi: "पार्टी नेताओं के साथ", descEn: "With party leaders", color: "from-saffron-dark/60 to-primary/60" },
  { descHi: "युवा सभा", descEn: "Youth meeting", color: "from-secondary/60 to-accent/40" },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-muted">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("फोटो गैलरी", "Photo Gallery")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg text-center px-4">
                    {t(item.descHi, item.descEn)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative bg-card rounded-2xl p-8 max-w-md w-full text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
              <X size={24} />
            </button>
            <div className={`aspect-video rounded-lg bg-gradient-to-br ${galleryItems[selected].color} mb-4 flex items-center justify-center`}>
              <span className="text-primary-foreground font-display font-bold text-xl">
                {t(galleryItems[selected].descHi, galleryItems[selected].descEn)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("वास्तविक फोटो जल्द ही अपलोड होंगे", "Actual photos coming soon")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
