import { CheckCircle2, Clock, Lightbulb, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DevelopmentSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const works = [
    { date: t("दिसंबर 2023", "Dec 2023"), text: t("विधायक पद की शपथ", "Sworn in as MLA"), icon: CheckCircle2, status: "done" },
    { date: t("जनवरी 2024", "Jan 2024"), text: t("₹43.22 करोड़ सड़क स्वीकृत (DMFT)", "₹43.22 Crore roads approved (DMFT)"), icon: CheckCircle2, status: "done" },
    { date: t("मार्च 2024", "Mar 2024"), text: t("रामा खेड़ा पेयजल परियोजना", "Drinking water project at Rama Kheda"), icon: CheckCircle2, status: "done" },
    { date: t("जारी", "Ongoing"), text: t("तकनीकी कॉलेज की मांग", "Technical college demand"), icon: Clock, status: "ongoing" },
    { date: t("जारी", "Ongoing"), text: t("ADJ कोर्ट की मांग", "ADJ court demand"), icon: Clock, status: "ongoing" },
    { date: t("जारी", "Ongoing"), text: t("50 गाँवों का TSP समावेश", "TSP inclusion for 50 villages"), icon: Clock, status: "ongoing" },
    { date: t("प्रस्तावित", "Proposed"), text: t("औद्योगिक क्षेत्र विकास", "Industrial zone development"), icon: Lightbulb, status: "proposed" },
  ];

  const assemblyStats = [
    { label: t("उपस्थिति", "Attendance"), value: "94.4%" },
    { label: t("प्रश्न पूछे", "Questions Asked"), value: "5" },
    { label: t("बहस में भागीदारी", "Debates Participated"), value: "7" },
    { label: t("MLSU बोर्ड सदस्य", "MLSU Board Member"), value: "✓" },
  ];

  return (
    <section id="work" className="py-16 bg-background">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("विकास कार्य", "Development Work")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="space-y-4">
              {works.map((w, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover:shadow-sm transition-shadow">
                  <w.icon
                    size={20}
                    className={
                      w.status === "done" ? "text-accent mt-0.5 shrink-0" :
                      w.status === "ongoing" ? "text-primary mt-0.5 shrink-0" :
                      "text-muted-foreground mt-0.5 shrink-0"
                    }
                  />
                  <div>
                    <span className="text-xs text-muted-foreground">{w.date}</span>
                    <p className="text-sm font-medium">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Assembly Stats */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-primary" />
                {t("विधानसभा प्रदर्शन", "Assembly Performance")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {assemblyStats.map((stat, i) => (
                  <div key={i} className="text-center bg-background rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
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

export default DevelopmentSection;
