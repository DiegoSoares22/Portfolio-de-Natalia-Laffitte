import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Scale,
  Briefcase,
  BookOpen,
  Award,
  Gavel,
  FileText,
  Users,
  Building2,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import nataliaPhoto from "@/assets/natalia.jpg";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Chatbot } from "@/components/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Natália Laffitte | Advocacia Estratégica e de Excelência" },
      {
        name: "description",
        content:
          "Portfólio jurídico de Natália Valle Laffitte Lima — advocacia em Direito Civil, Empresarial e Trabalhista, com sólida experiência junto ao Tribunal de Justiça.",
      },
      { property: "og:title", content: "Natália Laffitte | Advocacia Premium" },
      {
        property: "og:description",
        content:
          "Excelência técnica, visão moderna e atuação jurídica de alto nível.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const WhatsAppIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
  </svg>
);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const whatsappLink =
  "https://wa.me/5571988393619?text=" +
  encodeURIComponent("Olá, Natália. Tudo bem? Vi o seu portfólio e gostaria de conversar com você!");

const experiences = [
  {
    period: "2023 — 2025",
    role: "Estagiária de Pós-Graduação",
    place: "Gabinete da 7ª Vara Cível e Comercial — Fórum Ruy Barbosa",
    icon: Gavel,
    items: [
      "Elaboração de minutas de sentenças",
      "Decisões interlocutórias e despachos",
      "Demandas cíveis e empresariais",
      "Mentoria de estagiários",
      "Fundamentação jurídica e análise técnica processual",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Estagiária",
    place: "Gabinete da 2ª Vara Cível e Comercial — Tribunal de Justiça",
    icon: Scale,
    items: [
      "Elaboração de minutas",
      "Pesquisa jurisprudencial",
      "Acompanhamento de audiências",
      "Atendimento processual",
      "Demandas empresariais e cíveis",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Estagiária",
    place: "Caixa Econômica Federal",
    icon: Building2,
    items: [
      "Elaboração de peças processuais",
      "Contestações",
      "Cadastro processual",
      "Consultoria processual",
    ],
  },
  {
    period: "2019",
    role: "Estagiária",
    place: "Andrade Krejci Advogados e Associados",
    icon: Briefcase,
    items: [
      "Contencioso cível e trabalhista",
      "Autos de infração",
      "Normas regulamentadoras",
      "Diligências externas e relatórios processuais",
    ],
  },
];

const education = [
  {
    school: "UNEB",
    degree: "Bacharel em Direito",
    detail: "Aprovada no XXXIV Exame da OAB — 2023",
    badge: "OAB",
  },
  {
    school: "PUC-RS",
    degree: "Pós-graduanda em Direito e Processo do Trabalho",
    detail: "Especialização em curso",
    badge: "Pós",
  },
  {
    school: "Partners Club",
    degree: "Membra ativa",
    detail: "University of Pennsylvania",
    badge: "UPenn",
  },
];

const projects = [
  { label: "Publicação USP", icon: BookOpen },
  { label: "Arbitragem", icon: Scale },
  { label: "Grupo de Estudos", icon: Users },
  { label: "Competições Jurídicas", icon: Award },
  { label: "Mediação", icon: Users },
  { label: "Direito do Trabalho", icon: Briefcase },
  { label: "Hermenêutica Jurídica", icon: BookOpen },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha todos os campos.");
      return;
    }
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:natalialaffitte@outlook.com?subject=${encodeURIComponent(
      "Contato via portfólio"
    )}&body=${body}`;
    toast.success("Abrindo seu cliente de e-mail...");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <Chatbot />

      {/* HERO */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold">
                Advocacia Estratégica
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Advocacia estratégica com{" "}
              <span className="gradient-gold-text italic">excelência técnica</span>, visão moderna
              e atuação jurídica de alto nível.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Especialista em demandas cíveis e trabalhistas, com sólida experiência
              no Tribunal de Justiça, produção técnica jurídica e atuação acadêmica de destaque.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#c8a96b] to-[#a08550] px-6 py-3.5 text-sm font-medium text-background shadow-[0_10px_40px_-10px_rgba(200,169,107,0.6)] hover:scale-[1.02] transition-transform"
              >
                <WhatsAppIcon className="size-4" />
                Entrar em contato
              </a>
              <a
                href="/curriculo-natalia-laffitte.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-foreground hover:bg-gold/10 hover:border-gold/70 transition"
              >
                <Download className="size-4 text-gold group-hover:translate-y-0.5 transition" />
                Baixar currículo
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "6+", l: "Anos de atuação" },
                { n: "OAB", l: "XXXIV Exame" },
                { n: "TJ", l: "Experiência" },
              ].map((s, i) => (
                <div key={i} className="border-l border-gold/30 pl-4">
                  <div className="font-serif text-2xl gradient-gold-text">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#c8a96b]/30 via-transparent to-[#6b1e2b]/20 blur-3xl rounded-full" />
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 to-transparent rounded-[2rem] blur-md" />
              <div className="relative rounded-[2rem] overflow-hidden border border-gold/40 shadow-[0_40px_100px_-30px_rgba(200,169,107,0.4)]">
                <img
                  src={nataliaPhoto}
                  alt="Natália Valle Laffitte Lima — Advogada"
                  className="w-72 sm:w-80 lg:w-[420px] h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <Scale className="size-5 text-gold" />
                <div>
                  <p className="text-xs text-muted-foreground">Aprovada</p>
                  <p className="text-sm font-medium text-foreground">XXXIV OAB</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="sobre" eyebrow="Sobre" title="Profissional do Direito com visão contemporânea">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.p
            {...fadeUp}
            className="lg:col-span-2 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Profissional do Direito com sólida atuação em demandas cíveis e
            trabalhistas, destacando-se pela capacidade analítica, produção técnica jurídica e
            experiência prática junto ao Tribunal de Justiça. Possui trajetória construída em
            ambientes jurídicos de alta responsabilidade, incluindo atuação em gabinetes
            judiciais, contencioso estratégico e projetos acadêmicos relevantes.
            <br />
            <br />
            Aprovada no <span className="text-gold">XXXIV Exame da OAB</span>, reúne experiência
            prática, excelência acadêmica e visão moderna da advocacia contemporânea — aliando
            técnica, comunicação e profundidade jurídica em cada atuação.
          </motion.p>
          <motion.div {...fadeUp} className="space-y-4">
            {[
              { icon: Scale, label: "Direito Civil & Empresarial" },
              { icon: Briefcase, label: "Direito do Trabalho" },
              { icon: FileText, label: "Contencioso Estratégico" },
              { icon: Users, label: "Arbitragem & Mediação" },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 flex items-center gap-3 hover:border-gold/40 transition"
              >
                <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="size-5 text-gold" />
                </div>
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* EXPERIÊNCIA */}
      <Section id="experiencia" eyebrow="Trajetória" title="Experiência profissional">
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    left ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-12 lg:pl-0 ${left ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 hover:glow-gold hover:border-gold/40 transition-all duration-500">
                      <div className={`flex items-center gap-3 mb-3 ${left ? "lg:justify-end" : ""}`}>
                        <span className="text-xs uppercase tracking-[0.25em] text-gold">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-1">{exp.role}</h3>
                      <p className="text-sm text-gold/90 mb-4">{exp.place}</p>
                      <ul className={`space-y-1.5 text-sm text-muted-foreground ${left ? "lg:text-right" : ""}`}>
                        {exp.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block" />
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 size-10 rounded-full glass border-gold/50 flex items-center justify-center glow-gold">
                    <Icon className="size-4 text-gold" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projetos" eyebrow="Pesquisa" title="Projetos, pesquisas e extensão">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group glass rounded-xl p-5 hover:border-gold/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="size-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                  <Icon className="size-5 text-gold" />
                </div>
                <p className="text-sm font-medium text-foreground">{p.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ARTIGO DESTAQUE */}
      <Section id="artigos" eyebrow="Publicação" title="Artigo acadêmico em destaque">
        <motion.div {...fadeUp} className="relative glass rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 size-64 rounded-full bg-[#6b1e2b]/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="size-4 text-gold" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold">Publicação USP</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight">
                A Relativização do Princípio da Indisponibilidade de Direitos em Face à{" "}
                <span className="gradient-gold-text italic">Hipersuficiência do Trabalhador</span>
              </h3>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Estudo crítico sobre as transformações contemporâneas no Direito do Trabalho e os
                limites da indisponibilidade frente à autonomia da vontade do trabalhador
                hipersuficiente.
              </p>
            </div>
            <a
              href="/artigo-natalia-laffitte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:scale-[1.02] transition whitespace-nowrap"
            >
              Visualizar publicação
              <ExternalLink className="size-4" />
            </a>
          </div>
        </motion.div>
      </Section>

      {/* FORMAÇÃO */}
      <Section id="formacao" eyebrow="Academia" title="Formação acadêmica">
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:glow-gold hover:border-gold/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-[10px] uppercase tracking-widest text-gold">
                {e.badge}
              </div>
              <div className="size-12 rounded-xl bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center mb-5">
                <GraduationCap className="size-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">{e.school}</h3>
              <p className="text-sm text-gold/90 mt-1">{e.degree}</p>
              <p className="text-sm text-muted-foreground mt-3">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contato" eyebrow="Contato" title="Vamos conversar">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Para consultoria, parcerias ou dúvidas sobre atuação jurídica, entre em contato pelos
              canais abaixo.
            </p>
            {[
              {
                icon: Mail,
                label: "E-mail",
                value: "natalialaffitte@outlook.com",
                href: "mailto:natalialaffitte@outlook.com",
              },
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                value: "+55 71 98839-3619",
                href: whatsappLink,
              },
              { icon: MapPin, label: "Localização", value: "São Paulo — SP" },
              { icon: Linkedin, label: "LinkedIn", value: "Em breve", href: "#" },
            ].map(({ icon: Icon, label, value, href }, i) => {
              const Inner = (
                <div className="glass rounded-xl p-5 flex items-center gap-4 hover:border-gold/40 transition group">
                  <div className="size-11 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="text-sm text-foreground truncate">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={i}>{Inner}</div>
              );
            })}
          </motion.div>

          <motion.form {...fadeUp} onSubmit={submit} className="glass rounded-2xl p-6 lg:p-8 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/60 transition"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/60 transition"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-2 w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/60 transition resize-none"
                placeholder="Como posso ajudar?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c8a96b] to-[#a08550] px-6 py-3.5 text-sm font-medium text-background hover:scale-[1.01] transition"
            >
              Enviar mensagem
              <Send className="size-4" />
            </button>
          </motion.form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative mt-20 border-t border-gold/15 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="gradient-gold-text font-serif">Natália Laffitte</span> © Todos os
            direitos reservados
          </p>
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full glass flex items-center justify-center hover:border-gold/50 hover:text-gold transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href="mailto:natalialaffitte@outlook.com"
              className="size-10 rounded-full glass flex items-center justify-center hover:border-gold/50 hover:text-gold transition"
              aria-label="E-mail"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="#"
              className="size-10 rounded-full glass flex items-center justify-center hover:border-gold/50 hover:text-gold transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
