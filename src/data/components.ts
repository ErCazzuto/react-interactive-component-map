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
    color: "linear-gradient(135deg, #fb923c 0%, #ef4444 100%)",
    description:
      "Si tratta del cervello del PC, con prestazioni elevate e larga cache interna",
    specs: [
      { key: "Architettura", value: "Zen 4 + 3D V-Cache" },
      { key: "Cores / Threads", value: "8C / 16T" },
      { key: "Clock di Base", value: "4.2 GHz" },
      { key: "Clock di Boost", value: "5.0 GHz" },
      { key: "Cache L3", value: "96 MB" },
      { key: "TDP", value: "120W" },
      { key: "Socket", value: "AM5" },
      { key: "Memorie supportate", value: "DDR5-6000" },
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
      "The Gigabyte B650 Aorus Elite AX V2 is a feature-rich ATX motherboard for AMD's AM5 platform. It includes WiFi 6E, 2.5G LAN, PCIe 5.0 support, and an extensive VRM design for stable overclocking.",
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
    color: "linear-gradient(135deg, #f87171 0%, #db2777 100%)",
    description:
      "The Gigabyte Radeon RX 7900 XT Gaming OC is a high-end AMD graphics card featuring the Navi 31 GPU with 20GB of GDDR6 memory. It delivers outstanding 4K gaming performance with ray tracing support.",
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
      "The Lexar ARES DDR5 is a high-performance RGB memory kit featuring striking heatspreaders and fast DDR5 speeds. The 32GB kit (2×16GB) ensures smooth multitasking and gaming with full XMP 3.0 support.",
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
    label: "AIO Cooler",
    name: "Arctic Liquid Freezer III 360 Black",
    category: "dissipatore CPU",
    icon: "❄️",
    color: "linear-gradient(135deg, #22d3ee 0%, #0284c7 100%)",
    description:
      "The Arctic Liquid Freezer III 360 is an all-in-one liquid cooler with a 360mm radiator and three 120mm PWM fans. Its high-performance pump and dense fan array keep even the most demanding CPUs cool and quiet.",
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
      "The MSI MPG A850G is a fully modular ATX 3.0 power supply with an 850W output and 80 Plus Gold certification. It includes a native PCIe 5.0 12VHPWR connector for next-gen GPUs, ensuring clean and reliable power delivery.",
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
      "The WD Black SN850X is a PCIe Gen 4 NVMe SSD optimized for gaming. With sequential read speeds up to 7,300 MB/s it virtually eliminates load times and DirectStorage compatible for next-gen game streaming.",
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
    label: "Case Fans",
    name: "Thermalright TL-C12CS RGB",
    category: "ventole",
    icon: "🌀",
    color: "linear-gradient(135deg, #f472b6 0%, #c026d3 100%)",
    description:
      "The Thermalright TL-C12CS RGB fans deliver exceptional airflow and static pressure performance wrapped in a stunning full-addressable RGB lighting ring. This pack of 6 fans ensures your case stays cool with a beautiful light show.",
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
    color: "linear-gradient(135deg, #94a3b8 0%, #52525b 100%)",
    description:
      "The Antec C8 is a premium mid-tower case with a full-mesh front panel and tempered glass side panel. Its spacious interior supports up to 420mm radiators, E-ATX motherboards, and long GPUs while maintaining optimal airflow.",
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
