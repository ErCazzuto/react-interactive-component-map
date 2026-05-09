export interface PCComponent {
  id: string;
  label: string;
  name: string;
  category: string;
  specs: { key: string; value: string }[];
  description: string;
  icon: string;
  color: string;
  // position as % of image width/height
  x: number;
  y: number;
  w: number;
  h: number;
}

export const components: PCComponent[] = [
  {
    id: "cpu",
    label: "CPU",
    name: "AMD Ryzen 7 7800X3D",
    category: "Processore",
    icon: "🧠",
    color: "linear-gradient(135deg, #ff7300 0%, #ef4444 100%)",
    description:
     `Si tratta del cervello del PC, senza di lui... sarebbe tutto un soprammobile.
      Il Ryzen 7 7800x3d è una vera e propria bestia di processore, prestazioni elevate, larga cache che vanta la tecnologia 3D V-Cache, cioè una cache L3 aggiuntiva impilata verticalmente per ottenere prestazioni eccellenti.
      Oltretutto, in paragone con la controparte Intel è più efficiente in termini energetici e termici`,  
      specs: [
      { key: "Architettura", value: "Zen 4 + 3D V-Cache" },
      { key: "Cores / Threads", value: "8C / 16T" },
      { key: "Clock di Base", value: "4.2 GHz" },
      { key: "Clock di Boost", value: "5.0 GHz" },
      { key: "Cache L3", value: "96 MB" },
      { key: "TDP", value: "120W" },
      { key: "Socket", value: "AM5" },
      { key: "Memorie supportate", value: "DDR5-6000 MT/s" },
    ],
    x: 23,
    y: 8,
    w: 8,
    h: 15,
  },
  {
    id: "motherboard",
    label: "Scheda madre",
    name: "Gigabyte B650 Aorus Elite AX V2",
    category: "Scheda madre",
    icon: "🖥️",
    color: "linear-gradient(135deg, #60a5fa 0%, #590ee4 100%)",
    description:
      `La scheda madre è la base alla quale tutto il resto si connette, proprio per questo viene chiamato così, gli altri componenti si chiamerebbero "schede figlie".
       Questa in particolare offre una solidissima base per processori AMD, supporti per memorie veloci, connettività di buon livello e un sistema di dissipazione robusto. `, 
    specs: [
      { key: "Socket", value: "AM5" },
      { key: "Formato", value: "ATX" },
      { key: "Chipset", value: "AMD B650" },
      { key: "Alloggiamenti memorie", value: "4x DDR5" },
      { key: "Massima RAM", value: "192 GB" },
      { key: "PCIe", value: "1x PCIe 4.0 x16" },
      { key: "Storage", value: "3x M.2 + 4x SATA" },
      { key: "Connessione", value: "WiFi 6E + 2.5G LAN" },
    ],
    x: 21,
    y: 24,
    w: 15,
    h: 38,
  },
  {
    id: "gpu",
    label: "GPU",
    name: "Gigabyte Radeon RX 7900 XT Gaming OC",
    category: "Scheda grafica",
    icon: "🎮",
    color: "linear-gradient(135deg, #ff0000 0%, #850000 100%)",
    description:
      `Il componente senza il quale il monitor resterebbe nero, è il cuore pulsante di ogni PC di fascia alta, soprattutto in ambito gaming.
       La RX 7900 XT è una scheda grafica di fascia alta con una larga memoria VRAM, un'ampia larghezza di banda e un boost clock fino a 2500 MHz, offre prestazioni eccezionali a risoluzioni elevate.
       Offre un eccellente supporto per le ultime tecnologie come DirectX 12 Ultimate e ray tracing.`,
    specs: [
      { key: "chip", value: "Navi 31 (RDNA 3)" },
      { key: "VRAM", value: "20 GB GDDR6" },
      { key: "larghezza di banda", value: "320-bit" },
      { key: "clock di boost", value: "2500 MHz" },
      { key: "TFLOPS", value: "51.6 TF" },
      { key: "TDP", value: "315W" },
      { key: "porte Output", value: "HDMI 2.1 + 3x DP 2.1" },
      { key: "PCIe", value: "PCIe 4.0 x16" },
    ],
    x: 16,
    y: 70,
    w: 20,
    h: 23.5,
  },
  {
    id: "ram",
    label: "RAM",
    name: "Lexar ARES DDR5 32GB",
    category: "Random Access Memory",
    icon: "💾",
    color: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    description:
      `La RAM è la memoria a breve termine del PC, ci vengono caricati tutti i dati dei programmi in esecuzone, la quantità di programmi che si possono tenere aperti, la fluidità del sistema e la velocità dei caricamenti sono proporzionali alla quantità e alla frequenza della RAM.
       Le Lexar Ares offrono lo "sweet spot": 32 GB di capacità, 6000 MT/s di frequenza, latenza CL30 e il supporto ad alcune tecnologie come EXPO che le rende eccellenti per sistemi basati su CPU AMD.`,
    specs: [
      { key: "tipo", value: "DDR5" },
      { key: "capacità", value: "32 GB (2×16 GB)" },
      { key: "velocità", value: "6000 MT/s" },
      { key: "Latenza", value: "CL30" },
      { key: "voltaggio", value: "1.35V" },
      { key: "Profilo", value: "XMP 3.0 / EXPO" },
    ],
    x: 35.5,
    y: 15,
    w: 10,
    h: 22,
  },
  {
    id: "aio",
    label: "Dissipatore AIO",
    name: "Arctic Liquid Freezer III 360 Black",
    category: "dissipatore CPU",
    icon: "❄️",
    color: "linear-gradient(135deg, #22d3ee 0%, #0284c7 100%)",
    description:
      `Per quanto il Ryzen 7 7800x3D sia tranquillissimo in termini di temperature e consumi, a differenza dei fornetti di Intel, ho comunque optato per un dissipatore che reggesse il livello della build e che tenesse a bada perennemente la CPU
       Questo AIO raffredda in modo eccellente grazie a 3 ventole da 120mm montate sul suo radiatore a liquido da 360x120 mm, con uno spessore di 38 mm che mi ha reso le cose difficili in fase di assemblaggio, ma questo lo lascio per dopo.`,
    specs: [
      { key: "Grandezza", value: "360 mm" },
      { key: "ventole", value: "3× 120mm PWM" },
      { key: "velocità ventole", value: "200–1900 RPM" },
      { key: "Socket", value: "AM5 / LGA1700" },
    ],
    x: 49,
    y: 8.5,
    w: 22,
    h: 27.5,
  },
  {
    id: "psu",
    label: "PSU",
    name: "MSI MPG A850G PCIe5 80+ Gold",
    category: "Unità di alimentazione",
    icon: "⚡",
    color: "linear-gradient(135deg, #facc15 0%, #d97706 100%)",
    description:
    `Non è molto condivisa questa idea, ma per me questo componente è quasi importante quanto la CPU, senza di questo il PC non si accende nemmeno in quanto fornisce l'energia a tutto il sistema, e deve garantirne una certa quantità minima con stabilità.
     Gli alimentatori possono avere diverse certificazioni, ho optato per una fascia alta, cioè la 80 Plus Gold, perchè alla fine dei giochi, se salta la PSU, il PC le viene dietro, e preferirei evitarlo.
     Oltretutto offre Protezione da Sovracorrente (OCP) e Transient Voltage Suppressors (TVS), un designi completamente modulare che mi ha aiutato in assemblaggio, ma anche questo, lo lascio per dopo.`,  
    specs: [
      { key: "wattaggio", value: "850 W" },
      { key: "classe di efficienza", value: "80 Plus Gold" },
      { key: "modulo", value: "Full" },
      { key: "Standard", value: "ATX 3.0" },
    ],
    x: 69,
    y: 25.5,
    w: 16,
    h: 22,
  },
  {
    id: "ssd",
    label: "SSD",
    name: "WD Black SN850X NVMe SSD",
    category: "memoria interna",
    icon: "💿",
    color: "linear-gradient(135deg, #4ade80 0%, #059669 100%)",
    description:
    `L'SSD è la memoria a lungo termine del PC, ci si intalla tutto: il sistema operativo, gli applicativi, i giochi, i file... tutto. 
     Ho optato per questo modello date le prestazioni elevate grazie all'interfaccia PCIe Gen 4 che mi aiuta a ridurre i tempi di molti processi stando dietro al processore.
     Oltretutto è dotato di 1 TB di spazio, più che sufficiente per il mio utilizzo.`,
    specs: [
      { key: "interfaccia", value: "PCIe Gen 4 NVMe" },
      { key: "capienza", value: "1 TB" },
      { key: "velocità di lettura", value: "7,300 MB/s" },
      { key: "velocità di scrittura", value: "6,600 MB/s" },
      { key: "Form Factor", value: "M.2 2280" },
    ],
    x: 15.5,
    y: 61,
    w: 9,
    h: 9,
  },
  {
    id: "fans",
    label: "Ventole",
    name: "Thermalright TL-C12CS RGB",
    category: "ventole",
    icon: "🌀",
    color: "linear-gradient(135deg, #f472b6 0%, #c026d3 100%)",
    description:
      `Sono fondamentali per non soffocare il PC nel suo stesso calore, permettono di far circolare l'aria fresca all'interno del case e di eliminare quella calda generata dai componenti.
       La thermalright è considerata spesso la salvezza dei PC assembler: offre prestazioni elevata ella metà del prezzo dei competitors, motivo per il quale la scielta è stata semplice.`,
      specs: [
      { key: "formato", value: "120 mm" },
      { key: "numero", value: "7×" },
      { key: "velocità", value: "500–1550 RPM" },
    ],
    x: 80.5,
    y: 46.5,
    w: 15,
    h: 42,
  },
  {
    id: "case",
    label: "Case",
    name: "Antec C8",
    category: "case",
    icon: "🖥️",
    color: "linear-gradient(135deg, #9dff41 0%, #7dfa43 100%)",
    description:
      `Sono molto belli tutti i componenti, ma in aria non si può fissare nulla, quindi serve un alloggiamento che riesca a contenerli e garantirne il flusso d'aria necessario proteggendoli dalla polvere con filtri: il Case.
       Questo modello in particolare mi ha permesso di incastrare tutto con "facilità", offre molto spazio utile all'assemblaggio, alla gestione dei cavi e al flussio d'aria.
       Mi ha colpito per il design sobrio, ma tamarro nei suoi pannelli in vetro temperato che mi permettonjo di vedere gli organi della bestia.`,
      specs: [
      { key: "formato", value: "Full tower" },
      { key: "materiale", value: "acciaio + vetro temperato" },
      { key: "schede madri supportate", value: "E-ATX / ATX / mATX" },
      { key: "I/O frontali", value: "USB 3.0 × 2 + USB-C" },
      { key: "dimensioni", value: "495×215×480 mm" },
    ],
    x: 40.75,
    y: 35,
    w: 25.5,
    h: 45,
  },
];
