const parts = {
  cpus: [
    { id: "c2d-e8400-used", name: "Intel Core 2 Duo E8400", brand: "Intel", socket: "LGA775", ramType: "DDR3", priceRub: 300, condition: "б/у", source: "Avito", cores: 2, threads: 2, tdp: 65, gaming: 8, work: 8, value: 45, reliability: 55, igpu: true },
    { id: "i3-4130-used", name: "Intel Core i3-4130", brand: "Intel", socket: "LGA1150", ramType: "DDR3", priceRub: 700, condition: "б/у", source: "Avito", cores: 2, threads: 4, tdp: 54, gaming: 22, work: 20, value: 70, reliability: 72, igpu: true },
    { id: "i5-3470-used", name: "Intel Core i5-3470", brand: "Intel", socket: "LGA1155", ramType: "DDR3", priceRub: 1100, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 77, gaming: 28, work: 26, value: 76, reliability: 70, igpu: true },
    { id: "i5-4590-used", name: "Intel Core i5-4590", brand: "Intel", socket: "LGA1150", ramType: "DDR3", priceRub: 1600, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 84, gaming: 34, work: 31, value: 82, reliability: 74, igpu: true },
    { id: "i5-6500-used", name: "Intel Core i5-6500", brand: "Intel", socket: "LGA1151", ramType: "DDR4", priceRub: 3200, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 42, work: 38, value: 86, reliability: 80, igpu: true },
    { id: "i5-7500-used", name: "Intel Core i5-7500", brand: "Intel", socket: "LGA1151", ramType: "DDR4", priceRub: 4200, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 47, work: 42, value: 84, reliability: 80, igpu: true },
    { id: "i3-8100-used", name: "Intel Core i3-8100", brand: "Intel", socket: "LGA1151v2", ramType: "DDR4", priceRub: 3500, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 46, work: 40, value: 85, reliability: 82, igpu: true },
    { id: "i5-8400-used", name: "Intel Core i5-8400", brand: "Intel", socket: "LGA1151v2", ramType: "DDR4", priceRub: 6200, condition: "б/у", source: "Avito", cores: 6, threads: 6, tdp: 65, gaming: 58, work: 52, value: 86, reliability: 82, igpu: true },
    { id: "athlon-3000g-used", name: "AMD Athlon 3000G", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 2200, condition: "б/у", source: "Avito", cores: 2, threads: 4, tdp: 35, gaming: 24, work: 22, value: 85, reliability: 72 },
    { id: "athlon-200ge-used", name: "AMD Athlon 200GE", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 1700, condition: "б/у", source: "Avito", cores: 2, threads: 4, tdp: 35, gaming: 22, work: 20, value: 84, reliability: 74, igpu: true },
    { id: "r3-2200g-used", name: "AMD Ryzen 3 2200G", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 3800, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 44, work: 36, value: 86, reliability: 78, igpu: true },
    { id: "r5-2400g-used", name: "AMD Ryzen 5 2400G", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 5200, condition: "б/у", source: "Avito", cores: 4, threads: 8, tdp: 65, gaming: 48, work: 45, value: 85, reliability: 78, igpu: true },
    { id: "r3-3200g-used", name: "AMD Ryzen 3 3200G", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 5200, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 50, work: 40, value: 84, reliability: 80, igpu: true },
    { id: "r3-1200-used", name: "AMD Ryzen 3 1200", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 2800, condition: "б/у", source: "Avito", cores: 4, threads: 4, tdp: 65, gaming: 36, work: 30, value: 88, reliability: 76 },
    { id: "r5-1600-used", name: "AMD Ryzen 5 1600 AF", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 4300, condition: "б/у", source: "Avito", cores: 6, threads: 12, tdp: 65, gaming: 48, work: 49, value: 90, reliability: 78 },
    { id: "r5-2600-used", name: "AMD Ryzen 5 2600", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 5200, condition: "б/у", source: "Avito", cores: 6, threads: 12, tdp: 65, gaming: 53, work: 53, value: 91, reliability: 79 },
    { id: "r5-3600-used", name: "AMD Ryzen 5 3600", brand: "AMD", socket: "AM4", ramType: "DDR4", priceRub: 6500, condition: "б/у", source: "Avito", cores: 6, threads: 12, tdp: 65, gaming: 64, work: 61, value: 93, reliability: 82 },
    { id: "i3-10105f-used", name: "Intel Core i3-10105F", brand: "Intel", socket: "LGA1200", ramType: "DDR4", priceRub: 4200, condition: "б/у", source: "Avito", cores: 4, threads: 8, tdp: 65, gaming: 55, work: 45, value: 89, reliability: 82 },
    { id: "i5-10400f-used", name: "Intel Core i5-10400F", brand: "Intel", socket: "LGA1200", ramType: "DDR4", priceRub: 6900, condition: "б/у", source: "Avito", cores: 6, threads: 12, tdp: 65, gaming: 63, work: 58, value: 90, reliability: 84 },
    { id: "i3-12100f-new", name: "Intel Core i3-12100F", brand: "Intel", socket: "LGA1700", ramType: "DDR4", priceRub: 7800, condition: "новое", source: "Ozon", cores: 4, threads: 8, tdp: 58, gaming: 67, work: 54, value: 87, reliability: 88 },
    { id: "r5-5500", name: "AMD Ryzen 5 5500", brand: "AMD", socket: "AM4", ramType: "DDR4", price: 92, cores: 6, threads: 12, tdp: 65, gaming: 62, work: 55, value: 92, reliability: 86 },
    { id: "i5-12400f", name: "Intel Core i5-12400F", brand: "Intel", socket: "LGA1700", ramType: "DDR4", price: 128, cores: 6, threads: 12, tdp: 65, gaming: 70, work: 63, value: 88, reliability: 88 },
    { id: "r5-7600", name: "AMD Ryzen 5 7600", brand: "AMD", socket: "AM5", ramType: "DDR5", price: 189, cores: 6, threads: 12, tdp: 65, gaming: 82, work: 72, value: 86, reliability: 90 },
    { id: "i5-14600kf", name: "Intel Core i5-14600KF", brand: "Intel", socket: "LGA1700", ramType: "DDR5", price: 268, cores: 14, threads: 20, tdp: 125, gaming: 90, work: 88, value: 78, reliability: 84 },
    { id: "r7-7800x3d", name: "AMD Ryzen 7 7800X3D", brand: "AMD", socket: "AM5", ramType: "DDR5", price: 359, cores: 8, threads: 16, tdp: 120, gaming: 98, work: 82, value: 82, reliability: 91 },
    { id: "r9-7900", name: "AMD Ryzen 9 7900", brand: "AMD", socket: "AM5", ramType: "DDR5", price: 365, cores: 12, threads: 24, tdp: 65, gaming: 88, work: 94, value: 83, reliability: 90 }
  ],
  gpus: [
    { id: "integrated", name: "Встроенная графика", brand: "Intel", priceRub: 0, condition: "б/у", source: "в составе CPU", length: 0, power: 0, gaming: 10, work: 18, vram: 0, value: 92, reliability: 88, integrated: true },
    { id: "uhd-630", name: "Intel UHD Graphics 630", brand: "Intel", priceRub: 0, condition: "б/у", source: "в составе CPU", length: 0, power: 0, gaming: 18, work: 24, vram: 0, value: 94, reliability: 88, integrated: true },
    { id: "vega-apu", name: "AMD Vega iGPU", brand: "AMD", priceRub: 0, condition: "б/у", source: "в составе APU", length: 0, power: 0, gaming: 32, work: 28, vram: 0, value: 95, reliability: 86, integrated: true },
    { id: "gt-730-used", name: "Nvidia GeForce GT 730 2GB", brand: "Nvidia", priceRub: 2500, condition: "б/у", source: "Avito", length: 160, power: 38, gaming: 16, work: 16, vram: 2, value: 58, reliability: 75 },
    { id: "gt-1030-used", name: "Nvidia GeForce GT 1030 2GB", brand: "Nvidia", priceRub: 3500, condition: "б/у", source: "Avito", length: 170, power: 30, gaming: 18, work: 18, vram: 2, value: 65, reliability: 78 },
    { id: "rx-550-used", name: "AMD Radeon RX 550 4GB", brand: "AMD", priceRub: 4200, condition: "б/у", source: "Avito", length: 170, power: 50, gaming: 24, work: 22, vram: 4, value: 72, reliability: 76 },
    { id: "gtx-1050ti-used", name: "Nvidia GeForce GTX 1050 Ti 4GB", brand: "Nvidia", priceRub: 6500, condition: "б/у", source: "Avito", length: 210, power: 75, gaming: 38, work: 32, vram: 4, value: 78, reliability: 80 },
    { id: "rx-570-used", name: "AMD Radeon RX 570 4GB", brand: "AMD", priceRub: 7000, condition: "б/у", source: "Avito", length: 245, power: 150, gaming: 45, work: 36, vram: 4, value: 82, reliability: 72 },
    { id: "rx-580-used", name: "AMD Radeon RX 580 8GB", brand: "AMD", priceRub: 8500, condition: "б/у", source: "Avito/Ozon", length: 255, power: 185, gaming: 52, work: 41, vram: 8, value: 88, reliability: 70 },
    { id: "gtx-1060-used", name: "Nvidia GeForce GTX 1060 6GB", brand: "Nvidia", priceRub: 9000, condition: "б/у", source: "Avito", length: 250, power: 120, gaming: 51, work: 43, vram: 6, value: 84, reliability: 80 },
    { id: "gtx-1650-used", name: "Nvidia GeForce GTX 1650 4GB", brand: "Nvidia", priceRub: 10500, condition: "б/у", source: "Avito", length: 220, power: 75, gaming: 49, work: 42, vram: 4, value: 79, reliability: 84 },
    { id: "gtx-1660s-used", name: "Nvidia GeForce GTX 1660 Super 6GB", brand: "Nvidia", priceRub: 14500, condition: "б/у", source: "Avito", length: 245, power: 125, gaming: 62, work: 52, vram: 6, value: 86, reliability: 82 },
    { id: "rtx-2060-used", name: "Nvidia GeForce RTX 2060 6GB", brand: "Nvidia", priceRub: 17500, condition: "б/у", source: "Avito", length: 245, power: 160, gaming: 68, work: 60, vram: 6, value: 84, reliability: 80 },
    { id: "rx-5600xt-used", name: "AMD Radeon RX 5600 XT 6GB", brand: "AMD", priceRub: 15000, condition: "б/у", source: "Avito", length: 280, power: 150, gaming: 66, work: 50, vram: 6, value: 87, reliability: 76 },
    { id: "rx-6600", name: "AMD Radeon RX 6600 8GB", brand: "AMD", price: 205, length: 245, power: 132, gaming: 63, work: 48, vram: 8, value: 91, reliability: 84 },
    { id: "arc-b580", name: "Intel Arc B580 12GB", brand: "Intel", price: 279, length: 272, power: 190, gaming: 76, work: 65, vram: 12, value: 89, reliability: 78 },
    { id: "rtx-4060", name: "Nvidia GeForce RTX 4060 8GB", brand: "Nvidia", price: 299, length: 240, power: 115, gaming: 73, work: 68, vram: 8, value: 80, reliability: 89 },
    { id: "rx-7700xt", name: "AMD Radeon RX 7700 XT 12GB", brand: "AMD", price: 415, length: 280, power: 245, gaming: 86, work: 72, vram: 12, value: 86, reliability: 85 },
    { id: "rtx-4070s", name: "Nvidia GeForce RTX 4070 Super 12GB", brand: "Nvidia", price: 615, length: 305, power: 220, gaming: 94, work: 86, vram: 12, value: 82, reliability: 90 },
    { id: "rtx-4080s", name: "Nvidia GeForce RTX 4080 Super 16GB", brand: "Nvidia", price: 1050, length: 340, power: 320, gaming: 99, work: 95, vram: 16, value: 68, reliability: 88 }
  ],
  motherboards: [
    { id: "g41-used", name: "G41 LGA775 DDR3", socket: "LGA775", ramType: "DDR3", form: "mATX", priceRub: 1000, condition: "б/у", source: "Avito", m2: 0, wifi: false, pcie: 2, value: 45, reliability: 48 },
    { id: "h61-used", name: "H61 LGA1155 DDR3", socket: "LGA1155", ramType: "DDR3", form: "mATX", priceRub: 1700, condition: "б/у", source: "Avito", m2: 0, wifi: false, pcie: 2, value: 70, reliability: 64 },
    { id: "h81-used", name: "H81 LGA1150 DDR3", socket: "LGA1150", ramType: "DDR3", form: "mATX", priceRub: 2200, condition: "б/у", source: "Avito", m2: 0, wifi: false, pcie: 3, value: 76, reliability: 68 },
    { id: "oem-1151-ddr4-used", name: "OEM LGA1151 DDR4 плата", socket: "LGA1151", ramType: "DDR4", form: "mATX", priceRub: 2800, condition: "б/у", source: "Avito", m2: 0, wifi: false, pcie: 3, value: 80, reliability: 72 },
    { id: "h110m-used", name: "H110M LGA1151 DDR4", socket: "LGA1151", ramType: "DDR4", form: "mATX", priceRub: 3500, condition: "б/у", source: "Avito", m2: 1, wifi: false, pcie: 3, value: 82, reliability: 74 },
    { id: "h310m-used", name: "H310M LGA1151v2 DDR4", socket: "LGA1151v2", ramType: "DDR4", form: "mATX", priceRub: 3800, condition: "б/у", source: "Avito", m2: 1, wifi: false, pcie: 3, value: 83, reliability: 76 },
    { id: "a320m-used", name: "A320M AM4 DDR4", socket: "AM4", ramType: "DDR4", form: "mATX", priceRub: 3300, condition: "б/у", source: "Avito", m2: 1, wifi: false, pcie: 3, value: 86, reliability: 74 },
    { id: "b450m-used", name: "B450M AM4 DDR4", socket: "AM4", ramType: "DDR4", form: "mATX", priceRub: 5200, condition: "б/у", source: "Avito", m2: 1, wifi: false, pcie: 3, value: 89, reliability: 80 },
    { id: "h410m-used", name: "H410M LGA1200 DDR4", socket: "LGA1200", ramType: "DDR4", form: "mATX", priceRub: 4300, condition: "б/у", source: "Avito", m2: 1, wifi: false, pcie: 3, value: 84, reliability: 78 },
    { id: "h510m-new", name: "H510M LGA1200 DDR4", socket: "LGA1200", ramType: "DDR4", form: "mATX", priceRub: 6200, condition: "новое", source: "Ozon", m2: 1, wifi: false, pcie: 4, value: 82, reliability: 83 },
    { id: "b550m-wifi", name: "MSI B550M Pro-VDH WiFi", socket: "AM4", ramType: "DDR4", form: "mATX", price: 105, m2: 2, wifi: true, pcie: 4, value: 89, reliability: 86 },
    { id: "b660m-ddr4", name: "ASRock B660M Pro RS DDR4", socket: "LGA1700", ramType: "DDR4", form: "mATX", price: 112, m2: 2, wifi: false, pcie: 4, value: 86, reliability: 84 },
    { id: "b650m-wifi", name: "Gigabyte B650M Gaming X AX", socket: "AM5", ramType: "DDR5", form: "mATX", price: 169, m2: 2, wifi: true, pcie: 4, value: 87, reliability: 88 },
    { id: "z790-ddr5", name: "MSI Z790 Gaming Plus WiFi", socket: "LGA1700", ramType: "DDR5", form: "ATX", price: 219, m2: 4, wifi: true, pcie: 5, value: 76, reliability: 87 },
    { id: "x670e", name: "ASUS TUF X670E-Plus WiFi", socket: "AM5", ramType: "DDR5", form: "ATX", price: 305, m2: 4, wifi: true, pcie: 5, value: 70, reliability: 91 }
  ],
  ram: [
    { id: "4-ddr3-used", name: "4GB DDR3-1600", type: "DDR3", priceRub: 400, condition: "б/у", source: "Avito", capacity: 4, performance: 24, value: 58, reliability: 68 },
    { id: "8-ddr3-used", name: "8GB DDR3-1600", type: "DDR3", priceRub: 900, condition: "б/у", source: "Avito", capacity: 8, performance: 35, value: 78, reliability: 72 },
    { id: "16-ddr3-used", name: "16GB DDR3-1600", type: "DDR3", priceRub: 1800, condition: "б/у", source: "Avito", capacity: 16, performance: 42, value: 84, reliability: 72 },
    { id: "8-ddr4-used", name: "8GB DDR4-2666", type: "DDR4", priceRub: 1200, condition: "б/у", source: "Avito", capacity: 8, performance: 40, value: 80, reliability: 76 },
    { id: "16-ddr4-used", name: "16GB DDR4-2666/3200", type: "DDR4", priceRub: 2500, condition: "б/у", source: "Avito", capacity: 16, performance: 55, value: 90, reliability: 80 },
    { id: "16-ddr4-new", name: "16GB DDR4-3200", type: "DDR4", priceRub: 3200, condition: "новое", source: "Ozon", capacity: 16, performance: 58, value: 88, reliability: 86 },
    { id: "16-ddr4", name: "16GB DDR4-3200 CL16", type: "DDR4", price: 39, capacity: 16, performance: 58, value: 92, reliability: 86 },
    { id: "32-ddr4", name: "32GB DDR4-3600 CL18", type: "DDR4", price: 69, capacity: 32, performance: 70, value: 93, reliability: 87 },
    { id: "32-ddr5", name: "32GB DDR5-6000 CL30", type: "DDR5", price: 118, capacity: 32, performance: 88, value: 88, reliability: 88 },
    { id: "64-ddr5", name: "64GB DDR5-6000 CL32", type: "DDR5", price: 225, capacity: 64, performance: 94, value: 74, reliability: 88 }
  ],
  ssds: [
    { id: "128-sata-used", name: "128GB SATA SSD", priceRub: 900, condition: "б/у", source: "Avito", capacity: 128, speed: 32, value: 62, reliability: 60 },
    { id: "128-sata-new", name: "128GB SATA SSD", priceRub: 1200, condition: "новое", source: "Ozon", capacity: 128, speed: 35, value: 70, reliability: 72 },
    { id: "256-sata-new", name: "256GB SATA SSD", priceRub: 1700, condition: "новое", source: "Ozon", capacity: 256, speed: 42, value: 78, reliability: 78 },
    { id: "512-sata-new", name: "512GB SATA SSD", priceRub: 2600, condition: "новое", source: "Ozon", capacity: 512, speed: 52, value: 84, reliability: 80 },
    { id: "512-nvme-new", name: "512GB NVMe PCIe 3.0", priceRub: 3300, condition: "новое", source: "Ozon", capacity: 512, speed: 62, value: 86, reliability: 82 },
    { id: "1tb-nvme", name: "1TB NVMe PCIe 4.0", price: 69, capacity: 1000, speed: 74, value: 90, reliability: 86 },
    { id: "2tb-nvme", name: "2TB NVMe PCIe 4.0", price: 124, capacity: 2000, speed: 82, value: 89, reliability: 87 },
    { id: "2tb-fast", name: "2TB NVMe PCIe 4.0 Pro", price: 169, capacity: 2000, speed: 94, value: 78, reliability: 90 }
  ],
  psus: [
    { id: "oem-250-used", name: "OEM 250W офисный БП", priceRub: 900, condition: "б/у", source: "Avito", wattage: 250, efficiency: 50, value: 55, reliability: 55 },
    { id: "oem-300-used", name: "OEM 300W офисный БП", priceRub: 1200, condition: "б/у", source: "Avito", wattage: 300, efficiency: 56, value: 62, reliability: 58 },
    { id: "400w-used", name: "400W Bronze", priceRub: 1800, condition: "б/у", source: "Avito", wattage: 400, efficiency: 62, value: 70, reliability: 62 },
    { id: "450w-new", name: "450W Bronze", priceRub: 3300, condition: "новое", source: "Ozon", wattage: 450, efficiency: 66, value: 80, reliability: 72 },
    { id: "500w-new", name: "500W Bronze", priceRub: 4200, condition: "новое", source: "Ozon", wattage: 500, efficiency: 70, value: 82, reliability: 76 },
    { id: "550b", name: "550W Bronze", price: 58, wattage: 550, efficiency: 72, value: 88, reliability: 78 },
    { id: "650g", name: "650W Gold Modular", price: 88, wattage: 650, efficiency: 86, value: 88, reliability: 87 },
    { id: "750g", name: "750W Gold ATX 3.0", price: 116, wattage: 750, efficiency: 90, value: 84, reliability: 90 },
    { id: "850g", name: "850W Gold ATX 3.0", price: 145, wattage: 850, efficiency: 91, value: 80, reliability: 91 }
  ],
  cases: [
    { id: "sff-office-used", name: "Б/у офисный SFF корпус", priceRub: 800, condition: "б/у", source: "Avito", size: "compact", forms: ["mATX"], maxGpu: 170, maxCooler: 75, airflow: 42, noise: 68, looks: 30, value: 70 },
    { id: "oem-office-used", name: "Б/у офисный корпус", priceRub: 1000, condition: "б/у", source: "Avito", size: "compact", forms: ["mATX"], maxGpu: 220, maxCooler: 125, airflow: 46, noise: 64, looks: 32, value: 76 },
    { id: "office-used", name: "Б/у офисный mATX корпус", priceRub: 1500, condition: "б/у", source: "Avito", size: "compact", forms: ["mATX"], maxGpu: 240, maxCooler: 145, airflow: 48, noise: 62, looks: 35, value: 82 },
    { id: "budget-new", name: "Бюджетный mATX корпус", priceRub: 3200, condition: "новое", source: "Ozon", size: "compact", forms: ["mATX"], maxGpu: 285, maxCooler: 155, airflow: 62, noise: 68, looks: 55, value: 84 },
    { id: "mini-air", name: "Compact Airflow mATX", price: 72, size: "compact", forms: ["mATX"], maxGpu: 300, maxCooler: 160, airflow: 82, noise: 82, looks: 76, value: 88 },
    { id: "mesh-mid", name: "Mesh Mid Tower", price: 89, size: "mid", forms: ["mATX", "ATX"], maxGpu: 360, maxCooler: 170, airflow: 90, noise: 78, looks: 80, value: 90 },
    { id: "silent-mid", name: "Silent Mid Tower", price: 119, size: "mid", forms: ["mATX", "ATX"], maxGpu: 345, maxCooler: 175, airflow: 78, noise: 93, looks: 82, value: 80 },
    { id: "glass-rgb", name: "Tempered Glass RGB Case", price: 138, size: "mid", forms: ["mATX", "ATX"], maxGpu: 355, maxCooler: 170, airflow: 82, noise: 74, looks: 94, value: 75 }
  ],
  coolers: [
    { id: "oem-low-used", name: "OEM низкопрофильный кулер", priceRub: 400, condition: "б/у", source: "Avito", height: 55, capacity: 65, noise: 58, value: 64 },
    { id: "intel-box-used", name: "Intel боксовый кулер", priceRub: 500, condition: "б/у", source: "Avito", height: 60, capacity: 85, noise: 62, value: 70 },
    { id: "am4-box-used", name: "AMD Wraith Stealth", priceRub: 700, condition: "б/у", source: "Avito", height: 70, capacity: 95, noise: 66, value: 76 },
    { id: "stock", name: "Боксовое охлаждение", price: 0, height: 70, capacity: 75, noise: 68, value: 98 },
    { id: "simple-tower", name: "Бюджетный башенный кулер", priceRub: 1200, condition: "новое", source: "Ozon", height: 135, capacity: 95, noise: 74, value: 86 },
    { id: "tower120", name: "120mm Tower Cooler", price: 34, height: 155, capacity: 135, noise: 84, value: 92 },
    { id: "dual-tower", name: "Dual Tower Air Cooler", price: 69, height: 165, capacity: 220, noise: 90, value: 86 },
    { id: "aio240", name: "240mm AIO Liquid Cooler", price: 112, height: 55, capacity: 240, noise: 82, value: 73 }
  ]
};

