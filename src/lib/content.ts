import type { Lang } from "./i18n";

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  bullets: string[];
}

export interface ProjectItem {
  no: string;
  title: string;
  meta: string;
  summary: string;
  role: string;
  stack: string[];
  image?: string;
}

export interface RepoItem {
  name: string;
  summary: string;
  url: string;
  lang: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface EducationItem {
  period: string;
  program: string;
  school: string;
  detail: string;
}

export interface CertGroup {
  issuer: string;
  items: { name: string; detail?: string }[];
}

export const socials = {
  github: "https://github.com/Nakresss",
  linkedin: "https://www.linkedin.com/in/serkan-a-972b63244/",
  email: "acar.serkan@outlook.com.tr",
  phone: "+90 543 537 19 63",
  location: "Ümraniye, İstanbul",
};

const tr = {
  nav: {
    profile: "Profil",
    experience: "Deneyim",
    projects: "Projeler",
    code: "Yazılım",
    skills: "Yetkinlikler",
    education: "Eğitim",
    contact: "İletişim",
    cv: "CV",
  },
  hero: {
    name: "Serkan Acar",
    role: "Yazılım Geliştirici",
    field: "Yapay Zekâ ve Gömülü Sistemler",
    profile:
      "Yönetim Bilişim Sistemleri mezunu yazılım geliştirici. Python tabanlı uygulama geliştirme, görüntü işleme ve iş süreçleri otomasyonu alanlarında proje deneyimi. Savunma sanayi ve kurumsal yazılım projelerinde yazılım–donanım entegrasyonu odaklı çalışmalar.",
    metaLabels: {
      location: "Konum",
      focus: "Odak",
      languages: "Diller",
      status: "Durum",
    },
    metaValues: {
      location: "İstanbul, Türkiye",
      focus: "Görüntü işleme, otomasyon",
      languages: "Türkçe, İngilizce, Makedonca",
      status: "Yeni projelere açık",
    },
    cta: "İletişim",
    cvCta: "CV indir (PDF)",
  },
  sections: {
    experience: "Deneyim",
    projects: "Projeler",
    code: "Yazılım Projeleri",
    skills: "Yetkinlikler",
    education: "Eğitim ve Sertifikalar",
    awards: "Ödüller ve Liderlik",
    contact: "İletişim",
  },
  experience: [
    {
      period: "09.2021 — Devam",
      role: "Yazılım ve Sistem Geliştirici",
      org: "Freelance",
      bullets: [
        "Python, n8n ve Glide ile iş süreçlerine yönelik otomasyon ve özel yazılım çözümleri geliştirme",
        "Fusion 360 ile üretime uygun 3D mekanik tasarım ve prototip modelleme",
        "Yazılım ve donanım bileşenlerinin birlikte çalıştığı uçtan uca çözümlerin kurgulanması",
      ],
    },
    {
      period: "03.2026 — 07.2026",
      role: "IMU Stajyeri",
      org: "TRC Marine Electronic",
      bullets: [
        "Denizcilik elektroniği süreçlerinde sistem takibi ve saha entegrasyonlarının yürütülmesi",
        "Mikrodenetleyici tabanlı gömülü yazılım geliştirme çalışmalarına katılım",
        "Teknik personel eğitimlerinin organize edilmesi",
      ],
    },
    {
      period: "11.2024 — 12.2024",
      role: "Görüntü İşleme ve Yapay Zekâ Uzmanı (Proje Bazlı)",
      org: "Daz-Tech Innovation & Technology",
      bullets: [
        "Savunma sanayine yönelik nesne tespiti ve hedef takibi algoritmalarının geliştirilmesi",
        "Derin öğrenme tabanlı anomali analizi ve karar destek modellerinin oluşturulması",
      ],
    },
    {
      period: "08.2023 — 11.2023",
      role: "ManageEngine Developer",
      org: "Palcon Bilişim Sistemleri",
      bullets: [
        "ManageEngine ITSM platformunda Deluge ve Python ile arayüz ve back-end geliştirme",
        "Kurumsal iş akışlarına yönelik otomasyon ve sistem entegrasyonlarının kurulması",
      ],
    },
    {
      period: "12.2022 — 06.2023",
      role: "Stajyer",
      org: "Yıldız Holding (Bizim Toptan)",
      bullets: [
        "Kurumsal sistemlerde ürün implementasyonu ve entegrasyon süreçlerinin yürütülmesi",
        "eBA İş Akış Yönetimi ve Former üzerinde süreç geliştirme çalışmaları",
        "Rapor şablonlarının hazırlanması ve ürün testlerinin yapılması",
      ],
    },
    {
      period: "12.2021 — 06.2022",
      role: "Asistan Öğrenci",
      org: "İstanbul Nişantaşı Üniversitesi",
      bullets: [
        "ERP süreç analizi, teknik dokümantasyon ve proje planlarının hazırlanması",
        "“Nish Spor Sitesi” projesinde front-end ve back-end geliştirme",
      ],
    },
  ] as ExperienceItem[],
  roleLabel: "Rol",
  projects: [
    {
      no: "01",
      title: "Hava Savunma Sistemi",
      meta: "TEKNOFEST 2024 · Türkiye 8.'liği",
      summary:
        "Tehdit analizi yapan ve savunma tepkisi üretebilen sistem. Sensör verisi ile mekanik kontrol katmanı arasındaki haberleşme yazılımı geliştirildi.",
      role: "Takım kaptanlığı, yazılım algoritmaları, kullanıcı arayüzü",
      stack: ["C/C++", "Görüntü İşleme", "Mikrodenetleyici"],
      image: "/images/project-teamwork.jpg",
    },
    {
      no: "02",
      title: "Havacılıkta Yapay Zekâ",
      meta: "TEKNOFEST 2026 · Finalist",
      summary:
        "Havacılık verileri üzerinde yapay zekâ uygulamalarına yönelik yarışma projesi. Finale kalan takımlar arasında yer alındı.",
      role: "Model geliştirme, veri işleme",
      stack: ["Python", "Derin Öğrenme"],
    },
    {
      no: "03",
      title: "İnsansız Su Altı Aracı",
      meta: "TEKNOFEST 2026",
      summary: "Su altı keşif ve görev operasyonlarına yönelik otonom araç.",
      role: "Yazılım geliştirme, sensör entegrasyonu, kontrol sistemleri",
      stack: ["Python", "Gömülü Sistemler"],
    },
    {
      no: "04",
      title: "İnsansız Kara Aracı",
      meta: "TEKNOFEST 2026",
      summary:
        "Zorlu arazi koşullarında engel tespiti ve rota planlaması yapabilen otonom platform.",
      role: "Otonom sürüş algoritmaları, robotik sistem entegrasyonu",
      stack: ["Python", "Raspberry Pi", "Sensör Füzyonu"],
      image: "/images/hardware-wiring.jpg",
    },
    {
      no: "05",
      title: "Otonom Kule Mekaniği",
      meta: "CAD ve 3D üretim",
      summary:
        "Kamera ve kontrol elektroniğini barındıran dönebilir kule gövdesi. Fusion 360 ile modellendi, 3D yazıcıda üretildi.",
      role: "Mekanik tasarım, üretim, montaj",
      stack: ["Fusion 360", "3D Baskı"],
      image: "/images/cad-turret.jpg",
    },
    {
      no: "06",
      title: "Akıllı Tarım Otomasyonu",
      meta: "IoT · 2025",
      summary:
        "Saha sensör verilerinin toplanması ve n8n iş akışları üzerinden uzaktan izlenebilir hale getirilmesi.",
      role: "Gömülü yazılım, otomasyon kurgusu",
      stack: ["Arduino", "ESP32", "n8n"],
    },
    {
      no: "07",
      title: "Uçuş Simülasyonu Kontrol Paneli",
      meta: "Kişisel çalışma",
      summary:
        "Anahtar ve düğme dizilimi sıfırdan tasarlanan fiziksel kontrol paneli.",
      role: "Panel tasarımı, elektronik montaj",
      stack: ["Elektronik", "Panel Üretimi"],
      image: "/images/panel-wide.png",
    },
  ] as ProjectItem[],
  codeIntro: "GitHub üzerinde yayımlanan makine öğrenmesi ve görüntü işleme çalışmaları.",
  repos: [
    {
      name: "BoneScan-AI",
      summary: "Röntgen görüntülerinde kemik kanseri belirtilerinin tespitine yönelik görüntü işleme modeli.",
      url: "https://github.com/Nakresss/BoneScan-AI",
      lang: "Python",
    },
    {
      name: "BoardScanner",
      summary: "Devre kartları üzerindeki elektronik bileşenlerin derin öğrenme ile tanınması.",
      url: "https://github.com/Nakresss/BoardScanner",
      lang: "Python",
    },
    {
      name: "Reinforcement-Learner",
      summary: "CartPole-v1 ortamını çözen Deep Q-Network ajanı.",
      url: "https://github.com/Nakresss/Reinforcement-Learner",
      lang: "Python",
    },
    {
      name: "Baloon-Detection",
      summary: "Nesne tespiti odaklı görüntü işleme çalışması.",
      url: "https://github.com/Nakresss/Baloon-Detection",
      lang: "Python",
    },
    {
      name: "Google-Colab-TPU-Usage",
      summary: "Colab ortamında TPU ile model eğitimi verimliliği üzerine çalışma.",
      url: "https://github.com/Nakresss/Google-Colab-TPU-Usage",
      lang: "Python",
    },
  ] as RepoItem[],
  reposAll: "Tüm depolar",
  skills: [
    { label: "Programlama", items: "Python, C/C++, OOP, SQL, Deluge" },
    {
      label: "Yapay Zekâ ve Veri Bilimi",
      items:
        "Makine öğrenmesi, derin öğrenme, görüntü işleme, NLP, büyük veri analitiği, veri madenciliği",
    },
    {
      label: "Kütüphane ve Framework",
      items: "TensorFlow, Keras, PyTorch, OpenCV, Scikit-Learn, Flask, Django",
    },
    {
      label: "Sistem ve Gömülü Yazılım",
      items:
        "Gömülü sistemler, Arduino, Raspberry Pi, Deneyap Kart, endüstriyel otomasyon",
    },
    {
      label: "Araçlar ve Metodoloji",
      items: "Git/GitHub, CI/CD, Google Cloud, MATLAB/Simulink, n8n, Glide, Agile & Scrum",
    },
    { label: "Tasarım", items: "Fusion 360, 3D modelleme ve prototipleme" },
    {
      label: "Diller",
      items: "Türkçe (ana dil), İngilizce (%100 İngilizce lisans programı), Makedonca",
    },
  ] as SkillGroup[],
  education: [
    {
      period: "2021 — 2026",
      program: "Yönetim Bilişim Sistemleri (%100 İngilizce)",
      school: "İstanbul Nişantaşı Üniversitesi",
      detail:
        "Sistem tasarımı, yazılım geliştirme, veritabanı yönetimi, iş zekâsı ve karar destek sistemleri.",
    },
    {
      period: "2019 — 2021",
      program: "Gemi Makineleri İşletme",
      school: "Ordu Üniversitesi",
      detail:
        "Mekanik sistem işletimi, motor bakım ve onarımı, gemi güvenliği ve çevre koruma standartları.",
    },
  ] as EducationItem[],
  certsLabel: "Sertifikalar",
  certs: [
    {
      issuer: "Yapay Zekâ ve Veri Bilimi · Udemy",
      items: [
        {
          name: "Machine Learning A-Z",
          detail: "Denetimli ve denetimsiz öğrenme, regresyon, sınıflandırma, model değerlendirme.",
        },
        {
          name: "Deep Learning A-Z",
          detail: "Yapay sinir ağları, CNN ve RNN mimarileri.",
        },
        {
          name: "Projelerle Yapay Zekâ ve Bilgisayarlı Görü",
          detail: "OpenCV ile görüntü işleme uygulamaları.",
        },
      ],
    },
    {
      issuer: "Python ve Web Geliştirme · Udemy",
      items: [
        {
          name: "Sıfırdan İleri Seviye Python",
          detail: "Temel sözdiziminden nesne yönelimli programlamaya Python geliştirme.",
        },
        {
          name: "Python Django 5 ile Web Geliştirme",
          detail: "MVT mimarisi, ORM ve REST tabanlı web uygulamaları.",
        },
        {
          name: "Algoritma Geliştirme ve Programlamaya Giriş",
          detail: "Algoritma kurgusu ve programlama temelleri.",
        },
      ],
    },
    {
      issuer: "T3 Vakfı",
      items: [
        { name: "Hava Savunma Sistemleri Finalist Belgesi", detail: "2024" },
        {
          name: "Deneyap Kart TEKNOFEST Kulüp Eğitimleri",
          detail: "2025 · Gömülü sistem ve sensör uygulamaları.",
        },
      ],
    },
    {
      issuer: "Zirve ve Seminerler",
      items: [
        { name: "Milli Teknoloji Zirvesi Başarı Sertifikası", detail: "2026" },
        { name: "Savunma Sanayii Akademi Kariyer Buluşmaları", detail: "2024" },
        { name: "T3 Sınaps Kuantum Bilgisayarlar Semineri" },
      ],
    },
  ] as CertGroup[],
  awards: [
    { year: "2024", title: "TEKNOFEST Hava Savunma Sistemleri Yarışması", detail: "Türkiye 8.'liği" },
    { year: "2015", title: "Berlin Open Taekwondo Championship", detail: "Altın madalya" },
    { year: "2015", title: "Savate (Fransız Boksu) Türkiye Şampiyonası", detail: "Türkiye 3.'lüğü" },
  ],
  leadershipLabel: "Liderlik",
  leadership: [
    {
      title: "Kurucu Başkan · Yazılım ve Bilişim Kulübü",
      detail: "1000+ üye, 50+ teknik projenin koordinasyonu.",
    },
    {
      title: "Başkan Yardımcısı · Teknofest Kulübü",
      detail: "Yarışma takımlarının kurulması, rapor takibi ve etkinlik yönetimi.",
    },
  ],
  interestsLabel: "İlgi alanları",
  interests: "Satranç, taekwondo ve savate, fotoğrafçılık, müzik.",
  contact: {
    intro: "Proje ve iş birliği talepleri için:",
    formName: "Ad soyad",
    formEmail: "E-posta",
    formMessage: "Mesaj",
    formSend: "Gönder",
    formSending: "Gönderiliyor…",
    formSuccess: "Mesajınız iletildi. En kısa sürede dönüş yapılacaktır.",
    formError: "Mesaj gönderilemedi. Doğrudan e-posta ile yazabilirsiniz.",
    formFallback: "E-posta uygulamanız açılıyor…",
    formNote: "Mesajlar doğrudan e-posta adresime iletilir.",
    labels: { email: "E-posta", phone: "Telefon", location: "Konum" },
  },
  projectPage: {
    back: "Projeler",
    detail: "Detay",
    stackLabel: "Teknolojiler",
  },
  footer: { rights: "Tüm hakları saklıdır.", top: "Başa dön" },
};

const en: typeof tr = {
  nav: {
    profile: "Profile",
    experience: "Experience",
    projects: "Projects",
    code: "Software",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    cv: "CV",
  },
  hero: {
    name: "Serkan Acar",
    role: "Software Developer",
    field: "Artificial Intelligence and Embedded Systems",
    profile:
      "Software developer with a degree in Management Information Systems. Project experience in Python application development, image processing and business process automation. Work focused on software–hardware integration across defence industry and enterprise software projects.",
    metaLabels: {
      location: "Location",
      focus: "Focus",
      languages: "Languages",
      status: "Status",
    },
    metaValues: {
      location: "Istanbul, Türkiye",
      focus: "Image processing, automation",
      languages: "Turkish, English, Macedonian",
      status: "Open to new projects",
    },
    cta: "Contact",
    cvCta: "Download CV (PDF)",
  },
  sections: {
    experience: "Experience",
    projects: "Projects",
    code: "Software Projects",
    skills: "Skills",
    education: "Education and Certificates",
    awards: "Awards and Leadership",
    contact: "Contact",
  },
  experience: [
    {
      period: "09.2021 — Present",
      role: "Software and Systems Developer",
      org: "Freelance",
      bullets: [
        "Development of automation and custom software solutions for business processes using Python, n8n and Glide",
        "Production-ready 3D mechanical design and prototype modelling in Fusion 360",
        "Design of end-to-end solutions in which software and hardware components operate together",
      ],
    },
    {
      period: "03.2026 — 07.2026",
      role: "IMU Intern",
      org: "TRC Marine Electronic",
      bullets: [
        "System tracking and field integration within maritime electronics processes",
        "Participation in microcontroller-based embedded software development",
        "Organisation of technical staff training",
      ],
    },
    {
      period: "11.2024 — 12.2024",
      role: "Image Processing and AI Specialist (Project-based)",
      org: "Daz-Tech Innovation & Technology",
      bullets: [
        "Development of object detection and target tracking algorithms for the defence industry",
        "Creation of deep learning based anomaly analysis and decision support models",
      ],
    },
    {
      period: "08.2023 — 11.2023",
      role: "ManageEngine Developer",
      org: "Palcon Information Systems",
      bullets: [
        "Interface and back-end development on the ManageEngine ITSM platform using Deluge and Python",
        "Setup of automation and system integrations for enterprise workflows",
      ],
    },
    {
      period: "12.2022 — 06.2023",
      role: "Intern",
      org: "Yıldız Holding (Bizim Toptan)",
      bullets: [
        "Product implementation and integration processes on enterprise systems",
        "Process development work on eBA Workflow Management and Former",
        "Preparation of report templates and execution of product tests",
      ],
    },
    {
      period: "12.2021 — 06.2022",
      role: "Student Assistant",
      org: "Istanbul Nişantaşı University",
      bullets: [
        "ERP process analysis, technical documentation and project planning",
        "Front-end and back-end development on the “Nish Spor Sitesi” project",
      ],
    },
  ] as ExperienceItem[],
  roleLabel: "Role",
  projects: [
    {
      no: "01",
      title: "Air Defence System",
      meta: "TEKNOFEST 2024 · 8th in Türkiye",
      summary:
        "A system performing threat analysis and generating a defence response. Communication software between the sensor data and mechanical control layer was developed.",
      role: "Team captain, software algorithms, user interface",
      stack: ["C/C++", "Image Processing", "Microcontroller"],
      image: "/images/project-teamwork.jpg",
    },
    {
      no: "02",
      title: "Artificial Intelligence in Aviation",
      meta: "TEKNOFEST 2026 · Finalist",
      summary:
        "Competition project on artificial intelligence applications for aviation data. Selected among the finalist teams.",
      role: "Model development, data processing",
      stack: ["Python", "Deep Learning"],
    },
    {
      no: "03",
      title: "Unmanned Underwater Vehicle",
      meta: "TEKNOFEST 2026",
      summary: "Autonomous vehicle for underwater exploration and mission operations.",
      role: "Software development, sensor integration, control systems",
      stack: ["Python", "Embedded Systems"],
    },
    {
      no: "04",
      title: "Unmanned Ground Vehicle",
      meta: "TEKNOFEST 2026",
      summary:
        "Autonomous platform capable of obstacle detection and route planning in demanding terrain.",
      role: "Autonomous driving algorithms, robotic system integration",
      stack: ["Python", "Raspberry Pi", "Sensor Fusion"],
      image: "/images/hardware-wiring.jpg",
    },
    {
      no: "05",
      title: "Autonomous Turret Mechanics",
      meta: "CAD and 3D production",
      summary:
        "A rotating turret body housing camera and control electronics. Modelled in Fusion 360 and produced on a 3D printer.",
      role: "Mechanical design, production, assembly",
      stack: ["Fusion 360", "3D Printing"],
      image: "/images/cad-turret.jpg",
    },
    {
      no: "06",
      title: "Smart Agriculture Automation",
      meta: "IoT · 2025",
      summary:
        "Collection of field sensor data and remote monitoring through n8n workflows.",
      role: "Embedded software, automation design",
      stack: ["Arduino", "ESP32", "n8n"],
    },
    {
      no: "07",
      title: "Flight Simulation Control Panel",
      meta: "Personal work",
      summary: "A physical control panel with switch and button layout designed from scratch.",
      role: "Panel design, electronic assembly",
      stack: ["Electronics", "Panel Production"],
      image: "/images/panel-wide.png",
    },
  ] as ProjectItem[],
  codeIntro: "Machine learning and image processing work published on GitHub.",
  repos: [
    {
      name: "BoneScan-AI",
      summary: "Image processing model for detecting bone cancer indicators in X-ray images.",
      url: "https://github.com/Nakresss/BoneScan-AI",
      lang: "Python",
    },
    {
      name: "BoardScanner",
      summary: "Recognition of electronic components on circuit boards using deep learning.",
      url: "https://github.com/Nakresss/BoardScanner",
      lang: "Python",
    },
    {
      name: "Reinforcement-Learner",
      summary: "Deep Q-Network agent solving the CartPole-v1 environment.",
      url: "https://github.com/Nakresss/Reinforcement-Learner",
      lang: "Python",
    },
    {
      name: "Baloon-Detection",
      summary: "Image processing work focused on object detection.",
      url: "https://github.com/Nakresss/Baloon-Detection",
      lang: "Python",
    },
    {
      name: "Google-Colab-TPU-Usage",
      summary: "Study on model training efficiency with TPU in the Colab environment.",
      url: "https://github.com/Nakresss/Google-Colab-TPU-Usage",
      lang: "Python",
    },
  ] as RepoItem[],
  reposAll: "All repositories",
  skills: [
    { label: "Programming", items: "Python, C/C++, OOP, SQL, Deluge" },
    {
      label: "AI and Data Science",
      items:
        "Machine learning, deep learning, image processing, NLP, big data analytics, data mining",
    },
    {
      label: "Libraries and Frameworks",
      items: "TensorFlow, Keras, PyTorch, OpenCV, Scikit-Learn, Flask, Django",
    },
    {
      label: "Systems and Embedded Software",
      items: "Embedded systems, Arduino, Raspberry Pi, Deneyap Kart, industrial automation",
    },
    {
      label: "Tools and Methodology",
      items: "Git/GitHub, CI/CD, Google Cloud, MATLAB/Simulink, n8n, Glide, Agile & Scrum",
    },
    { label: "Design", items: "Fusion 360, 3D modelling and prototyping" },
    {
      label: "Languages",
      items: "Turkish (native), English (100% English degree programme), Macedonian",
    },
  ] as SkillGroup[],
  education: [
    {
      period: "2021 — 2026",
      program: "Management Information Systems (100% English)",
      school: "Istanbul Nişantaşı University",
      detail:
        "System design, software development, database management, business intelligence and decision support systems.",
    },
    {
      period: "2019 — 2021",
      program: "Marine Engineering Operations",
      school: "Ordu University",
      detail:
        "Mechanical system operation, engine maintenance and repair, ship safety and environmental protection standards.",
    },
  ] as EducationItem[],
  certsLabel: "Certificates",
  certs: [
    {
      issuer: "AI and Data Science · Udemy",
      items: [
        {
          name: "Machine Learning A-Z",
          detail: "Supervised and unsupervised learning, regression, classification, model evaluation.",
        },
        { name: "Deep Learning A-Z", detail: "Artificial neural networks, CNN and RNN architectures." },
        {
          name: "Applied AI and Computer Vision",
          detail: "Image processing applications with OpenCV.",
        },
      ],
    },
    {
      issuer: "Python and Web Development · Udemy",
      items: [
        {
          name: "Python from Beginner to Advanced",
          detail: "Python development from basic syntax to object-oriented programming.",
        },
        {
          name: "Web Development with Python Django 5",
          detail: "MVT architecture, ORM and REST-based web applications.",
        },
        {
          name: "Introduction to Algorithms and Programming",
          detail: "Algorithm design and programming fundamentals.",
        },
      ],
    },
    {
      issuer: "T3 Foundation",
      items: [
        { name: "Air Defence Systems Finalist Certificate", detail: "2024" },
        {
          name: "Deneyap Kart TEKNOFEST Club Training",
          detail: "2025 · Embedded systems and sensor applications.",
        },
      ],
    },
    {
      issuer: "Summits and Seminars",
      items: [
        { name: "National Technology Summit Certificate of Achievement", detail: "2026" },
        { name: "Defence Industry Academy Career Meetings", detail: "2024" },
        { name: "T3 Sınaps Quantum Computers Seminar" },
      ],
    },
  ] as CertGroup[],
  awards: [
    { year: "2024", title: "TEKNOFEST Air Defence Systems Competition", detail: "8th in Türkiye" },
    { year: "2015", title: "Berlin Open Taekwondo Championship", detail: "Gold medal" },
    { year: "2015", title: "Savate (French Boxing) Turkish Championship", detail: "3rd in Türkiye" },
  ],
  leadershipLabel: "Leadership",
  leadership: [
    {
      title: "Founding President · Software and IT Club",
      detail: "1000+ members, coordination of 50+ technical projects.",
    },
    {
      title: "Vice President · Teknofest Club",
      detail: "Formation of competition teams, report tracking and event management.",
    },
  ],
  interestsLabel: "Interests",
  interests: "Chess, taekwondo and savate, photography, music.",
  contact: {
    intro: "For project and collaboration enquiries:",
    formName: "Full name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send",
    formSending: "Sending…",
    formSuccess: "Your message has been sent. You will receive a reply shortly.",
    formError: "The message could not be sent. Please write directly by email.",
    formFallback: "Opening your email application…",
    formNote: "Messages are delivered directly to my email address.",
    labels: { email: "Email", phone: "Phone", location: "Location" },
  },
  projectPage: {
    back: "Projects",
    detail: "Detail",
    stackLabel: "Technologies",
  },
  footer: { rights: "All rights reserved.", top: "Back to top" },
};

export function getContent(lang: Lang) {
  return lang === "tr" ? tr : en;
}

export type Content = typeof tr;
