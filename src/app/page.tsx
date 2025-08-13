"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Smartphone, Monitor, Snowflake, Shield, Sparkles, Building2, Store, Hotel, GraduationCap, Factory } from "lucide-react";
import { motion } from "framer-motion";

// --- DADOS EDITÁVEIS ---------------------------------------------------------
const CATEGORIES = [
  { id: "mobility", label: "Mobilidade (Smartphones & Tablets)", icon: <Smartphone className="w-4 h-4"/> },
  { id: "displays", label: "Monitores & Displays Profissionais", icon: <Monitor className="w-4 h-4"/> },
  { id: "hvac", label: "Climatização (HVAC)", icon: <Snowflake className="w-4 h-4"/> },
  { id: "services", label: "Serviços & Soluções", icon: <Shield className="w-4 h-4"/> },
];

const PRODUCTS = [
  {
    id: "s24-enterprise",
    name: "Galaxy S24 | Enterprise Edition",
    category: "mobility",
    image: "/1.png",
    imageHint: "smartphone galaxy",
    bullets: [
      "Knox Suite inclusa por período promocional",
      "Ciclo estendido de segurança/OS (EE)",
      "DeX para produtividade em desktop",
    ],
    specs: "Processador avançado, 5G, eSIM, UWB, IP68",
  },
  {
    id: "tab-active",
    name: "Galaxy Tab Active Rugged",
    category: "mobility",
    image: "/2.png",
    imageHint: "rugged tablet",
    bullets: [
      "IP68 + MIL-STD-810H",
      "Caneta e bateria substituível",
      "Ideal para campo, logística e indústria",
    ],
    specs: "LTE/5G, NFC, pinos POGO, toque com luvas",
  },
  {
    id: "smart-monitor",
    name: "Smart Monitor + Signage Pro",
    category: "displays",
    image: "/3.png",
    imageHint: "smart monitor",
    bullets: [
      "Pronto para sinalização digital/LOBBY",
      "Gestão remota e agendamento de conteúdo",
      "Opções 43'' a 85''",
    ],
    specs: "4K UHD, brilho alto, moldura fina",
  },
  {
    id: "the-wall",
    name: "The Wall (MicroLED)",
    category: "displays",
    image: "/4.png",
    imageHint: "microled display",
    bullets: [
      "Escalável por módulos",
      "Preto absoluto e altíssimo contraste",
      "Solução premium para auditórios e boardrooms",
    ],
    specs: "MicroLED modular, HDR, calibração avançada",
  },
  {
    id: "windfree-pro",
    name: "WindFree™ Pro Comercial",
    category: "hvac",
    image: "/5.png",
    imageHint: "air conditioner",
    bullets: [
      "Conforto sem vento direto",
      "Eficiência energética para escritórios e lojas",
      "Integração BMS/SmartThings Pro",
    ],
    specs: "Capacidades variadas, filtros, controle Wi‑Fi",
  },
  {
    id: "knox-suite",
    name: "Samsung Knox Suite",
    category: "services",
    image: "/6.png",
    imageHint: "security shield",
    bullets: [
      "MDM, proteção e implantação massiva",
      "Gestão de ciclo de vida dos dispositivos",
      "Compliance e segurança corporativa",
    ],
    specs: "Provisionamento, E-FOTA, Asset tracking",
  },
];

const VERTICALS = [
  { id: "corporate", label: "Corporativo", icon: <Building2 className="w-4 h-4"/> },
  { id: "retail", label: "Varejo", icon: <Store className="w-4 h-4"/> },
  { id: "hospitality", label: "Hotelaria", icon: <Hotel className="w-4 h-4"/> },
  { id: "education", label: "Educação", icon: <GraduationCap className="w-4 h-4"/> },
  { id: "industry", label: "Indústria", icon: <Factory className="w-4 h-4"/> },
];

// --- COMPONENTES -------------------------------------------------------------
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}

