import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919XXXXXXXXX?text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[5rem] lg:bottom-6 right-4 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