const labels = {
  cpu: "CPU",
  gpu: "GPU",
  motherboard: "Материнская плата",
  ram: "RAM",
  ssd: "SSD",
  psu: "Блок питания",
  case: "Корпус",
  cooler: "Охлаждение"
};

const taskWeights = {
  gaming: { gpu: 0.54, cpu: 0.24, ram: 0.08, ssd: 0.04, platform: 0.1 },
  workstation: { gpu: 0.24, cpu: 0.34, ram: 0.2, ssd: 0.1, platform: 0.12 },
  editing: { gpu: 0.22, cpu: 0.32, ram: 0.18, ssd: 0.16, platform: 0.12 },
  streaming: { gpu: 0.38, cpu: 0.3, ram: 0.12, ssd: 0.06, platform: 0.14 },
  office: { gpu: 0.08, cpu: 0.25, ram: 0.18, ssd: 0.15, platform: 0.34 },
  balanced: { gpu: 0.34, cpu: 0.28, ram: 0.13, ssd: 0.1, platform: 0.15 }
};

const state = {
  priority: "fps",
  lastBuild: null,
  chatStarted: false,
  budgetOverride: null
};

const $ = (id) => document.getElementById(id);

function getInputs() {
  return {
    task: $("task").value,
    budget: state.budgetOverride || Number($("budget").value),
    conditionPref: $("conditionPref").value,
    priority: state.priority,
    cpuBrand: $("cpuBrand").value,
    gpuBrand: $("gpuBrand").value,
    caseSize: $("caseSize").value
  };
}

