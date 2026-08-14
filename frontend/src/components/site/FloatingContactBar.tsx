import { useState, useRef, useEffect } from "react";
import { MessageCircle, Bot, X, Send, Sparkles, PhoneCall, Compass, FileCheck2, Users2, ShieldCheck, ArrowLeft, FormInput } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

type Message = {
  sender: "bot" | "user";
  text: string;
  options?: string[];
};

export function FloatingContactBar() {
  const [botOpen, setBotOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const initialMessage: Message = {
    sender: "bot",
    text: "Namaste! Welcome to Vinayak Tours & Travel. I am your virtual travel assistant. How can I help you today?",
    options: [
      "Plan a new trip",
      "Visa & Passport help",
      "Corporate MICE travel",
      "Payment & Advance policy",
      "Connect with an expert"
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const waHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi Vinayak Tours & Travel, I would like to plan a custom trip."
  )}`;

  useEffect(() => {
    if (botOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, botOpen]);

  const handleOptionClick = (option: string) => {
    const newMsg: Message = { sender: "user", text: option };
    setMessages((prev) => [...prev, newMsg]);

    setTimeout(() => {
      let replyText = "";
      let replyOptions: string[] = [];

      const cleanOpt = option.toLowerCase();

      if (cleanOpt.includes("plan") || cleanOpt.includes("trip")) {
        replyText = "We design fully customized tour packages for families, couples, groups, and solo travelers covering 50+ countries plus Kashmir, Kerala, Goa, Himachal, and Char Dham Yatra. Your custom itinerary is just one conversation away!";
        replyOptions = ["Go to Booking Form", "Plan on WhatsApp", "Back to main menu"];
      } else if (cleanOpt.includes("visa") || cleanOpt.includes("passport")) {
        replyText = "We offer end-to-end tourist & business visa consultation (documentation, appointment slots, interview prep) for US, UK, Schengen, UAE, Thailand, Bali and more.";
        replyOptions = ["Request Visa Call", "Back to main menu"];
      } else if (cleanOpt.includes("corporate") || cleanOpt.includes("mice")) {
        replyText = "We manage corporate MICE travel, offsites, and flights for 500+ pax. Clients include Force Motors, VE Commercial Vehicles, Shubham Group, etc.";
        replyOptions = ["Back to main menu"];
      } else if (cleanOpt.includes("payment") || cleanOpt.includes("advance")) {
        replyText = "ZERO advance payment is required to draft your custom quote & itinerary! Payments are collected only after you confirm your package.";
        replyOptions = ["Back to main menu"];
      } else if (cleanOpt.includes("human") || cleanOpt.includes("connect") || cleanOpt.includes("expert")) {
        replyText = `Call or WhatsApp our travel desk directly:\n\n• Honey Rajpal (Indore HQ): ${brand.phones[0].number}\n• Ajay Rajpal (Chandigarh Branch): ${brand.phones[1].number}`;
        replyOptions = ["Chat on WhatsApp", "Back to main menu"];
      } else {
        replyText = "Feel free to ask about our packages, services, or office locations.";
        replyOptions = ["Back to main menu"];
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: replyText, options: replyOptions }
      ]);
    }, 500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    setTimeout(() => {
      let replyText = "";
      const cleanInput = userText.toLowerCase();

      if (cleanInput.includes("hi") || cleanInput.includes("hello") || cleanInput.includes("hey")) {
        replyText = "Hello! How can I help you plan your next tour today?";
      } else if (cleanInput.includes("price") || cleanInput.includes("cost") || cleanInput.includes("rate") || cleanInput.includes("package")) {
        replyText = "Our packages start from ₹12,999 (Domestic) & ₹29,999 (International). All itineraries are fully customizable! Which destination are you interested in?";
      } else {
        replyText = "Thank you for reaching out! Our team in Indore & Chandigarh is active 24/7 on WhatsApp. Would you like to connect directly?";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: replyText, options: ["Chat on WhatsApp", "Back to main menu"] }
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">

      {/* BOT CHAT MODAL WINDOW */}
      {botOpen && (
        <div className="w-[min(370px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-border bg-card shadow-brand flex flex-col h-[min(460px,calc(100vh-6rem))] animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3.5 text-primary-foreground">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/10">
                <Bot className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-xs font-black tracking-tight">Vinayak Travel Assistant</div>
                <div className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online · 24×7 Support
                </div>
              </div>
            </div>
            <button
              aria-label="Close Chat"
              onClick={() => setBotOpen(false)}
              className="rounded-full p-1 hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-secondary/15">
            {messages.map((m, idx) => (
              <div key={idx} className="space-y-2">
                <div className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs whitespace-pre-line shadow-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-card text-foreground border border-border rounded-tl-none font-medium"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>

                {m.options && m.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {m.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          if (opt === "Back to main menu") {
                            setMessages((prev) => [...prev, initialMessage]);
                          } else if (opt === "Go to Booking Form") {
                            window.location.href = "/booking";
                          } else if (opt === "Chat on WhatsApp" || opt === "Plan on WhatsApp") {
                            window.open(waHref, "_blank");
                          } else {
                            handleOptionClick(opt);
                          }
                        }}
                        className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-white border border-border text-foreground hover:border-accent hover:text-accent shadow-sm transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2.5 border-t border-border bg-card flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent bg-secondary/30"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid h-8 w-8 place-items-center rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* UNIFIED SINGLE FLOATING BAR */}
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-primary/95 p-1.5 text-primary-foreground shadow-brand backdrop-blur-xl">
        {/* Travel Assistant Button */}
        <button
          onClick={() => setBotOpen((v) => !v)}
          aria-label="Toggle Travel Assistant"
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold transition-all ${
            botOpen ? "bg-accent text-accent-foreground" : "hover:bg-white/10 text-white"
          }`}
        >
          <Bot className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">Travel Assistant</span>
        </button>

        {/* Plan Tour Link */}
        <Link
          to="/booking"
          className="flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-black text-accent-foreground hover:brightness-110 transition-all shadow"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Plan Tour</span>
        </Link>

        {/* Call Expert (Desktop only) */}
        <a
          href={`tel:${brand.phones[0].tel}`}
          aria-label="Call Expert"
          className="hidden md:flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-bold text-white hover:bg-white/10 transition-all"
        >
          <PhoneCall className="h-3.5 w-3.5 text-accent" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Us"
          className="relative grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white shadow hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-4.5 w-4.5 fill-current stroke-none" />
        </a>
      </div>
    </div>
  );
}
