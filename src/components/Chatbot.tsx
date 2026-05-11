import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Scale } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const knowledge: { keys: string[]; answer: string }[] = [
  {
    keys: ["experiência", "experiencia", "trabalho", "trajetória", "trajetoria", "carreira"],
    answer:
      "Natália construiu sua trajetória em ambientes jurídicos de alta responsabilidade: atuou como Estagiária de Pós-Graduação no Gabinete da 7ª Vara Cível e Comercial do Fórum Ruy Barbosa (2023–2025), no Gabinete da 2ª Vara Cível e Comercial do TJ (2021–2022), na Caixa Econômica Federal (2019–2021) e no escritório Andrade Krejci Advogados e Associados (2019).",
  },
  {
    keys: ["áreas", "areas", "atuação", "atuacao", "civil", "empresarial", "trabalhista"],
    answer:
      "As áreas de atuação de Natália incluem Direito Civil, Direito Empresarial e Direito do Trabalho, com sólida experiência em contencioso estratégico e demandas perante o Tribunal de Justiça.",
  },
  {
    keys: ["formação", "formacao", "academic", "uneb", "puc", "mit", "estudo"],
    answer:
      "Formação: Bacharel em Direito pela UNEB, aprovada no XXXIV Exame da OAB (2023). Pós-graduanda em Direito e Processo do Trabalho pela PUC-RS. Membra do Significant Others of Sloan Club do MIT Sloan.",
  },
  {
    keys: ["oab", "exame"],
    answer: "Natália foi aprovada no XXXIV Exame da OAB em 2023.",
  },
  {
    keys: ["arbitragem", "mediação", "mediacao"],
    answer:
      "Natália possui formação e atuação em métodos adequados de resolução de conflitos, incluindo Arbitragem e Mediação, integrando uma visão moderna da advocacia contemporânea.",
  },
  {
    keys: ["artigo", "publicação", "publicacao", "usp"],
    answer:
      "Possui publicação acadêmica pela USP — destaque para o artigo \"A Relativização do Princípio da Indisponibilidade de Direitos em Face à Hipersuficiência do Trabalhador\".",
  },
  {
    keys: ["contato", "whatsapp", "email", "falar"],
    answer:
      "Você pode falar com Natália pelo WhatsApp (+55 71 98839-3619) ou pelo e-mail natalialaffitte@outlook.com.",
  },
  {
    keys: ["competência", "competencia", "habilidades", "skills"],
    answer:
      "Competências: capacidade analítica, produção técnica jurídica, fundamentação processual, pesquisa jurisprudencial, elaboração de minutas e decisões, comunicação e profundidade jurídica.",
  },
  {
    keys: ["projetos", "pesquisa", "extensão", "extensao", "competições", "competicoes", "hermenêutica", "hermeneutica"],
    answer:
      "Projetos e pesquisas envolvem grupos de estudos, competições jurídicas, hermenêutica jurídica, mediação, arbitragem e produção acadêmica em Direito do Trabalho.",
  },
  {
    keys: ["tribunal", "vara", "gabinete", "fórum", "forum"],
    answer:
      "Natália tem sólida experiência em gabinetes do Tribunal de Justiça, com elaboração de minutas de sentenças, decisões interlocutórias e despachos em demandas cíveis e empresariais.",
  },
];

const greeting =
  "Olá! Sou o assistente institucional da Dra. Natália Laffitte. Posso responder sobre sua experiência, formação acadêmica, áreas de atuação e projetos. Como posso ajudar?";

function answerFor(input: string): string {
  const q = input.toLowerCase();
  for (const k of knowledge) {
    if (k.keys.some((key) => q.includes(key))) return k.answer;
  }
  if (/oi|olá|ola|bom dia|boa tarde|boa noite/.test(q)) return greeting;
  return "Posso responder apenas sobre o perfil profissional da Dra. Natália Laffitte — experiência, formação, áreas de atuação (Cível, Empresarial, Trabalhista, Arbitragem, Mediação) e produção acadêmica. Reformule sua pergunta dentro desse contexto, por favor.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: greeting }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answerFor(text) }]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-to-br from-[#c8a96b] to-[#8a7140] text-background shadow-[0_10px_40px_-10px_rgba(200,169,107,0.6)] flex items-center justify-center hover:scale-105 transition"
        aria-label="Abrir chat"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[520px] glass rounded-2xl glow-gold flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-gold/20 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gold/15 flex items-center justify-center">
                <Scale className="size-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Assistente Institucional</p>
                <p className="text-xs text-muted-foreground">Dra. Natália Laffitte</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gold text-background rounded-br-sm"
                        : "bg-white/5 text-foreground rounded-bl-sm border border-gold/10"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex gap-1 px-4 py-2">
                  <span className="size-2 rounded-full bg-gold animate-pulse" />
                  <span className="size-2 rounded-full bg-gold animate-pulse [animation-delay:.2s]" />
                  <span className="size-2 rounded-full bg-gold animate-pulse [animation-delay:.4s]" />
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-gold/20 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Pergunte sobre o perfil..."
                className="flex-1 bg-white/5 border border-gold/20 rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50"
              />
              <button
                onClick={send}
                className="size-10 rounded-full bg-gold text-background flex items-center justify-center hover:scale-105 transition"
                aria-label="Enviar"
              >
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