function setPriority(value) {
  state.priority = value;
  document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item.dataset.value === value));
}

function price(part) {
  return Math.round(part.priceRub ?? part.price * 100);
}

function conditionOf(part) {
  return part.condition || "новое";
}

function sourceOf(part) {
  return part.source || "ориентир рынка";
}

function conditionMatches(part, inputs) {
  if (inputs.conditionPref === "new") return conditionOf(part) === "новое";
  if (inputs.conditionPref === "used") return conditionOf(part) === "б/у";
  return true;
}

function formatPrice(value) {
  return `${Math.round(value).toLocaleString("ru-RU")} ₽`;
}

function adjustedBudget(inputs) {
  return Math.max(12000, inputs.budget);
}

function estimatePower(build) {
  return build.cpu.tdp + build.gpu.power + 75;
}

function isCompatible(build, inputs) {
  const issues = [];
  if (build.cpu.socket !== build.motherboard.socket) issues.push("Сокет CPU не совпадает с материнской платой.");
  if (build.cpu.ramType !== build.motherboard.ramType) issues.push("Тип памяти CPU/платы не совпадает.");
  if (build.ram.type !== build.motherboard.ramType) issues.push("RAM не подходит к материнской плате.");
  if (build.gpu.integrated && !build.cpu.igpu) issues.push("У выбранного процессора нет встроенной графики.");
  if (build.gpu.id === "uhd-630" && build.cpu.brand !== "Intel") issues.push("Intel UHD подходит только к Intel CPU со встроенной графикой.");
  if (build.gpu.id === "vega-apu" && build.cpu.brand !== "AMD") issues.push("AMD Vega iGPU подходит только к AMD APU.");
  if (!build.case.forms.includes(build.motherboard.form)) issues.push("Форм-фактор платы не помещается в корпус.");
  if (build.gpu.length > build.case.maxGpu) issues.push("Видеокарта слишком длинная для корпуса.");
  if (build.cooler.height > build.case.maxCooler) issues.push("Кулер слишком высокий для корпуса.");
  if (build.cooler.capacity < build.cpu.tdp * 1.15) issues.push("Кулер слабоват для тепловыделения CPU.");
  if (build.psu.wattage < estimatePower(build) * 1.35) issues.push("У блока питания недостаточный запас мощности.");
  if (/NVMe/i.test(build.ssd.name) && build.motherboard.m2 < 1) issues.push("Нет M.2 слота под NVMe SSD.");
  return issues;
}

