import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-saffron text-primary-foreground py-10 pb-24 lg:pb-10">
      <div className="container text-center">
        <h3 className="font-display font-bold text-xl mb-1">
          {t("उदयलाल डांगी", "Udailal Dangi")}
        </h3>
        <p className="text-primary-foreground/80 text-sm mb-2">
          {t("विधायक, वल्लभनगर", "MLA, Vallabhnagar")}
        </p>
        <p className="text-primary-foreground/60 text-xs mb-4">
          {t("भारतीय जनता पार्टी", "Bharatiya Janata Party")}
        </p>
        <div className="w-16 h-px bg-primary-foreground/30 mx-auto mb-4" />
        <p className="text-primary-foreground/50 text-xs">
          © 2026 Udailal Dangi. {t("सर्वाधिकार सुरक्षित", "All rights reserved")}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
