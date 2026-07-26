import type { Lang } from "./language-context";

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
  type: "education" | "experience" | "leadership";
}

export interface ProjectItem {
  title: string;
  year: string;
  tags: string[];
  description: string;
  image: string;
}

export interface GithubProjectItem {
  title: string;
  description: string;
  url: string;
  language: string;
}

export interface AchievementItem {
  title: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const socials = {
  github: "https://github.com/Nakresss",
  linkedin: "https://www.linkedin.com/in/serkan-a-972b63244/",
  email: "acar.serkan@outlook.com.tr",
  phone: "+90 543 537 19 63",
  location: "Ümraniye, İstanbul",
};

const contentTr = {
  nav: {
    about: "Hakkımda",
    skills: "Yetkinlikler",
    timeline: "Deneyim",
    projects: "Projeler",
    code: "Yazılım",
    achievements: "Başarılar",
    contact: "İletişim",
    cv: "CV İndir",
  },
  hero: {
    kicker: "Yazılım & Sistem Geliştirici · Maker",
    name: "Serkan Acar",
    tagline:
      "Dijital algoritmaları fiziksel mekaniklerle birleştiren, “Milli Teknoloji” vizyonuna odaklı çözüm üreticisi.",
    quote:
      "“Masa başında yazılan dijital algoritmaları, sahada tıkır tıkır çalışan fiziksel mekaniklerle birleştiriyorum.”",
    ctaPrimary: "Projelerimi Keşfet",
    ctaSecondary: "İletişime Geç",
    scroll: "Aşağı kaydır",
  },
  about: {
    heading: "Hakkımda",
    kicker: "Sistem Mimarisi ve Hibrit Altyapı",
    paragraphs: [
      "Ben Serkan Acar. Dijital dünyadaki algoritmaları, fiziksel dünyadaki mekaniklerle birleştiren bir sistem geliştiriciyim.",
      "Yönetim Bilişim Sistemleri (%100 İngilizce) lisansım bana karmaşık yazılım mimarileri ve iş süreçleri kurma yeteneği verirken; Gemi Makineleri İşletme geçmişim, donanımların ve mekanik sistemlerin dilinden anlamamı sağlıyor. Masa başında yazılım geliştirmekle kalmıyor, sahaya iniyorum.",
      "Rusya'da (Rostov, Azov, Yeysk) ticari gemilerde, açık denizlerin kısıtlı ve zorlu şartlarında çalışarak kriz anlarında soğukkanlılıkla problem çözme disiplini kazandım. Kuzey Makedonya'da geçirdiğim eğitim hayatım sayesinde Makedonca konuşabiliyorum; Taekwondo branşındaki Berlin Open şampiyonluğumla uluslararası vizyonumu erken yaşta genişlettim.",
      "Bugün tüm bu teknik donanımımı, sahadaki kriz yönetimi tecrübemi ve uluslararası vizyonumu, “Milli Teknoloji Hamlesi” hedefleri doğrultusunda yerli ve milli sistemler üretmek için kullanıyorum.",
    ],
    stackHeading: "Kullandığım Teknolojiler",
    stack: [
      "C / C++",
      "Python",
      "SQL",
      "TensorFlow / PyTorch",
      "OpenCV",
      "Raspberry Pi / ESP32 / Arduino",
      "Fusion 360",
      "n8n / Glide",
      "Django / Flask",
      "Git / CI/CD",
    ],
  },
  skills: {
    heading: "Yetkinlikler",
    kicker: "Uçtan Uca Çözüm Yetkinliği",
    categories: [
      {
        title: "Programlama",
        items: ["Python", "C", "C++", "OOP", "SQL", "Deluge", "VBA"],
      },
      {
        title: "Yapay Zeka & Veri Bilimi",
        items: [
          "Makine Öğrenmesi",
          "Derin Öğrenme",
          "Görüntü İşleme",
          "NLP",
          "Büyük Veri Analitiği",
          "Veri Madenciliği",
        ],
      },
      {
        title: "Kütüphaneler & Framework'ler",
        items: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "Scikit-Learn", "Flask", "Django"],
      },
      {
        title: "Sistem & Gömülü Yazılım",
        items: [
          "Gömülü Sistemler",
          "Arduino",
          "Raspberry Pi 5",
          "ESP32",
          "Deneyap Kart",
          "Endüstriyel Otomasyon",
        ],
      },
      {
        title: "Tasarım & Üretim",
        items: ["Fusion 360", "3D Modelleme", "Flashforge Adventurer 5M Pro", "Prototipleme"],
      },
      {
        title: "Araçlar & Metodolojiler",
        items: ["Git / GitHub", "CI/CD", "Google Cloud", "MATLAB / Simulink", "Agile & Scrum", "n8n", "Glide"],
      },
    ] as SkillCategory[],
  },
  timelineHeading: "Deneyim & Eğitim",
  timelineKicker: "Kronolojik Yolculuk",
  timeline: [
    {
      period: "2019 – 2021",
      title: "Gemi Makineleri İşletme",
      place: "Ordu Üniversitesi",
      description:
        "Gemi motorları ve mekanik sistemlerin işletilmesi, periyodik bakımı, gemi güvenliği ve çevre koruma standartları odaklı teknik eğitim.",
      type: "education",
    },
    {
      period: "09.2021 – Halen",
      title: "Yazılım & Sistem Geliştirici",
      place: "Freelancer",
      description:
        "Python, n8n ve Glide kullanarak özel yazılımlar ve otomasyon senaryoları geliştiriyorum. Fusion 360 ile 3D mekanik tasarımlar yapıyor, dijital ile fizikselin entegre çalıştığı uçtan uca çözümler sunuyorum.",
      type: "experience",
    },
    {
      period: "12.2021 – 06.2022",
      title: "Asistan Öğrenci",
      place: "İstanbul Nişantaşı Üniversitesi",
      description:
        "ERP süreçleri kapsamında süreç analizi ve teknik dokümantasyon; \"Nish Spor Sitesi\" projesinde front-end ve back-end geliştirme.",
      type: "experience",
    },
    {
      period: "2021 – 2026",
      title: "Yönetim Bilişim Sistemleri (%100 İngilizce)",
      place: "İstanbul Nişantaşı Üniversitesi",
      description:
        "Sistem tasarımı, yazılım geliştirme, veritabanı yönetimi ve iş analizi; iş zekâsı, veri analizi, karar destek sistemleri, bulut bilişim ve mobil uygulama odaklı eğitim.",
      type: "education",
    },
    {
      period: "12.2022 – 06.2023",
      title: "Stajyer",
      place: "Yıldız Holding (Bizim Toptan)",
      description:
        "Kurumsal sistemlerde ürün implementasyonu ve uçtan uca entegrasyon; eBA İş Akış Yönetimi ve Former süreç yönetimi çalışmaları.",
      type: "experience",
    },
    {
      period: "08.2023 – 11.2023",
      title: "ManageEngine Developer",
      place: "Palcon Bilişim Sistemleri",
      description:
        "Deluge ve Python scriptleriyle ITSM sistemlerinde arayüz ve back-end geliştirme; kurumsal iş akışı otomasyonları ve sistem entegrasyonu.",
      type: "experience",
    },
    {
      period: "2024",
      title: "TEKNOFEST Hava Savunma Sistemleri — Türkiye 8.'liği",
      place: "T3 Vakfı",
      description:
        "Tehdit analizi ve otonom savunma tepkisi veren yerli sistem tasarımında takım kaptanlığı; Türkiye genelinde ilk 10'a girme başarısı.",
      type: "leadership",
    },
    {
      period: "11.2024 – 12.2024",
      title: "Görüntü İşleme ve Yapay Zeka Uzmanı",
      place: "Daz-Tech Innovation & Technology",
      description:
        "Savunma sanayisine yönelik akıllı analiz sistemleri; nesne tespiti, hedef takibi, anomali analizi ve karar destek sistemlerinde ML/DL tabanlı çözümler.",
      type: "experience",
    },
    {
      period: "03.2026 – 07.2026",
      title: "IMU Stajyeri",
      place: "TRC Marine Electronic",
      description:
        "Denizcilik elektroniği süreçlerinde Servis Pozitif Sistem yönetimi ve saha entegrasyonu; mikrodenetleyici tabanlı gömülü sistem yazılımı geliştirme.",
      type: "experience",
    },
    {
      period: "2026",
      title: "Savunma Sanayi İçin İnsansız Su Altı Aracı & İnsansız Kara Aracı",
      place: "TEKNOFEST",
      description:
        "Otonom hareket kabiliyetine sahip su altı ve kara platformlarında yazılım geliştirme, sensör entegrasyonu ve kontrol sistemleri.",
      type: "leadership",
    },
  ] as TimelineItem[],
  leadershipHeading: "Liderlik & Kulüp Deneyimi",
  leadership: [
    {
      title: "Yazılım ve Bilişim Kulübü — Kurucu Başkan",
      description: "+1000 üye yönetimi ve +50 teknik projenin koordinasyonu.",
    },
    {
      title: "Teknofest Kulübü — Başkan Yardımcısı",
      description: "Yarışma takımlarının kurulması, rapor takibi ve etkinlik yönetimi.",
    },
  ],
  projectsHeading: "Öne Çıkan Projeler",
  projectsKicker: "Donanım × Yazılım × Otonomi",
  projects: [
    {
      title: "TEKNOFEST Hava Savunma Sistemi",
      year: "2024",
      tags: ["C/C++", "Gömülü Sistem", "Bilgisayarlı Görü"],
      description:
        "Tehdit analizi ve otonom savunma tepkisi veren yerli sistem. Sensör ve mekanik haberleşme için C/C++ tabanlı algoritmalar geliştirdim; mikrodenetleyici entegrasyonuyla gerçek zamanlı hedef takibi sağladım. Bu projeyle Türkiye 8.'si oldum.",
      image: "/images/project-teamwork.jpg",
    },
    {
      title: "Otonom Hedef Takip Kulesi — CAD & Prototip",
      year: "2024 – 2026",
      tags: ["Fusion 360", "3D Baskı", "Raspberry Pi"],
      description:
        "Fusion 360'ta sıfırdan modellenen, kamera ve kontrol elektroniğini barındıran dönebilir kule gövdesi. Flashforge Adventurer 5M Pro ile üretime hazır, ısı dengesi optimize edilmiş parçalar basıldı.",
      image: "/images/cad-turret.jpg",
    },
    {
      title: "İnsansız Su Altı & Kara Aracı",
      year: "2026",
      tags: ["Raspberry Pi", "Otonom Navigasyon", "Sensör Füzyonu"],
      description:
        "Zorlu arazi ve su altı koşullarında rota planlaması yapabilen, engel tespit edebilen otonom platformlar. Robotik donanım ve kontrol kartları C/C++ algoritmalarıyla eşzamanlı çalışacak şekilde programlandı.",
      image: "/images/hardware-wiring.jpg",
    },
    {
      title: "Akıllı Tarım Sistemleri — \"Akıllı Tosunlar\"",
      year: "2025",
      tags: ["Arduino", "ESP32", "IoT", "n8n"],
      description:
        "Sahadaki sensör verilerinin toplanması için Arduino/ESP32 tabanlı mimari; veriler n8n üzerinden otomatik iş akışlarına bağlanarak uzaktan izlenebilir ve kontrol edilebilir hale getirildi.",
      image: "/images/project-turret-final.jpg",
    },
    {
      title: "Flight-Sim Kontrol Paneli",
      year: "Kişisel Proje",
      tags: ["Elektronik", "Maker", "Panel Tasarımı"],
      description:
        "Uçuş simülasyonu için sıfırdan tasarlanmış, anahtar ve düğmelerle donatılmış fiziksel kontrol paneli — donanım/yazılım entegrasyonu tutkusunun kişisel bir yansıması.",
      image: "/images/panel-wide.png",
    },
  ] as ProjectItem[],
  githubHeading: "Yazılım & Yapay Zeka Projelerim",
  githubKicker: "github.com/Nakresss",
  githubIntro:
    "Sahadaki donanım projelerinin yanında, GitHub'da makine öğrenmesi ve bilgisayarlı görü odaklı yazılım projeleri geliştiriyorum.",
  github: [
    {
      title: "BoneScan-AI",
      description:
        "Röntgen görüntülerinde kemik kanseri belirtilerini otomatik tespit ederek erken teşhise destek olan yapay zeka destekli görüntü işleme sistemi.",
      url: "https://github.com/Nakresss/BoneScan-AI",
      language: "Python",
    },
    {
      title: "BoardScanner",
      description:
        "Derin öğrenme ve görüntü işleme teknikleriyle devre kartları (PCB) üzerindeki elektronik bileşenleri otomatik tanıyan sistem.",
      url: "https://github.com/Nakresss/BoardScanner",
      language: "Python",
    },
    {
      title: "Reinforcement-Learner",
      description:
        "CartPole-v1 ortamını pekiştirmeli öğrenme ile çözen bir Deep Q-Network (DQN) ajanı implementasyonu.",
      url: "https://github.com/Nakresss/Reinforcement-Learner",
      language: "Python",
    },
    {
      title: "Baloon-Detection",
      description: "Görüntü işleme ve nesne tespiti tekniklerine odaklanan bir tespit projesi.",
      url: "https://github.com/Nakresss/Baloon-Detection",
      language: "Python",
    },
    {
      title: "Google-Colab-TPU-Usage",
      description: "Google Colab üzerinde TPU kullanımına odaklanan, model eğitim verimliliğini artıran bir çalışma.",
      url: "https://github.com/Nakresss/Google-Colab-TPU-Usage",
      language: "Python",
    },
  ] as GithubProjectItem[],
  achievementsHeading: "Başarılar & Ödüller",
  achievementsKicker: "Sahada ve Ringde Kazanılan Dereceler",
  achievements: [
    {
      title: "TEKNOFEST Hava Savunma Sistemleri Yarışması — Türkiye 8.'liği",
      year: "2024",
      description: "Havacılık, Uzay ve Teknoloji Festivali kapsamında geliştirilen proje ile Türkiye genelinde ilk 10'a girme başarısı.",
    },
    {
      title: "Berlin Open Taekwondo Championship — Altın Madalya",
      year: "2015",
      description: "Avrupa sahnesinde şampiyonluk; uluslararası turnuva tecrübesi ve yüksek odaklanma disiplini.",
    },
    {
      title: "Savate (Fransız Boksu) Türkiye Şampiyonası — Türkiye 3.'lüğü",
      year: "2015",
      description: "Disiplinli çalışmanın ve rekabetçi ortamda soğukkanlılığın somut bir göstergesi.",
    },
  ] as AchievementItem[],
  internationalHeading: "Sahadaki Kriz Disiplini ve Küresel Vizyon",
  internationalKicker: "Gerçek Hayatın Kaosu İçinde Çalışan Sistemler",
  internationalBlocks: [
    {
      title: "Ağır Mekanik ve Kriz Yönetimi",
      subtitle: "Gemi Makineleri Altyapısı",
      description:
        "Rusya hattındaki ticari gemilerde, açık denizlerin kısıtlı ve izole şartlarında ağır mekanik sistemlerin işletimi ve anlık arıza müdahalesi. Laboratuvar konforunda değil, gerçek hayatın kaotik ortamlarında bile sorunsuz çalışan sistemler inşa etme refleksi kazandırdı.",
      image: "/images/maritime-bridge.jpg",
    },
    {
      title: "Yüksek Odak ve Uluslararası Temsil",
      subtitle: "Berlin Open Şampiyonluğu",
      description:
        "Taekwondo branşında Berlin Open Altın Madalyası ve Avrupa sahnesinde uluslararası turnuva tecrübesi. TEKNOFEST gibi yüksek stresli arenalarda takım süreçlerini soğukkanlılıkla yönetebilme yeteneğinin temelini oluşturdu.",
      image: "/images/taekwondo-celebration.jpg",
    },
  ],
  contact: {
    heading: "İletişim",
    kicker: "Geleceğin Sistemlerini Birlikte İnşa Edelim",
    intro:
      "Sahadaki tecrübelerimi, teknik altyapımı ve projelerime kattığım değeri detaylandırmak üzere sizinle görüşmeyi sabırsızlıkla bekliyorum.",
    formName: "Ad Soyad",
    formEmail: "E-posta",
    formMessage: "Mesajınız",
    formSend: "Mesaj Gönder",
    formSending: "Yönlendiriliyor...",
    formNote: "Mesajın varsayılan e-posta uygulamanız üzerinden gönderilir.",
    downloadCv: "CV İndir (PDF)",
    directTitle: "Doğrudan İletişim",
  },
  footer: {
    tagline: "Milli Teknoloji vizyonuyla, dijital ve fiziksel dünyayı birleştiren sistemler inşa ediyorum.",
    rights: "Tüm hakları saklıdır.",
    backToTop: "Yukarı Çık",
  },
};