function totalPrice(build, inputs) {
  return Object.values(build).reduce((sum, part) => sum + price(part), 0);
}

function cpuMetric(cpu, task) {
  if (["workstation", "editing"].includes(task)) return cpu.work;
  if (task === "office") return (cpu.value + cpu.reliability + cpu.work * 0.45) / 2.45;
  return cpu.gaming;
}

function gpuMetric(gpu, task) {
  if (["workstation", "editing"].includes(task)) return gpu.work;
  if (task === "office") return gpu.value * 0.75;
  return gpu.gaming;
}

function scoreBuild(build, inputs) {
  const weights = taskWeights[inputs.task];
  const power = estimatePower(build);
  const headroom = Math.min(100, (build.psu.wattage / (power * 1.35)) * 86);
  const cpuScore = cpuMetric(build.cpu, inputs.task);
  const gpuScore = gpuMetric(build.gpu, inputs.task);
  const ramScore = build.ram.performance + Math.min(12, Math.max(0, build.ram.capacity - 16) * 0.45);
  const ssdScore = build.ssd.speed + (build.ssd.capacity >= 2000 ? 8 : 0);
  const platformScore = (build.motherboard.value + build.psu.reliability + build.case.airflow + build.cooler.noise + headroom) / 5;
  const performance =
    gpuScore * weights.gpu +
    cpuScore * weights.cpu +
    ramScore * weights.ram +
    ssdScore * weights.ssd +
    platformScore * weights.platform;
  const priceScore = Math.max(0, 100 - Math.max(0, totalPrice(build, inputs) - adjustedBudget(inputs)) / 800);
  const cpuGpuGap = Math.abs(cpuScore - gpuScore);
  const balance = Math.max(45, 100 - cpuGpuGap * 1.25);
  const value = (build.cpu.value + build.gpu.value + build.ram.value + build.ssd.value + build.psu.value + build.case.value) / 6;
  const upgrade = (build.motherboard.pcie >= 5 ? 8 : 0) + (build.motherboard.m2 * 8) + (build.psu.wattage >= 750 ? 26 : 16) + (build.cpu.socket === "AM5" ? 30 : 16);
  const noise = (build.case.noise + build.cooler.noise + (build.gpu.power < 230 ? 88 : 76) + (build.cpu.tdp < 90 ? 88 : 76)) / 4;
  const priorityBonus = {
    fps: performance,
    quiet: noise,
    upgrade,
    compact: build.case.size === "compact" ? 92 : 70,
    looks: build.case.looks
  }[inputs.priority];
  const penalties = isCompatible(build, inputs).length * 80 + Math.max(0, totalPrice(build, inputs) - adjustedBudget(inputs)) * 0.005;

  return {
    total: performance * 0.38 + balance * 0.18 + value * 0.16 + priceScore * 0.14 + priorityBonus * 0.14 - penalties,
    balance: Math.round(balance),
    gaming: Math.round((gpuScore * 0.65 + cpuScore * 0.35 + balance * 0.15) / 1.15),
    workstation: Math.round((cpuScore * 0.36 + gpuScore * 0.25 + ramScore * 0.24 + ssdScore * 0.15)),
    upgrade: Math.round(Math.min(100, upgrade)),
    noise: Math.round(noise),
    value: Math.round(value)
  };
}

