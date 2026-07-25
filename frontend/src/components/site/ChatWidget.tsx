import { MessageCircle, Bot, X, Send, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { brand } from "@/lib/site-data";

type Message = {
  sender: "bot" | "user";
  text: string;
  options?: string[];
};

export function ChatWidget() {
  const [botOpen, setBotOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const initialMessage: Message = {
    sender: "bot",
    text: "Namaste! Welcome to Vinayak Tours & Travel. I am your virtual travel assistant. How can I help you today?",
    options: [
      "✈️ Plan a new trip",
      "🛂 Visa & Passport help",
      "🏢 Corporate MICE travel",
      "💳 Payment & Advance policy",
      "📞 Connect with a human"
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const waHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi Vinayak Tours & Travel, I'd like to plan a trip."
  )}`;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botOpen]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const newMsg: Message = { sender: "user", text: option };
    setMessages((prev) => [...prev, newMsg]);

    // Generate bot reply after a small delay
    setTimeout(() => {
      let replyText = "";
      let replyOptions: string[] = [];

      const cleanOpt = option.toLowerCase();

      if (cleanOpt.includes("plan") || cleanOpt.includes("trip")) {
        replyText = "We design fully customized tour packages for families, couples, groups, and solo travelers. We cover 50+ countries plus all major Indian regions (Goa, Kerala, Himachal, Kashmir, and Char Dham Yatra). Would you like to check out our online form?";
        replyOptions = ["📝 Go to Booking Form", "💬 Plan on WhatsApp", "🔙 Back to main menu"];
      } else if (cleanOpt.includes("visa") || cleanOpt.includes("passport")) {
        replyText = "We offer end-to-end passport assistance and tourist/business visa consultation. We assist with documentation, slot bookings, and interview preparation for US, UK, Europe (Schengen), UAE, Thailand, and more.";
        replyOptions = ["📞 Request Visa Call", "🔙 Back to main menu"];
      } else if (cleanOpt.includes("corporate") || cleanOpt.includes("mice")) {
        replyText = "We specialize in corporate group travel (MICE), organizing flights, hotels, and local ground logistics for events up to 500+ pax. Our esteemed corporate clients include Force Motors, JK Files, Shubham Group, and more.";
        replyOptions = ["💼 Corporate Booking Request", "🔙 Back to main menu"];
      } else if (cleanOpt.includes("payment") || cleanOpt.includes("advance")) {
        replyText = "We charge ZERO advance payment to design your custom itinerary and shared quote. Timelines and advance booking deposits are discussed transparently only after you confirm your travel package.";
        replyOptions = ["🔙 Back to main menu"];
      } else if (cleanOpt.includes("human") || cleanOpt.includes("phone") || cleanOpt.includes("call")) {
        replyText = `You can call or WhatsApp our travel designers directly:\n\n• Honey Rajpal (Indore): ${brand.phones[0].number}\n• Ajay Rajpal (Chandigarh): ${brand.phones[1].number}\n\nEmail: vinayakindore2000@gmail.com`;
        replyOptions = ["💬 Chat on WhatsApp", "🔙 Back to main menu"];
      } else if (cleanOpt.includes("form")) {
        replyText = "Great! You can fill out our detailed trip planner at /booking. It takes less than 2 minutes and is completely free.";
        replyOptions = ["🔙 Back to main menu"];
      } else if (cleanOpt.includes("whatsapp")) {
        window.open(waHref, "_blank");
        replyText = "Opening WhatsApp connection to chat with our agents...";
        replyOptions = ["🔙 Back to main menu"];
      } else {
        replyText = "I'm here to guide you with any questions. Feel free to ask about our packages, services, or offices.";
        replyOptions = ["🔙 Back to main menu"];
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: replyText, options: replyOptions }
      ]);
    }, 600);
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

      if (cleanInput.includes("hello") || cleanInput.includes("hi") || cleanInput.includes("hey")) {
        replyText = "Hello! How can I help you today with your travel plans?";
      } else if (cleanInput.includes("price") || cleanInput.includes("rate") || cleanInput.includes("cost") || cleanInput.includes("budget")) {
        replyText = "All our package rates are tailored to your travel dates, passenger counts, and accommodation standards. We offer competitive budget-to-luxury options with transparent breakdowns. What destination are you interested in?";
      } else if (cleanInput.includes("kerala") || cleanInput.includes("goa") || cleanInput.includes("kashmir") || cleanInput.includes("himachal") || cleanInput.includes("rajasthan") || cleanInput.includes("char dham")) {
        replyText = `Ah, we have beautiful, premium custom itineraries for ${userText}. Would you like to send a query for it?`;
      } else if (cleanInput.includes("dubai") || cleanInput.includes("bali") || cleanInput.includes("thailand") || cleanInput.includes("vietnam") || cleanInput.includes("maldives")) {
        replyText = `Yes, we offer fully escorted and customized international tours to ${userText}. We handle flights, visa processing, hotel bookings, and guides.`;
      } else {
        replyText = "Thank you for reaching out. Our support team is active 24/7 on WhatsApp to answer detailed questions. Would you like to chat with them directly?";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          options: ["💬 Chat on WhatsApp", "🔙 Back to main menu"]
        }
      ]);
    }, 600);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 font-sans">
        {botOpen && (
          <div className="w-[min(380px,calc(100vw-2.5rem))] overflow-hidden rounded-3xl border border-border bg-card shadow-brand flex flex-col h-[500px]">
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                  <Bot className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-tight">Vinayak Travel Bot</div>
                  <div className="text-[10px] opacity-80 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Online · Autoreply
                  </div>
                </div>
              </div>
              <button
                aria-label="Close FAQ"
                onClick={() => setBotOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/15">
              {messages.map((m, idx) => (
                <div key={idx} className="space-y-2">
                  <div className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line shadow-sm leading-relaxed ${
                        m.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-card text-foreground border border-border rounded-tl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>

                  {m.options && m.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 pl-1">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            if (opt === "🔙 Back to main menu") {
                              setMessages((prev) => [...prev, initialMessage]);
                            } else if (opt === "📝 Go to Booking Form" || opt === "📝 Go to Booking Form") {
                              window.location.href = "/booking";
                            } else {
                              handleOptionClick(opt);
                            }
                          }}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-foreground hover:border-accent hover:text-accent shadow-sm transition-all"
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
            <form onSubmit={handleSend} className="p-3 border-t border-border bg-card flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent bg-secondary/30"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBotOpen((v) => !v)}
            aria-label="Open FAQ assistant"
            className="inline-flex items-center gap-2 rounded-full brand-gradient px-4 py-3 text-sm font-bold text-white shadow-brand hover:scale-105 active:scale-95 transition-all"
          >
            <Bot className="h-5 w-5 text-accent animate-bounce" />
            <span>Ask FAQ Bot</span>
          </button>

          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-brand hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
