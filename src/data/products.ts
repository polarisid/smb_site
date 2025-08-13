import type { Product } from '@/lib/types';

export const seedProducts: Product[] = [
  {
    id: "s24-enterprise",
    name: "Galaxy S24 | Enterprise Edition",
    category: "mobility",
    bullets: [
      "Knox Suite inclusa por período promocional",
      "Ciclo estendido de segurança/OS (EE)",
      "DeX para produtividade em desktop"
    ],
    specs: "Processador avançado, 5G, eSIM, UWB, IP68",
    active: true,
  },
  {
    id: "tab-active",
    name: "Galaxy Tab Active5 | Rugged",
    category: "mobility",
    bullets: [
      "Design robusto com certificação militar",
      "Bateria removível e modo Sem Bateria",
      "Tela sensível ao toque com luvas"
    ],
    specs: "Resistência à água e poeira (IP68), S Pen, 5G",
    active: true,
  },
  {
    id: "smart-monitor",
    name: "Smart Monitor M8",
    category: "displays",
    bullets: [
      "Smart TV Apps e PC-on-screen",
      "Câmera SlimFit magnética inclusa",
      "Hub de IoT para casa conectada"
    ],
    specs: "Tela 4K UHD, HDR10+, AirPlay, USB-C",
    active: true,
  },
  {
    id: "the-wall",
    name: "The Wall - MicroLED Display",
    category: "displays",
    bullets: [
      "Tecnologia MicroLED para pretos perfeitos",
      "Design modular para qualquer tamanho e formato",
      "Processamento de imagem com IA"
    ],
    specs: "Até 8K, 120Hz, Black Seal Technology",
    active: true,
  },
  {
    id: "windfree-pro",
    name: "Ar-Condicionado WindFree™ Pro",
    category: "hvac",
    bullets: [
      "Climatização sem vento direto",
      "Conectividade Wi-Fi com SmartThings",
      "Compressor Digital Inverter para até 77% de economia"
    ],
    specs: "Filtro de ar avançado, Auto Clean, Sleep Mode",
    active: true,
  },
  {
    id: "knox-suite",
    name: "Samsung Knox Suite",
    category: "services",
    bullets: [
      "Gerenciamento de dispositivos (MDM/EMM)",
      "Atualizações de SO e segurança (E-FOTA)",
      "Provisionamento e configuração em massa"
    ],
    specs: "Solução completa para segurança e gerenciamento mobile",
    active: true,
  }
];
