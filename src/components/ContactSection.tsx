import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", phone: "", village: "", subject: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${formData.name}\nPhone: ${formData.phone}\nVillage: ${formData.village}\nSubject: ${formData.subject}\nDetails: ${formData.details}`;
    window.open(`https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container" ref={ref}>
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t("संपर्क करें", "Contact Us")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{t("कार्यालय", "Office")}</p>
                  <p className="text-sm text-muted-foreground">{t("विधायक कार्यालय, वल्लभनगर, उदयपुर", "MLA Office, Vallabhnagar, Udaipur")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{t("फोन", "Phone")}</p>
                  <p className="text-sm text-muted-foreground">{t("जल्द उपलब्ध", "Coming Soon")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{t("ईमेल", "Email")}</p>
                  <p className="text-sm text-muted-foreground">{t("जल्द उपलब्ध", "Coming Soon")}</p>
                </div>
              </div>
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                {t("व्हाट्सएप पर संपर्क करें", "Contact on WhatsApp")}
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder={t("नाम", "Name")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <input
                type="tel"
                placeholder={t("फोन नंबर", "Phone Number")}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                placeholder={t("गाँव / क्षेत्र", "Village / Area")}
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">{t("विषय चुनें", "Select Subject")}</option>
                <option value="water">{t("पानी", "Water")}</option>
                <option value="roads">{t("सड़कें", "Roads")}</option>
                <option value="electricity">{t("बिजली", "Electricity")}</option>
                <option value="health">{t("स्वास्थ्य", "Health")}</option>
                <option value="education">{t("शिक्षा", "Education")}</option>
                <option value="other">{t("अन्य", "Other")}</option>
              </select>
              <textarea
                placeholder={t("विवरण", "Details")}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t("भेजें", "Submit")}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                {t("आपकी शिकायत पर जल्द ध्यान दिया जाएगा", "Your complaint will be addressed soon")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
