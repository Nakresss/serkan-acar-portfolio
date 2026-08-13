import type { Lang } from "./i18n";

export interface DetailSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface GalleryItem {
  src: string;
  caption: string;
}

export interface ProjectDetail {
  sections: DetailSection[];
  gallery?: GalleryItem[];
}

/** Project number (as used in content.ts) → URL slug. Shared across languages. */
export const projectSlugs: Record<string, string> = {
  "01": "hava-savunma-sistemi",
  "02": "havacilikta-yapay-zeka",
  "03": "insansiz-su-alti-araci",
  "04": "insansiz-kara-araci",
  "05": "otonom-kule-mekanigi",
  "06": "akilli-tarim-otomasyonu",
  "07": "ucus-simulasyonu-kontrol-paneli",
};

export const slugToNo: Record<string, string> = Object.fromEntries(
  Object.entries(projectSlugs).map(([no, slug]) => [slug, no])
);

const tr: Record<string, ProjectDetail> = {
  "01": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "TEKNOFEST Hava Savunma Sistemleri Yarışması için geliştirilen, hedefleri tespit edip takip eden ve savunma tepkisi üreten sistem. Kamera görüntüsü üzerinden yapılan tespit, dönebilir bir kule mekaniğine aktarılıyor.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Takım kaptanlığı ve yarışma süreçlerinin yürütülmesi",
          "Hedef tespiti ve takibi için yazılım algoritmalarının geliştirilmesi",
          "Operatör tarafındaki kullanıcı arayüzünün tasarlanması",
        ],
      },
      {
        heading: "Teknik yaklaşım",
        bullets: [
          "Sensör verisi ile mekanik kontrol katmanı arasındaki haberleşme yazılımı C/C++ ile yazıldı",
          "Mikrodenetleyici entegrasyonu ile gerçek zamanlı hedef takibi sağlandı",
          "Kamera ve kontrol elektroniği, 3D baskıyla üretilen kule gövdesine yerleştirildi",
        ],
      },
      {
        heading: "Sonuç",
        paragraphs: ["TEKNOFEST 2024 Hava Savunma Sistemleri Yarışması'nda Türkiye 8.'liği."],
      },
    ],
    gallery: [
      { src: "/images/project-teamwork.jpg", caption: "Yarışma alanında sistem üzerinde çalışma" },
      { src: "/images/project-turret-final.jpg", caption: "Tamamlanmış kule ve kamera yerleşimi" },
      { src: "/images/community-group.jpg", caption: "TEKNOFEST etkinlik alanı" },
    ],
  },
  "02": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "TEKNOFEST 2026 Havacılıkta Yapay Zekâ yarışmasına yönelik proje. Havacılık verileri üzerinde yapay zekâ modellerinin uygulanması üzerine çalışıldı.",
        ],
      },
      {
        heading: "Katkı",
        bullets: ["Model geliştirme", "Veri hazırlama ve işleme"],
      },
      {
        heading: "Sonuç",
        paragraphs: ["Yarışmada finale kalan takımlar arasında yer alındı."],
      },
    ],
  },
  "03": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Su altı keşif ve görev operasyonlarına yönelik otonom araç. TEKNOFEST 2026 kapsamında geliştirildi.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Araç yazılımının geliştirilmesi",
          "Sensör entegrasyonu",
          "Kontrol sistemlerinin kurulması",
        ],
      },
    ],
  },
  "04": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Zorlu arazi koşullarında engel tespiti ve rota planlaması yapabilen otonom kara platformu. TEKNOFEST 2026 kapsamında geliştirildi.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Otonom sürüş algoritmalarının geliştirilmesi",
          "Robotik sistem entegrasyonu",
          "Kontrol kartlarının araç donanımıyla birlikte çalışacak şekilde programlanması",
        ],
      },
    ],
    gallery: [
      { src: "/images/hardware-wiring.jpg", caption: "Kontrol elektroniği ve kablolama" },
    ],
  },
  "05": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Kamera ve kontrol elektroniğini barındıran, dönebilir kule gövdesi. Hava savunma sistemi projesinin mekanik tarafını oluşturuyor.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Gövdenin Fusion 360 ile sıfırdan modellenmesi",
          "Baskı parametrelerinin üretime uygun hale getirilmesi",
          "Parçaların montajı ve elektronik yerleşimi",
        ],
      },
      {
        heading: "Üretim",
        paragraphs: [
          "Parçalar Flashforge Adventurer 5M Pro ile üretildi. Gövde, kamera ve kontrol kartlarını koruyacak şekilde tasarlandı.",
        ],
      },
    ],
    gallery: [{ src: "/images/cad-turret.jpg", caption: "Fusion 360 üzerinde kule modeli" }],
  },
  "06": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Tarım sahasındaki sensör verilerinin toplanması ve uzaktan izlenebilir hale getirilmesi üzerine kurulu otomasyon çalışması.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Arduino ve ESP32 tabanlı veri toplama katmanının kurulması",
          "Verilerin n8n iş akışlarına bağlanması",
          "Uzaktan izleme ve bildirim kurgusunun oluşturulması",
        ],
      },
    ],
  },
  "07": {
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Uçuş simülasyonu için sıfırdan tasarlanan fiziksel kontrol paneli. Anahtar ve düğme yerleşimi, kokpit düzeni referans alınarak çizildi.",
        ],
      },
      {
        heading: "Katkı",
        bullets: [
          "Panel yerleşiminin ve etiketlemenin tasarlanması",
          "Anahtar, buton ve gösterge montajı",
          "Kablolama ve bilgisayar tarafındaki bağlantının kurulması",
        ],
      },
    ],
    gallery: [
      { src: "/images/panel-wide.png", caption: "Panelin tamamlanmış hâli" },
      { src: "/images/panel-detail.png", caption: "Anahtar ve etiket detayı" },
    ],
  },
};