function chooseCandidates(items, predicate) {
  return items.filter(predicate);
}

function shortlist(items, inputs, metric, limit) {
  const target = adjustedBudget(inputs);
  const cheapCount = Math.min(3, limit);
  const ranked = [...items]
    .sort((a, b) => {
      const scoreA = metric(a) + (a.value || 75) * 0.35 + (a.reliability || 78) * 0.12 - (price(a) / target) * 45;
      const scoreB = metric(b) + (b.value || 75) * 0.35 + (b.reliability || 78) * 0.12 - (price(b) / target) * 45;
      return scoreB - scoreA;
    })
    .slice(0, Math.max(1, limit - cheapCount));
  const cheapest = [...items].sort((a, b) => price(a) - price(b)).slice(0, cheapCount);
  return [...new Map([...ranked, ...cheapest].map((item) => [item.id, item])).values()];
}

function generateBuilds(inputs) {
  const cpuPool = shortlist(
    chooseCandidates(parts.cpus, (cpu) => conditionMatches(cpu, inputs) && (inputs.cpuBrand === "any" || cpu.brand === inputs.cpuBrand)),
    inputs,
    (cpu) => cpuMetric(cpu, inputs.task),
    12
  );
  const gpuPool = shortlist(
    chooseCandidates(parts.gpus, (gpu) => conditionMatches(gpu, inputs) && (inputs.gpuBrand === "any" || gpu.brand === inputs.gpuBrand)),
    inputs,
    (gpu) => gpuMetric(gpu, inputs.task),
    10
  );
  const casePool = shortlist(
    chooseCandidates(parts.cases, (pcCase) => conditionMatches(pcCase, inputs) && (inputs.caseSize === "any" || pcCase.size === inputs.caseSize)),
    inputs,
    (pcCase) => pcCase.airflow + pcCase.noise * 0.45,
    4
  );
  const boardPool = parts.motherboards.filter((board) => conditionMatches(board, inputs));
  const ramPool = shortlist(parts.ram.filter((ram) => conditionMatches(ram, inputs)), inputs, (ram) => ram.performance + ram.capacity * 0.35, 4);
  const ssdPool = shortlist(parts.ssds.filter((ssd) => conditionMatches(ssd, inputs)), inputs, (ssd) => ssd.speed + ssd.capacity / 180, 3);
  const coolerPool = shortlist(parts.coolers.filter((cooler) => conditionMatches(cooler, inputs)), inputs, (cooler) => cooler.capacity * 0.4 + cooler.noise, 3);
  const target = adjustedBudget(inputs);
  const builds = [];

  for (const cpu of cpuPool) {
    for (const gpu of gpuPool) {
      for (const motherboard of boardPool.filter((board) => board.socket === cpu.socket && board.ramType === cpu.ramType)) {
        for (const ram of ramPool.filter((item) => item.type === motherboard.ramType)) {
          for (const ssd of ssdPool) {
            for (const pcCase of casePool.filter((item) => item.forms.includes(motherboard.form))) {
              for (const cooler of coolerPool) {
                const partial = { cpu, gpu, motherboard, ram, ssd, case: pcCase, cooler };
                const minWattage = cpu.tdp + gpu.power + 75;
                const psuPool = shortlist(parts.psus.filter((item) => conditionMatches(item, inputs) && item.wattage >= minWattage * 1.35), inputs, (psu) => psu.efficiency + psu.wattage / 20, 3);
                for (const psu of psuPool) {
                  const build = { ...partial, psu };
                  const buildPrice = totalPrice(build, inputs);
                  if (buildPrice > target * 1.06) continue;
                  if (inputs.task === "office" && inputs.budget >= 15000 && buildPrice < target * 0.62) continue;
                  if (inputs.task !== "office" && inputs.budget > 30000 && buildPrice < target * 0.68) continue;
                  const issues = isCompatible(build, inputs);
                  if (issues.length) continue;
                  const score = scoreBuild(build, inputs);
                  builds.push({ build, issues, score, price: buildPrice });
                }
              }
            }
          }
        }
      }
    }
  }

  return builds.sort((a, b) => b.score.total - a.score.total);
}