export type Content = typeof contentTr;

const contentEn: Content = {
  nav: {
    about: "About",
    skills: "Skills",
    timeline: "Experience",
    projects: "Projects",
    code: "Software",
    achievements: "Achievements",
    contact: "Contact",
    cv: "Download CV",
  },
  hero: {
    kicker: "Software & Systems Developer · Maker",
    name: "Serkan Acar",
    tagline:
      "A solution builder merging digital algorithms with physical mechanics, focused on the “National Technology” vision.",
    quote:
      "“I merge digital algorithms written at a desk with physical mechanics that run flawlessly out in the field.”",
    ctaPrimary: "Explore My Projects",
    ctaSecondary: "Get in Touch",
    scroll: "Scroll down",
  },
  about: {
    heading: "About Me",
    kicker: "System Architecture & Hybrid Infrastructure",
    paragraphs: [
      "I'm Serkan Acar, a systems developer who merges algorithms from the digital world with mechanics from the physical one.",
      "My degree in Management Information Systems (100% English) gave me the ability to build complex software architectures and business processes; my background in Marine Engineering Operations taught me to speak the language of hardware and mechanical systems. I don't just write software at a desk — I go out into the field.",
      "Working on commercial ships along the Russian coast (Rostov, Azov, Yeysk), in the confined and demanding conditions of open seas, I gained the discipline to solve problems calmly under crisis. My time studying in North Macedonia gave me fluency in Macedonian, and my Berlin Open Taekwondo championship broadened my international outlook early on.",
      "Today I channel all of this technical background, field crisis-management experience, and international perspective into building indigenous, national systems in line with the “National Technology Initiative”.",
    ],
    stackHeading: "Technologies I Use",
    stack: [
      "C / C++",
      "Python",
      "SQL",
      "TensorFlow / PyTorch",
      "OpenCV",
      "Raspberry Pi / ESP32 / Arduino",
      "Fusion 360",
      "n8n / Glide",
      "Django / Flask",
      "Git / CI/CD",
    ],
  },
  skills: {
    heading: "Skills",
    kicker: "End-to-End Solution Capability",
    categories: [
      {
        title: "Programming",
        items: ["Python", "C", "C++", "OOP", "SQL", "Deluge", "VBA"],
      },
      {
        title: "AI & Data Science",
        items: [
          "Machine Learning",
          "Deep Learning",
          "Image Processing",
          "NLP",
          "Big Data Analytics",
          "Data Mining",
        ],
      },
      {
        title: "Libraries & Frameworks",
        items: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "Scikit-Learn", "Flask", "Django"],
      },
      {
        title: "Systems & Embedded Software",
        items: [
          "Embedded Systems",
          "Arduino",
          "Raspberry Pi 5",
          "ESP32",
          "Deneyap Kart",
          "Industrial Automation",
        ],
      },
      {
        title: "Design & Manufacturing",
        items: ["Fusion 360", "3D Modeling", "Flashforge Adventurer 5M Pro", "Prototyping"],
      },
      {
        title: "Tools & Methodologies",
        items: ["Git / GitHub", "CI/CD", "Google Cloud", "MATLAB / Simulink", "Agile & Scrum", "n8n", "Glide"],
      },
    ] as SkillCategory[],
  },
  timelineHeading: "Experience & Education",
  timelineKicker: "A Chronological Journey",
  timeline: [
    {
      period: "2019 – 2021",
      title: "Marine Engineering Operations",
      place: "Ordu University",
      description:
        "Technical training focused on operating ship engines and mechanical systems, periodic maintenance, ship safety and environmental protection standards.",
      type: "education",
    },
    {
      period: "09.2021 – Present",
      title: "Software & Systems Developer",
      place: "Freelancer",
      description:
        "Building custom software and automation scenarios with Python, n8n and Glide. Designing 3D mechanical parts in Fusion 360 and delivering end-to-end solutions where digital and physical work as one.",
      type: "experience",
    },
    {
      period: "12.2021 – 06.2022",
      title: "Assistant Student",
      place: "Istanbul Nişantaşı University",
      description:
        "Process analysis and technical documentation for ERP processes; active front-end and back-end development on the \"Nish Spor Sitesi\" project.",
      type: "experience",
    },
    {
      period: "2021 – 2026",
      title: "Management Information Systems (100% English)",
      place: "Istanbul Nişantaşı University",
      description:
        "Education focused on system design, software development, database management and business analysis; business intelligence, data analytics, decision support systems, cloud computing and mobile applications.",
      type: "education",
    },
    {
      period: "12.2022 – 06.2023",
      title: "Intern",
      place: "Yıldız Holding (Bizim Toptan)",
      description:
        "Product implementation and end-to-end integration on corporate systems; eBA workflow management and Former process management work.",
      type: "experience",
    },
    {
      period: "08.2023 – 11.2023",
      title: "ManageEngine Developer",
      place: "Palcon Information Systems",
      description:
        "Front-end and back-end development on ITSM systems using Deluge and Python scripts; designing enterprise workflow automations and system integrations.",
      type: "experience",
    },
    {
      period: "2024",
      title: "TEKNOFEST Air Defense Systems — 8th in Turkey",
      place: "T3 Foundation",
      description:
        "Team captain for an indigenous system providing threat analysis and autonomous defense response; finished in the top 10 nationwide.",
      type: "leadership",
    },
    {
      period: "11.2024 – 12.2024",
      title: "Image Processing & AI Specialist",
      place: "Daz-Tech Innovation & Technology",
      description:
        "Intelligent analysis systems for the defense industry; ML/DL-based solutions for object detection, target tracking, anomaly analysis and decision support.",
      type: "experience",
    },
    {
      period: "03.2026 – 07.2026",
      title: "IMU Intern",
      place: "TRC Marine Electronic",
      description:
        "Service Positive System management and field integration in maritime electronics; active development of microcontroller-based embedded systems.",
      type: "experience",
    },
    {
      period: "2026",
      title: "Unmanned Underwater Vehicle & Unmanned Ground Vehicle",
      place: "TEKNOFEST",
      description:
        "Software development, sensor integration and control systems for autonomous underwater and ground platforms.",
      type: "leadership",
    },
  ] as TimelineItem[],
  leadershipHeading: "Leadership & Club Experience",
  leadership: [
    {
      title: "Software & IT Club — Founding President",
      description: "Managed 1000+ members and coordinated 50+ technical projects.",
    },
    {
      title: "Teknofest Club — Vice President",
      description: "Set up competition teams, tracked reports and managed events.",
    },
  ],
  projectsHeading: "Featured Projects",
  projectsKicker: "Hardware × Software × Autonomy",
  projects: [
    {
      title: "TEKNOFEST Air Defense System",
      year: "2024",
      tags: ["C/C++", "Embedded Systems", "Computer Vision"],
      description:
        "An indigenous system providing threat analysis and autonomous defense response. I built C/C++ based algorithms for sensor and mechanical communication and delivered real-time target tracking through microcontroller integration — finishing 8th in Turkey.",
      image: "/images/project-teamwork.jpg",
    },
    {
      title: "Autonomous Target-Tracking Turret — CAD & Prototype",
      year: "2024 – 2026",
      tags: ["Fusion 360", "3D Printing", "Raspberry Pi"],
      description:
        "A rotating turret housing camera and control electronics, modeled from scratch in Fusion 360 and 3D printed on a Flashforge Adventurer 5M Pro with optimized thermal settings for production-ready parts.",
      image: "/images/cad-turret.jpg",
    },
    {
      title: "Unmanned Underwater & Ground Vehicle",
      year: "2026",
      tags: ["Raspberry Pi", "Autonomous Navigation", "Sensor Fusion"],
      description:
        "Autonomous platforms capable of route planning and obstacle detection in demanding terrain and underwater conditions. Robotic hardware and control boards were programmed to work in sync with custom C/C++ algorithms.",
      image: "/images/hardware-wiring.jpg",
    },
    {
      title: "Smart Agriculture Systems — \"Akıllı Tosunlar\"",
      year: "2025",
      tags: ["Arduino", "ESP32", "IoT", "n8n"],
      description:
        "An Arduino/ESP32-based architecture for collecting field sensor data, connected to automated workflows via n8n for remote monitoring and control.",
      image: "/images/project-turret-final.jpg",
    },
    {
      title: "Flight-Sim Control Panel",
      year: "Personal Project",
      tags: ["Electronics", "Maker", "Panel Design"],
      description:
        "A physical control panel built from scratch for flight simulation, fitted with switches and buttons — a personal reflection of the passion for hardware/software integration.",
      image: "/images/panel-wide.png",
    },
  ] as ProjectItem[],
  githubHeading: "Software & AI Projects",
  githubKicker: "github.com/Nakresss",
  githubIntro:
    "Alongside field hardware projects, I build machine learning and computer vision-focused software on GitHub.",
  github: [
    {
      title: "BoneScan-AI",
      description:
        "An AI-powered image processing system that automatically detects bone cancer indicators in X-ray images, supporting early diagnosis.",
      url: "https://github.com/Nakresss/BoneScan-AI",
      language: "Python",
    },
    {
      title: "BoardScanner",
      description:
        "Uses deep learning and image processing to automatically identify electronic components on circuit boards (PCBs).",
      url: "https://github.com/Nakresss/BoardScanner",
      language: "Python",
    },
    {
      title: "Reinforcement-Learner",
      description:
        "A Deep Q-Network (DQN) agent that solves the CartPole-v1 environment through reinforcement learning.",
      url: "https://github.com/Nakresss/Reinforcement-Learner",
      language: "Python",
    },
    {
      title: "Baloon-Detection",
      description: "A detection-focused project centered on image processing and object detection techniques.",
      url: "https://github.com/Nakresss/Baloon-Detection",
      language: "Python",
    },
    {
      title: "Google-Colab-TPU-Usage",
      description: "A study on TPU utilization in Google Colab to improve model training efficiency.",
      url: "https://github.com/Nakresss/Google-Colab-TPU-Usage",
      language: "Python",
    },
  ] as GithubProjectItem[],
  achievementsHeading: "Achievements & Awards",
  achievementsKicker: "Podium Finishes, in the Field and in the Ring",
  achievements: [
    {
      title: "TEKNOFEST Air Defense Systems Competition — 8th in Turkey",
      year: "2024",
      description: "Finished in the national top 10 with a project developed for the Aviation, Space and Technology Festival.",
    },
    {
      title: "Berlin Open Taekwondo Championship — Gold Medal",
      year: "2015",
      description: "Championship win on the European stage; international tournament experience and high-focus discipline.",
    },
    {
      title: "Savate (French Boxing) Turkish Championship — 3rd in Turkey",
      year: "2015",
      description: "Concrete proof of disciplined training and composure under competitive pressure.",
    },
  ] as AchievementItem[],
  internationalHeading: "Field Crisis Discipline & Global Vision",
  internationalKicker: "Systems That Work in the Chaos of Real Life",
  internationalBlocks: [
    {
      title: "Heavy Machinery & Crisis Management",
      subtitle: "Marine Engineering Background",
      description:
        "Operating heavy mechanical systems and handling instant breakdowns on commercial ships along the Russian coast, in the confined, isolated conditions of the open sea. It built the reflex to construct systems that work flawlessly not in lab comfort, but in the chaos of real life.",
      image: "/images/maritime-bridge.jpg",
    },
    {
      title: "High Focus & International Representation",
      subtitle: "Berlin Open Championship",
      description:
        "Gold medal at the Berlin Open in Taekwondo and international tournament experience on the European stage. It laid the foundation for managing team processes calmly in high-stress arenas like TEKNOFEST.",
      image: "/images/taekwondo-celebration.jpg",
    },
  ],
  contact: {
    heading: "Contact",
    kicker: "Let's Build the Systems of the Future Together",
    intro:
      "I'd love to talk through my field experience, technical background, and the value I can bring to your projects.",
    formName: "Full Name",
    formEmail: "Email",
    formMessage: "Your Message",
    formSend: "Send Message",
    formSending: "Redirecting...",
    formNote: "Your message will be sent through your default email app.",
    downloadCv: "Download CV (PDF)",
    directTitle: "Direct Contact",
  },
  footer: {
    tagline: "Building systems that merge the digital and physical worlds, driven by the National Technology vision.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export function getContent(lang: Lang) {
  return lang === "tr" ? contentTr : contentEn;
}