const en: Record<string, ProjectDetail> = {
  "01": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "A system built for the TEKNOFEST Air Defence Systems Competition that detects and tracks targets and produces a defence response. Detection from the camera feed is passed to a rotating turret mechanism.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Team captaincy and management of the competition process",
          "Development of software algorithms for target detection and tracking",
          "Design of the operator-side user interface",
        ],
      },
      {
        heading: "Technical approach",
        bullets: [
          "Communication software between the sensor data and mechanical control layer written in C/C++",
          "Real-time target tracking achieved through microcontroller integration",
          "Camera and control electronics housed in a 3D printed turret body",
        ],
      },
      {
        heading: "Result",
        paragraphs: ["8th place in Türkiye at the TEKNOFEST 2024 Air Defence Systems Competition."],
      },
    ],
    gallery: [
      { src: "/images/project-teamwork.jpg", caption: "Working on the system at the competition venue" },
      { src: "/images/project-turret-final.jpg", caption: "Completed turret and camera placement" },
      { src: "/images/community-group.jpg", caption: "TEKNOFEST event area" },
    ],
  },
  "02": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "A project for the TEKNOFEST 2026 Artificial Intelligence in Aviation competition, applying AI models to aviation data.",
        ],
      },
      { heading: "Contribution", bullets: ["Model development", "Data preparation and processing"] },
      { heading: "Result", paragraphs: ["Selected among the finalist teams in the competition."] },
    ],
  },
  "03": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "An autonomous vehicle for underwater exploration and mission operations, developed for TEKNOFEST 2026.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Development of the vehicle software",
          "Sensor integration",
          "Setup of control systems",
        ],
      },
    ],
  },
  "04": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "An autonomous ground platform capable of obstacle detection and route planning in demanding terrain, developed for TEKNOFEST 2026.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Development of autonomous driving algorithms",
          "Robotic system integration",
          "Programming control boards to operate together with the vehicle hardware",
        ],
      },
    ],
    gallery: [{ src: "/images/hardware-wiring.jpg", caption: "Control electronics and wiring" }],
  },
  "05": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "A rotating turret body housing camera and control electronics. It forms the mechanical side of the air defence system project.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Modelling the body from scratch in Fusion 360",
          "Tuning print parameters for production",
          "Assembly of parts and placement of electronics",
        ],
      },
      {
        heading: "Production",
        paragraphs: [
          "Parts were produced on a Flashforge Adventurer 5M Pro. The body was designed to protect the camera and control boards.",
        ],
      },
    ],
    gallery: [{ src: "/images/cad-turret.jpg", caption: "Turret model in Fusion 360" }],
  },
  "06": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "An automation study based on collecting sensor data from an agricultural field and making it remotely observable.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Setup of the Arduino and ESP32 based data collection layer",
          "Connecting the data to n8n workflows",
          "Design of remote monitoring and notification flows",
        ],
      },
    ],
  },
  "07": {
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "A physical control panel designed from scratch for flight simulation. Switch and button placement was drawn with a cockpit layout as reference.",
        ],
      },
      {
        heading: "Contribution",
        bullets: [
          "Design of the panel layout and labelling",
          "Assembly of switches, buttons and indicators",
          "Wiring and the connection on the computer side",
        ],
      },
    ],
    gallery: [
      { src: "/images/panel-wide.png", caption: "The completed panel" },
      { src: "/images/panel-detail.png", caption: "Switch and label detail" },
    ],
  },
};

export function getProjectDetail(lang: Lang, no: string): ProjectDetail | undefined {
  return (lang === "tr" ? tr : en)[no];
}