function pickBuild(inputs) {
  const builds = generateBuilds(inputs);
  if (builds.length) return builds[0];
  const relaxed = { ...inputs, caseSize: "any", cpuBrand: "any", gpuBrand: "any" };
  return generateBuilds(relaxed)[0];
}

function explain(selection, inputs) {
  const { build, score, price: buildPrice } = selection;
  const target = adjustedBudget(inputs);
  const taskText = {
    gaming: "игр",
    workstation: "работы, 3D и тяжёлых задач",
    editing: "монтажа и обработки видео",
    streaming: "стриминга и игр одновременно",
    office: "офиса, учёбы и повседневной работы",
    balanced: "универсального сценария"
  }[inputs.task];
  const resolution = score.gaming >= 92 ? "4K или 1440p с высоким FPS" : score.gaming >= 80 ? "1440p gaming" : score.gaming >= 68 ? "1080p/1440p на разумных настройках" : "1080p";
  const budgetPhrase = buildPrice <= target ? "вписывается в бюджет" : "слегка выходит за целевой бюджет";
  const bottleneck = Math.abs(cpuMetric(build.cpu, inputs.task) - gpuMetric(build.gpu, inputs.task)) < 13
    ? "CPU и GPU хорошо подобраны друг к другу"
    : cpuMetric(build.cpu, inputs.task) < gpuMetric(build.gpu, inputs.task)
      ? "в некоторых задачах процессор может ограничивать видеокарту"
      : "запас процессора выше, чем запас видеокарты";

  return `Эта сборка ${budgetPhrase} и лучше всего подходит для ${taskText}. Для игр ориентир: ${resolution}. ${bottleneck}. Блок питания имеет запас под пиковую нагрузку, а платформа ${build.cpu.socket} оставляет понятный путь апгрейда.`;
}

function alternatives(selection, inputs) {
  const all = generateBuilds(inputs).slice(1, 30);
  const current = selection.build;
  const gpuAlt = all.find((item) => item.build.gpu.id !== current.gpu.id && Math.abs(item.price - selection.price) < 13000);
  const quietAlt = all.find((item) => item.score.noise > selection.score.noise + 4);
  const valueAlt = all.find((item) => item.score.value > selection.score.value + 3);
  const result = [];
  if (gpuAlt) result.push(`Больше FPS: ${gpuAlt.build.gpu.name}, цена около ${formatPrice(gpuAlt.price)}.`);
  if (quietAlt) result.push(`Тише: ${quietAlt.build.case.name} + ${quietAlt.build.cooler.name}, noise score ${quietAlt.score.noise}/100.`);
  if (valueAlt) result.push(`Лучше цена/производительность: ${valueAlt.build.cpu.name} и ${valueAlt.build.gpu.name}.`);
  if (!result.length) result.push("В выбранном бюджете текущая сборка уже близка к оптимальной.");
  return result;
}

