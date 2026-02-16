import { Heart, Users, Hammer, School, Tractor, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schemes = [
  { icon: Heart, titleHi: "आयुष्मान आरोग्य", titleEn: "Ayushman Arogya", descHi: "₹25 लाख स्वास्थ्य बीमा", descEn: "₹25 lakh health insurance" },
  { icon: Users, titleHi: "PM JANMAN", titleEn: "PM JANMAN", descHi: "जनजातीय विकास", descEn: "Tribal development" },
  { icon: Hammer, titleHi: "MGNREGA", titleEn: "MGNREGA", descHi: "ग्रामीण रोजगार", descEn: "Rural employment" },
  { icon: School, titleHi: "एकलव्य विद्यालय", titleEn: "Eklavya Schools", descHi: "जनजातीय आवासीय विद्यालय", descEn: "Tribal residential schools" },
  { icon: Tractor, titleHi: "PM-KISAN", titleEn: "PM-KISAN", descHi: "किसान आर्थिक सहायता", descEn: "Farmer financial assistance" },
  { icon: GraduationCap, titleHi: "बेटी बचाओ बेटी पढ़ाओ", titleEn: "Beti Bachao Beti Padhao", descHi: "बालिका शिक्षा", descEn: "Girl education" },
];

const SchemesSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schemes" className="py-16 bg-muted">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("सरकारी योजनाएं", "Government Schemes")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {schemes.map((scheme, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <scheme.icon size={28} className="text-primary mb-3" />
                <h3 className="font-display font-bold mb-1">{t(scheme.titleHi, scheme.titleEn)}</h3>
                <p className="text-sm text-muted-foreground">{t(scheme.descHi, scheme.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
