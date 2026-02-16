import { MapPin, Users, BookOpen, Droplets, Route, Stethoscope, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConstituencySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const issues = [
    { icon: Droplets, hi: "जल संकट", en: "Water scarcity" },
    { icon: Route, hi: "सड़क संपर्क", en: "Road connectivity" },
    { icon: Stethoscope, hi: "स्वास्थ्य सुविधाएं", en: "Healthcare access" },
    { icon: GraduationCap, hi: "शिक्षा अवसंरचना", en: "Education infrastructure" },
    { icon: Briefcase, hi: "रोजगार", en: "Employment" },
  ];

  return (
    <section id="constituency" className="py-16 bg-background">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("वल्लभनगर निर्वाचन क्षेत्र", "Vallabhnagar Constituency")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("155वां विधानसभा क्षेत्र, उदयपुर जिला, राजस्थान", "155th Assembly Constituency, Udaipur District, Rajasthan")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "📍", label: t("जनसंख्या", "Population"), value: "~3.31L" },
                  { icon: "🏘️", label: t("गाँव", "Villages"), value: "249-305" },
                  { icon: "🏙️", label: t("कस्बे", "Towns"), value: t("भींडर, कानोड", "Bhinder, Kanor") },
                  { icon: "🌾", label: t("ग्रामीण", "Rural"), value: "~90%" },
                  { icon: "📚", label: t("साक्षरता", "Literacy"), value: "53-63%" },
                  { icon: "👥", label: "ST", value: "19-21%" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted rounded-lg p-3 text-center">
                    <span className="text-lg">{item.icon}</span>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Issues */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">{t("मुख्य मुद्दे", "Key Issues")}</h3>
              <div className="space-y-3">
                {issues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-3 bg-primary/5 rounded-lg p-3 border border-primary/10">
                    <issue.icon size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{t(issue.hi, issue.en)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstituencySection;