function upgradePath(build) {
  const platform = build.cpu.socket === "AM5"
    ? "AM5 даёт лучший запас для будущих Ryzen."
    : build.cpu.socket === "LGA1700"
      ? "LGA1700 позволит поставить более мощный Intel того же поколения, но долгий апгрейд ограничен."
      : "AM4 дешевый, но апгрейд-путь уже ближе к финальному.";
  const psu = build.psu.wattage >= 750
    ? "БП выдержит апгрейд видеокарты классом выше."
    : "Для очень мощной видеокарты позже лучше заменить БП.";
  const ram = build.ram.capacity >= 32
    ? "Оперативной памяти достаточно для игр и большинства рабочих задач."
    : "Первый простой апгрейд: перейти на 32GB RAM.";
  return `${platform} ${psu} ${ram}`;
}

function renderBuild(selection, inputs) {
  const { build, score, price: buildPrice, issues } = selection;
  state.lastBuild = selection;
  $("buildName").textContent = `${build.cpu.name} + ${build.gpu.name}`;
  $("totalPrice").textContent = formatPrice(buildPrice);
  $("balanceScore").textContent = score.balance;
  $("explanation").textContent = explain(selection, inputs);
  $("upgradePath").textContent = upgradePath(build);

  const scores = [
    ["Gaming balance", score.gaming],
    ["Workstation", score.workstation],
    ["Upgrade", score.upgrade],
    ["Noise", score.noise],
    ["Value", score.value]
  ];
  $("scoreBars").innerHTML = scores.map(([name, value]) => `
    <div class="bar-row">
      <span>${name}</span>
      <div class="bar"><span style="--value: ${value}%"></span></div>
      <strong>${value}</strong>
    </div>
  `).join("");

  const rows = [
    ["cpu", build.cpu, `${build.cpu.cores}C/${build.cpu.threads}T, ${build.cpu.socket}`],
    ["gpu", build.gpu, `${build.gpu.vram}GB VRAM, ${build.gpu.power}W`],
    ["motherboard", build.motherboard, `${build.motherboard.socket}, ${build.motherboard.ramType}, ${build.motherboard.form}`],
    ["ram", build.ram, `${build.ram.capacity}GB, ${build.ram.type}`],
    ["ssd", build.ssd, `${build.ssd.capacity / 1000}TB NVMe`],
    ["psu", build.psu, `${build.psu.wattage}W`],
    ["case", build.case, `${build.case.size}, GPU до ${build.case.maxGpu}мм`],
    ["cooler", build.cooler, `до ${build.cooler.capacity}W TDP`]
  ];
  $("partsTable").innerHTML = rows.map(([type, part, meta]) => `
    <div class="part-row">
      <div class="part-type">${labels[type]}</div>
      <div>
        <div class="part-name">${part.name}</div>
        <div class="part-meta">${meta} · ${conditionOf(part)}, ${sourceOf(part)}</div>
      </div>
      <div class="part-meta">Value ${Math.round(part.value || part.reliability || part.performance || 80)}</div>
      <strong>${formatPrice(price(part))}</strong>
    </div>
  `).join("");

  const okItems = [
    `CPU ${build.cpu.socket} совместим с платой ${build.motherboard.socket}.`,
    `${build.ram.type} RAM подходит к материнской плате.`,
    `GPU ${build.gpu.length}мм помещается в корпус до ${build.case.maxGpu}мм.`,
    `БП ${build.psu.wattage}W при оценочной нагрузке ${estimatePower(build)}W.`
  ];
  $("compatibilityList").innerHTML = (issues.length ? issues : okItems).map((item) => `<li>${item}</li>`).join("");
  $("alternativesList").innerHTML = alternatives(selection, inputs).map((item) => `<li>${item}</li>`).join("");
}

function renderCompare() {
  const best = [
    ...parts.cpus.map((item) => ({ type: "CPU", item, metric: item.gaming + item.work + item.value })),
    ...parts.gpus.map((item) => ({ type: "GPU", item, metric: item.gaming + item.work + item.value })),
    ...parts.motherboards.map((item) => ({ type: "Плата", item, metric: item.value + item.reliability + item.m2 * 6 })),
    ...parts.cases.map((item) => ({ type: "Корпус", item, metric: item.airflow + item.noise + item.value }))
  ].sort((a, b) => b.metric - a.metric).slice(0, 12);

  $("compareGrid").innerHTML = best.map(({ type, item }) => `
    <article class="compare-card">
      <strong>${type}: ${item.name}</strong>
      <span>${formatPrice(price(item))} · ${conditionOf(item)}, ${sourceOf(item)} · Value ${Math.round(item.value || 80)} · Reliability ${Math.round(item.reliability || item.noise || 82)}</span>
    </article>
  `).join("");
}

function runConfigurator() {
  const inputs = getInputs();
  const selection = pickBuild(inputs);
  if (!selection) {
    $("explanation").textContent = "Не удалось собрать конфигурацию в выбранном бюджете. Попробуйте снять ограничения брендов или увеличить бюджет.";
    return;
  }
  renderBuild(selection, inputs);
  return selection;
}

function addMessage(role, text) {
  const feed = $("chatFeed");
  if (!feed) return;
  const item = document.createElement("div");
  item.className = `message ${role}`;
  item.textContent = text;
  feed.appendChild(item);
  feed.scrollTop = feed.scrollHeight;
}

function parseMoney(text) {
  const budgetMatch = text.match(/(?:до|бюджет|за|на)\s*(\d+)\s*(к|k|тыс|000|руб|₽)?/i);
  const currencyMatch = text.match(/(\d+)\s*(к|k|тыс|000|руб|₽)/i);
  const match = budgetMatch || currencyMatch;
  if (!match) return null;
  let value = Number(match[1]);
  const suffix = match[2] || "";
  if (value < 1000 || /к|k|тыс/i.test(suffix)) value *= 1000;
  return value;
}

function setTaskFromText(text) {
  if (/игр|fps|1440|1080|4k|гейм/i.test(text)) $("task").value = "gaming";
  if (/монтаж|видео|davinci|premiere/i.test(text)) $("task").value = "editing";
  if (/3d|рендер|blender|работ/i.test(text)) $("task").value = "workstation";
  if (/стрим/i.test(text)) $("task").value = "streaming";
  if (/офис|учеб|браузер|документ/i.test(text)) $("task").value = "office";
  if (/универс/i.test(text)) $("task").value = "balanced";
}

