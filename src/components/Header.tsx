import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { id: "hero", hi: "होम", en: "Home" },
  { id: "about", hi: "परिचय", en: "About" },
  { id: "timeline", hi: "यात्रा", en: "Journey" },
  { id: "work", hi: "कार्य", en: "Work" },
  { id: "gallery", hi: "गैलरी", en: "Gallery" },
  { id: "contact", hi: "संपर्क", en: "Contact" },
];

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-display font-bold text-lg text-primary">
          {t("उदयलाल डांगी", "Udailal Dangi")}
        </button>

        <nav className="flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
            >
              {t(item.hi, item.en)}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {lang === "hi" ? "EN" : "हिं"}
        </button>
      </div>
    </header>
  );
};

export default Header;
