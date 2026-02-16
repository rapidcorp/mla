import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, User, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("परिचय", "About")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "उदयलाल डांगी वल्लभनगर विधानसभा क्षेत्र से विधायक हैं। वे एक सफल उद्यमी और समर्पित जनसेवक हैं जो अपने क्षेत्र के विकास के लिए निरंतर कार्यरत हैं।",
              "Udailal Dangi is the MLA from Vallabhnagar constituency. He is a successful entrepreneur and dedicated public servant, continuously working for the development of his constituency."
            )}
          </p>

          {/* Political Journey */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 mb-8 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-2">🗳️ {t("राजनीतिक यात्रा", "Political Journey")}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "2018 में BJP उम्मीदवार के रूप में पहला चुनाव → 2021 में स्वतंत्र रूप से लड़े → 2023 में BJP में वापसी और ऐतिहासिक जीत 83,227 मतों से।",
                "First election as BJP candidate in 2018 → Fought independently in 2021 → Returned to BJP in 2023 and historic victory with 83,227 votes."
              )}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-primary" />
                {t("व्यवसाय", "Business")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🏨 Hotel The Rising</li>
                <li>🏖️ Rising Resort</li>
                <li>🏠 {t("रियल एस्टेट", "Real Estate")}</li>
                <li>🌾 {t("कृषि", "Agriculture")}</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <User size={20} className="text-primary" />
                {t("व्यक्तिगत", "Personal")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Calendar size={14} className="inline mr-1" /> {t("उम्र: 51 वर्ष", "Age: 51 years")}</li>
                <li><MapPin size={14} className="inline mr-1" /> {t("नांदवेल गाँव", "Nandwel Village")}</li>
                <li>👥 {t("डांगी समुदाय", "Dangi Community")}</li>
                <li>📅 {t("शपथ: 3 दिसंबर 2023", "Sworn in: 3 Dec 2023")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