function setBrandsFromText(text) {
  if (/nvidia|нвид/i.test(text)) $("gpuBrand").value = "Nvidia";
  if (/radeon|амд gpu|amd gpu|видеокарт[ау].*amd/i.test(text)) $("gpuBrand").value = "AMD";
  if (/intel gpu|arc/i.test(text)) $("gpuBrand").value = "Intel";
  if (/ryzen|амд cpu|amd cpu|процессор.*amd/i.test(text)) $("cpuBrand").value = "AMD";
  if (/core i|intel cpu|процессор.*intel/i.test(text)) $("cpuBrand").value = "Intel";
  if (/любой бренд|без разницы|неважно/i.test(text)) {
    $("cpuBrand").value = "any";
    $("gpuBrand").value = "any";
  }
}

function setPreferencesFromText(text) {
  if (/тише|тихий|шум/i.test(text)) setPriority("quiet");
  if (/fps|производ|мощн/i.test(text)) setPriority("fps");
  if (/апгрейд|обнов/i.test(text)) setPriority("upgrade");
  if (/компакт|маленьк|mini|мини/i.test(text)) {
    setPriority("compact");
    $("caseSize").value = "compact";
  }
  if (/красив|внешн|вид/i.test(text)) {
    setPriority("looks");
  }
  if (/только нов|без б\/у|без бу/i.test(text)) $("conditionPref").value = "new";
  if (/можно б\/у|можно бу|б\/у| бу |подерж/i.test(` ${text} `)) $("conditionPref").value = "used";
}

function cheaperBuildFromCurrent(amount) {
  const currentPrice = state.lastBuild?.price || getInputs().budget;
  const reduction = amount || Math.max(7000, Math.round(currentPrice * 0.12));
  state.budgetOverride = Math.max(12000, currentPrice - reduction);
}

function replaceComponentFromText(text) {
  const current = state.lastBuild;
  if (!current) return "";
  const baseInputs = getInputs();
  const builds = generateBuilds(baseInputs);
  const wantsGpu = /видеокарт|gpu/i.test(text);
  const wantsCpu = /процессор|cpu/i.test(text);
  const wantsCase = /корпус/i.test(text);
  const wantsPsu = /блок|питани|psu/i.test(text);
  const wantsRam = /ram|памят|оператив/i.test(text);
  const wantsSsd = /ssd|накоп/i.test(text);
  const candidates = builds.filter((item) => {
    if (wantsGpu) return item.build.gpu.id !== current.build.gpu.id;
    if (wantsCpu) return item.build.cpu.id !== current.build.cpu.id;
    if (wantsCase) return item.build.case.id !== current.build.case.id;
    if (wantsPsu) return item.build.psu.id !== current.build.psu.id;
    if (wantsRam) return item.build.ram.id !== current.build.ram.id;
    if (wantsSsd) return item.build.ssd.id !== current.build.ssd.id;
    return false;
  });
  if (!candidates.length) return "";
  const next = candidates[0];
  renderBuild(next, baseInputs);
  const partName =
    wantsGpu ? next.build.gpu.name :
    wantsCpu ? next.build.cpu.name :
    wantsCase ? next.build.case.name :
    wantsPsu ? next.build.psu.name :
    wantsRam ? next.build.ram.name :
    next.build.ssd.name;
  return `Заменил компонент на ${partName}. Новая цена: ${formatPrice(next.price)}, баланс ${next.score.balance}/100.`;
}

function handleChat(text) {
  const clean = text.trim();
  if (!clean) return;
  addMessage("user", clean);

  const lower = clean.toLowerCase();
  const money = parseMoney(lower);
  let responseLead = "Пересобрал конфигурацию.";

  if (/дешев|сэконом|подешевле|уреж/i.test(lower)) {
    cheaperBuildFromCurrent(money);
    responseLead = `Сделал дешевле, новый ориентир бюджета: ${formatPrice(state.budgetOverride)}.`;
  } else if (money && /до|бюджет|руб|₽|к|тыс/i.test(lower)) {
    state.budgetOverride = money;
    responseLead = `Понял бюджет: ${formatPrice(money)}.`;
  }

  setTaskFromText(lower);
  setBrandsFromText(lower);
  setPreferencesFromText(lower);
  if (/только нов|без б\/у|без бу/i.test(lower)) responseLead = "Переключил подбор на новые детали.";
  if (/можно б\/у|можно бу|б\/у| бу |подерж/i.test(` ${lower} `)) responseLead = "Переключил подбор на б/у детали.";

  if (/замени|поменяй|друг/i.test(lower)) {
    const replacement = replaceComponentFromText(lower);
    if (replacement) {
      addMessage("bot", replacement);
      return;
    }
  }

  const selection = runConfigurator();
  if (!selection) {
    addMessage("bot", "Не нашёл сборку под эти ограничения. Попробуй увеличить бюджет или разрешить любой бренд.");
    return;
  }
  addMessage(
    "bot",
    `${responseLead} Сейчас лучший вариант: ${selection.build.cpu.name} + ${selection.build.gpu.name}, ${formatPrice(selection.price)}, баланс ${selection.score.balance}/100. В таблице отмечены б/у и новые позиции. ${explain(selection, getInputs())}`
  );
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    setPriority(button.dataset.value);
    runConfigurator();
  });
});

document.querySelectorAll(".controls select, .controls input").forEach((control) => {
  control.addEventListener("change", () => {
    if (control.id === "budget") state.budgetOverride = null;
    runConfigurator();
  });
});

$("buildButton").addEventListener("click", runConfigurator);
$("showPresets").addEventListener("click", () => {
  $("budget").value = "80000";
  $("task").value = "gaming";
  state.budgetOverride = null;
  setPriority("fps");
  runConfigurator();
  document.querySelector("#configurator").scrollIntoView({ behavior: "smooth" });
});
$("compareMode").addEventListener("click", () => document.querySelector("#compare").scrollIntoView({ behavior: "smooth" }));

$("chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("chatMessage");
  handleChat(input.value);
  input.value = "";
});

document.querySelectorAll(".quick-prompts button").forEach((button) => {
  button.addEventListener("click", () => handleChat(button.dataset.prompt));
});

renderCompare();
const initialSelection = runConfigurator();
if (initialSelection) {
  addMessage("bot", `Привет. Можешь написать обычным текстом: "ПК для игр до 90000", "сделай дешевле", "замени видеокарту на Nvidia", "хочу тише" или "нужен монтаж". Я буду сразу пересобирать конфиг.`);
}