function ProductCard({ p }: { p: typeof PRODUCTS[number] }) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="aspect-square w-full relative">
            <Image 
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                data-ai-hint={p.imageHint}
            />
        </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3">
          <span>{p.name}</span>
          <Badge variant="secondary" className="whitespace-nowrap">{p.category}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          {p.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="text-xs text-muted-foreground">{p.specs}</div>
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm">
            <a href="#comprar" className="inline-flex items-center">Como comprar <ChevronRight className="w-4 h-4 ml-1"/></a>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <a href="#contato" className="inline-flex items-center">Solicitar proposta</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// --- PÁGINA ------------------------------------------------------------------
export default function B2BSamsungLanding() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => (cat === "all" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
  }, [q, cat]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="font-semibold tracking-tight">Samsung para Empresas</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#produtos" className="hover:underline">Produtos</a>
            <a href="#solucoes" className="hover:underline">Soluções</a>
            <a href="#verticais" className="hover:underline">Verticais</a>
            <a href="#comprar" className="hover:underline">Como Comprar</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Portfólio Samsung para Empresas
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Dispositivos e soluções profissionais para acelerar a produtividade, com segurança corporativa e suporte especializado.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild>
                <a href="#produtos" className="inline-flex items-center">Ver produtos <ChevronRight className="w-4 h-4 ml-1"/></a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#comprar">Como comprar</a>
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="rounded-2xl aspect-video w-full relative overflow-hidden">
                <Image 
                    src="/hero.png" 
                    alt="Banner de produtos Samsung para empresas" 
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PRODUTOS */}
      <Section id="produtos" title="Produtos" subtitle="Catálogo com foco corporativo e benefícios tangíveis para o negócio.">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            <Button size="sm" variant={cat === "all" ? "default" : "secondary"} onClick={() => setCat("all")}>Todos</Button>
            {CATEGORIES.map(c => (
              <Button key={c.id} size="sm" variant={cat === c.id ? "default" : "secondary"} onClick={() => setCat(c.id)} className="inline-flex items-center gap-2">
                {c.icon}<span>{c.label}</span>
              </Button>
            ))}
          </div>
          <div className="md:ml-auto w-full md:w-80">
            <Input placeholder="Buscar por nome…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
          {filtered.length === 0 && (
            <div className="text-sm text-muted-foreground">Nenhum item encontrado com os filtros atuais.</div>
          )}
        </div>
      </Section>

      {/* SOLUÇÕES */}
      <Section id="solucoes" title="Soluções" subtitle="Segurança, gestão e produtividade em escala.">
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5"/> Samsung Knox Suite</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Implantação, gerenciamento e proteção de dispositivos móveis com controles de compliance e E‑FOTA.</p>
              <Button asChild size="sm"><a href="#comprar">Solicitar proposta</a></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2"><Monitor className="w-5 h-5"/> Sinalização Digital</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Displays profissionais, video walls e gestão remota de conteúdo para lojas, recepções e salas.</p>
              <Button asChild size="sm"><a href="#comprar">Quero saber mais</a></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="flex items-center gap-2"><Snowflake className="w-5 h-5"/> Climatização Comercial</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Eficiência e conforto com WindFree™ e integração a sistemas de automação predial.</p>
              <Button asChild size="sm"><a href="#comprar">Solicitar orçamento</a></Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* VERTICAIS */}
      <Section id="verticais" title="Setores atendidos" subtitle="Aplicações práticas por segmento.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {VERTICALS.map(v => (
            <Card key={v.id} className="rounded-2xl">
              <CardContent className="p-4 flex items-center gap-2">
                {v.icon}
                <span className="text-sm">{v.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* COMO COMPRAR */}
      <Section id="comprar" title="Como comprar" subtitle="Acesse o Portal Samsung Empresas para adquirir produtos ou solicitar proposta.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Portal Samsung Empresas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Cadastre sua empresa e valide CNPJ.</li>
                <li>Navegue pelo catálogo e selecione os itens.</li>
                <li>Utilize os cupons abaixo para descontos progressivos: <strong>CRP3198122</strong>, <strong>CRP3886546</strong>, <strong>CRP5286953</strong>.</li>
                <li>Solicite proposta ou finalize a compra conforme políticas B2B.</li>
              </ul>
              <div className="flex gap-2 pt-2">
                <Button asChild>
                  <a href="https://www.samsung.com/br/business/" target="_blank" rel="noreferrer">Abrir portal</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#contato">Falar com especialista</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6">
            <p className="text-sm opacity-80">Dica rápida</p>
            <h3 className="text-xl font-semibold mt-1">Precisa de proposta formal?</h3>
            <p className="mt-2 text-sm opacity-90">Clique em “Solicitar proposta” nos cards de produtos e descreva quantidades, prazos e condições de pagamento. Nossa equipe retorna com uma cotação personalizada.</p>
          </div>
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contato" title="Fale com um especialista" subtitle="Descreva o seu cenário para receber uma recomendação sob medida.">
        <Card className="rounded-2xl">
          <CardContent className="p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Input placeholder="Nome e empresa" />
              <Input placeholder="E-mail corporativo" />
              <Input placeholder="Telefone/WhatsApp" />
              <Input placeholder="Assunto (ex.: 50 unidades Galaxy S24 EE)" />
              <Button className="w-full">Enviar</Button>
              <p className="text-xs text-muted-foreground">* Este formulário é ilustrativo. Integre com seu backend/CRM.</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-slate-100 to-white p-5 border">
              <h4 className="font-medium">Por que Samsung para Empresas?</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-muted-foreground space-y-1">
                <li>Segurança corporativa com Knox Suite.</li>
                <li>Ecossistema integrado (DeX, SmartThings Pro, Displays).</li>
                <li>Rede de suporte e parceiros autorizados.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted-foreground flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Portfólio Samsung para Empresas</div>
          <div className="flex items-center gap-3">
            <a href="#comprar" className="hover:underline">Como comprar</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
