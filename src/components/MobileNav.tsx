import { Home, Image, Phone, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileNav = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "hero", icon: Home, label: t("होम", "Home") },
    { id: "gallery", icon: Image, label: t("गैलरी", "Gallery") },
    { id: "contact", icon: Phone, label: t("संपर्क", "Contact") },
  ];

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Menu size={20} />
            <span className="text-xs font-medium">{t("मेनू", "Menu")}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-sm flex flex-col items-center justify-center gap-6" onClick={() => setMenuOpen(false)}>
          {[
            { id: "hero", hi: "होम", en: "Home" },
            { id: "about", hi: "परिचय", en: "About" },
            { id: "timeline", hi: "यात्रा", en: "Journey" },
            { id: "work", hi: "कार्य", en: "Work" },
            { id: "gallery", hi: "गैलरी", en: "Gallery" },
            { id: "schemes", hi: "योजनाएं", en: "Schemes" },
            { id: "contact", hi: "संपर्क", en: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
            >
              {t(item.hi, item.en)}
            </button>
          ))}
          <button
            onClick={(e) => { e.stopPropagation(); toggleLanguage(); }}
            className="mt-4 px-5 py-2 rounded-full border-2 border-primary text-primary font-semibold"
          >
            {lang === "hi" ? "Switch to English" : "हिंदी में देखें"}
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNav;
