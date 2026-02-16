import { ChevronDown, MessageCircle, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-politician.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-saffron overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 py-20">
        {/* Photo */}
        <div className="relative inline-block mb-6">
          <img
            src={heroImg}
            alt="Udailal Dangi"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-foreground shadow-2xl"
          />
          <div className="absolute -bottom-2 -right-2 bg-primary-foreground text-primary rounded-full w-12 h-12 flex items-center justify-center font-display font-bold text-xs shadow-lg">
            BJP
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-foreground text-shadow mb-2">
          {t("उदयलाल डांगी", "Udailal Dangi")}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
          {t("विधायक, वल्लभनगर", "MLA, Vallabhnagar")}
        </p>

        {/* Party pill */}
        <div className="glass-card inline-block rounded-full px-5 py-2 mb-6">
          <span className="text-primary-foreground font-semibold text-sm">
            {t("भारतीय जनता पार्टी", "Bharatiya Janata Party")}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-primary-foreground/85 text-base md:text-lg max-w-xl mx-auto mb-8">
          {t(
            "🏗️ विकास का चैंपियन | 🙏 जनता का सेवक | 📢 वल्लभनगर की आवाज",
            "🏗️ Champion of Development | 🙏 Servant of People | 📢 Voice of Vallabhnagar"
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle size={20} />
            {t("व्हाट्सएप करें", "WhatsApp Us")}
          </a>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
          >
            <Briefcase size={20} />
            {t("कार्य देखें", "View Work")}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={32} className="text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
