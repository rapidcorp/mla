import { TrendingUp, Users, Trophy, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const useCountUp = (end: number, duration: number, start: boolean, suffix = "") => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, end, duration]);
  return count + suffix;
};

const StatsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.3);

  const stats = [
    { icon: TrendingUp, value: 43, suffix: ".22", label: t("करोड़ सड़क परियोजनाएं", "Crore Road Projects"), prefix: "₹", color: "text-primary" },
    { icon: Users, value: 94, suffix: ".4%", label: t("विधानसभा उपस्थिति", "Assembly Attendance"), prefix: "", color: "text-accent" },
    { icon: Trophy, value: 83227, suffix: "", label: t("प्राप्त मत", "Votes Received"), prefix: "", color: "text-primary" },
    { icon: MapPin, value: 50, suffix: "+", label: t("गाँव TSP", "Villages TSP"), prefix: "", color: "text-accent" },
  ];

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "section-fade-in visible" : "section-fade-in"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className={`text-2xl md:text-3xl font-display font-bold ${stat.color}`}>
                {stat.prefix}
                {isVisible ? <CountDisplay end={stat.value} suffix={stat.suffix} /> : "0"}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountDisplay = ({ end, suffix }: { end: number; suffix: string }) => {
  const val = useCountUp(end, 2000, true);
  return <>{val}{suffix}</>;
};

export default StatsSection;
