import { Home, Briefcase, Flag, Trophy, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timelineItems = [
  { icon: Home, year: "", titleHi: "जन्म", titleEn: "Birth", descHi: "नांदवेल गाँव, डांगी समुदाय", descEn: "Nandwel village, Dangi community" },
  { icon: Briefcase, year: "", titleHi: "उद्यमी", titleEn: "Entrepreneur", descHi: "होटल और रिसॉर्ट व्यवसाय की स्थापना", descEn: "Established hotel and resort businesses" },
  { icon: Flag, year: "2018", titleHi: "प्रथम चुनाव", titleEn: "First Election", descHi: "BJP उम्मीदवार के रूप में पहला चुनाव", descEn: "First election as BJP candidate" },
  { icon: Trophy, year: "2021", titleHi: "विद्रोह", titleEn: "Rebellion", descHi: "RLP से लड़े, दूसरे स्थान पर", descEn: "Fought as RLP, secured second place" },
  { icon: Handshake, year: "नवंबर 2023", titleHi: "BJP में वापसी", titleEn: "Returned to BJP", descHi: "घर वापसी", descEn: "Homecoming to BJP" },
  { icon: Trophy, year: "दिसंबर 2023", titleHi: "ऐतिहासिक जीत", titleEn: "Historic Victory", descHi: "83,227 मतों से विजय, कांग्रेस का गढ़ तोड़ा", descEn: "Victory with 83,227 votes, broke Congress stronghold" },
];

const TimelineSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="timeline" className="py-16 bg-muted/50">
      <div className="container" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          {t("राजनीतिक यात्रा", "Political Journey")}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`relative mb-8 md:mb-12 ${
                isVisible ? (i % 2 === 0 ? "slide-left visible" : "slide-right visible") : (i % 2 === 0 ? "slide-left" : "slide-right")
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`flex items-start gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                  <item.icon size={16} className="text-primary-foreground" />
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:w-[calc(50%-2rem)] md:pr-8" : "md:w-[calc(50%-2rem)] md:pl-8 md:ml-auto"}`}>
                  <div className="bg-card rounded-xl p-4 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    {item.year && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.year}
                      </span>
                    )}
                    <h3 className="font-display font-bold mt-1">{t(item.titleHi, item.titleEn)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descHi, item.descEn)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
