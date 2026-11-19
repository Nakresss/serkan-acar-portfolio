import type { Content } from "./types";

export const tr: Content = {
  meta: {
    title: "Serkan Acar · Yazılım Geliştirici ve Proje Koordinatörü",
    description:
      "Python, görüntü işleme ve gömülü sistemler üzerine çalışan yazılım geliştirici. TEKNOFEST 2026 Havacılıkta Yapay Zekâ Türkiye 3.'lüğü. Projeler, deneyim ve iletişim.",
    ogRole: "Yazılım Geliştirici ve Proje Koordinatörü",
    ogField: "Görüntü işleme · Gömülü sistemler · Otomasyon",
  },
  nav: {
    items: [
      { id: "projeler", label: "Projeler" },
      { id: "deneyim", label: "Deneyim" },
      { id: "sahadan", label: "Sahadan" },
      { id: "yazilim", label: "Yazılım" },
      { id: "egitim", label: "Eğitim" },
      { id: "sertifikalar", label: "Sertifikalar" },
      { id: "iletisim", label: "İletişim" },
    ],
    cv: "CV",
    menu: "Menü",
    close: "Kapat",
    switchTo: "English",
    skip: "İçeriğe geç",
  },
  hero: {
    role: "Yazılım geliştirici ve proje koordinatörü",
    location: "Ümraniye, İstanbul",
    intro: [
      "Yönetim Bilişim Sistemleri mezunuyum, şu an yapay zekâ mühendisliği yüksek lisansı yapıyorum. Python, görüntü işleme ve otomasyon üzerine çalışıyorum. Yazdığım kodun çoğu bir kameraya, bir motora ya da bir sensöre bağlanıyor.",
      "TEKNOFEST takımlarında kaptanlık yaptım ve yazılım tarafını üstlendim. Bugün üniversitede öğrenci takımlarını, bir okulda da robotik atölyesini yürütüyorum.",
    ],
    ctaMail: "E-posta gönder",
    ctaCv: "CV'yi indir",
    photo: {
      src: "/images/stage-portrait.jpg",
      alt: "Serkan Acar, Biruni Teknopark Demoday sahnesinde mikrofonla sunum yaparken",
      caption: "Biruni Teknopark, ön kuluçka Demoday sunumu",
    },
    facts: [
      { value: "3.", label: "TEKNOFEST 2026 · Havacılıkta Yapay Zekâ" },
      { value: "8.", label: "TEKNOFEST 2024 · Hava Savunma Sistemleri" },
      { value: "1000+", label: "üyeli yazılım kulübünün kurucu başkanı" },
      { value: "3 dil", label: "Türkçe, İngilizce, Makedonca" },
    ],
  },
  now: {
    title: "Şu sıralar",
    updated: "Kasım 2026",
    items: [
      {
        since: "Ekim 2026'dan beri",
        title: "Atölye öğretmeni",
        place: "MBA Okulları",
        text: "Öğrencilerle uçtan uca robotik projeler geliştiriyoruz, TEKNOFEST, TÜBİTAK ve HEBOCON gibi yarışmalara hazırlanıyoruz. Yazılım, elektrik ve mekanik derslerini veriyorum.",
      },
      {
        since: "Nisan 2025'ten beri",
        title: "Proje koordinatörü",
        place: "İstanbul Nişantaşı Üniversitesi",
        text: "Öğrenci projelerini ve teknoloji takımlarını koordine ediyorum. Ulusal yarışmalara giden takımlara yazılım mimarisi ve proje süreci konusunda destek oluyorum.",
      },
      {
        since: "2026–2027",
        title: "Yüksek lisans",
        place: "Yapay Zekâ Mühendisliği, İNÜ",
        text: "Sahada kullandığım bilgisayarlı görü ve derin öğrenme yöntemlerini akademik tarafta derinleştiriyorum.",
      },
    ],
  },
  featured: {
    label: "Öne çıkan proje",
    slug: "havacilikta-yapay-zeka",
    title: "Havacılıkta Yapay Zekâ",
    result: "Türkiye 3.'lüğü",
    meta: "TEKNOFEST 2026",
    intro:
      "Hava aracından gelen görüntüler üzerinde üç görevi aynı anda çözen bir sistem kurduk. Yazılım, yarışma sunucusundan kareleri tek tek çekiyor, üç modelin çıktısını birleştirip sonucu geri gönderiyor. Bağlantı koparsa kaldığı kareden devam ediyor. Takım liderliğini ve modellerin tek bir akışta çalışmasını ben yürüttüm.",
    tasksTitle: "Üç görev",
    tasks: [
      {
        title: "Nesne tespiti",
        text: "Karedeki taşıt, insan ve iniş alanlarını bulup sınıflandırıyor; iniş ve hareket durumunu da çıkarıyor.",
        tools: "YOLO · ByteTrack",
      },
      {
        title: "Konum kestirimi",
        text: "GPS verisi güvenilmez olduğunda aracın konumunu yalnızca kamera görüntüsünden, görsel odometriyle hesaplıyor.",
        tools: "DPVO · PyTorch",
      },
      {
        title: "Referans nesne arama",
        text: "Sunucunun verdiği örnek görüntüyü ilgili karelerde arayıp konumunu işaretliyor.",
        tools: "OWLv2 · DINOv3",
      },
    ],
    metricsTitle: "Yarışma uzunluğunda test",
    metrics: [
      { value: "2250/2250", label: "kare hatasız işlendi" },
      { value: "8 → 2,4 GB", label: "GPU bellek kullanımı" },
      { value: "%45", label: "daha kısa işlem süresi" },
    ],
    more: "Projenin ayrıntıları",
  },
  projects: {
    title: "Projeler",
    intro:
      "Yarışma projeleri, atölyede ürettiklerim ve kendi çalışmalarım. Çoğunda yazılımla birlikte mekanik ve elektronik tarafı da ben kurdum.",
    open: "İncele",
    items: [
      {
        slug: "havacilikta-yapay-zeka",
        title: "Havacılıkta Yapay Zekâ",
        meta: "TEKNOFEST 2026",
        year: "2026",
        result: "Türkiye 3.'lüğü",
        summary:
          "Hava platformları için görüntü tabanlı karar destek sistemi. Nesne tespiti, görsel konum kestirimi ve referans nesne arama aynı akışta çalışıyor.",
        role: "Takım liderliği, model entegrasyonu, teknik koordinasyon",
        stack: ["Python", "PyTorch", "YOLO", "DPVO", "OWLv2"],
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Yarışmada değerlendirme sunucusu kareleri tek tek veriyor, her kare için üç ayrı görevin sonucu bekleniyor. Bizim yazılımımız sunucuya bağlanıyor, kareyi indiriyor, modelleri çalıştırıyor ve tahmini geri gönderiyor. Bağlantı koptuğunda kaldığı yerden devam ediyor.",
            ],
          },
          {
            heading: "Görevler",
            bullets: [
              "Nesne tespiti: taşıt, insan ve iniş alanlarının sınıflandırılması; iniş ve hareket durumunun çıkarılması (YOLO, ByteTrack)",
              "Konum kestirimi: GPS sağlıksızken aracın x, y, z konumunun kamera görüntüsünden hesaplanması (DPVO)",
              "Referans nesne arama: sunucunun verdiği örnek görüntünün ilgili karelerde bulunması (OWLv2, DINOv3)",
            ],
          },
          {
            heading: "Mühendislik notları",
            bullets: [
              "DPVO'nun C++/CUDA derlemesi Windows'ta çalışmadığı için matematiği koruyarak saf PyTorch'a taşındı, sistem WSL olmadan çalışır hale geldi",
              "Korelasyon adımındaki sınırsız bellek büyümesi bulunup parçalara bölündü: GPU kullanımı 8 GB'tan 2,4 GB'a indi, işlem süresi %45 kısaldı",
              "Windows'ta görev 3'ü çökerten süreç iletişimi hatası thread ve kuyruk tabanlı okuyucuyla düzeltildi",
              "Yarışma uzunluğundaki 2250 karelik tam koşu, üç görev birlikte çalışırken hatasız tamamlandı",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: ["TEKNOFEST 2026 Havacılıkta Yapay Zekâ Yarışması'nda Türkiye 3.'lüğü."],
          },
        ],
      },
      {
        slug: "hava-savunma-sistemi",
        title: "Hava Savunma Sistemi",
        meta: "TEKNOFEST 2024",
        year: "2024",
        result: "Türkiye 8.'liği",
        summary:
          "Hedefi kamerayla tespit edip takip eden ve savunma tepkisi üreten sistem. Sensör verisiyle mekanik kontrol katmanı arasındaki haberleşmeyi yazdık.",
        role: "Takım kaptanlığı, yazılım algoritmaları, kullanıcı arayüzü",
        stack: ["C/C++", "Görüntü işleme", "Mikrodenetleyici"],
        cover: {
          src: "/images/project-teamwork.jpg",
          alt: "Takım arkadaşlarıyla yarışma alanında kule sistemi üzerinde çalışırken",
        },
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Kamera görüntüsünden yapılan tespit, dönebilen bir kule mekaniğine aktarılıyor. Sistem hedefi takip ediyor ve operatör arayüzünden izlenebiliyor.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Takım kaptanlığı ve yarışma sürecinin yürütülmesi",
              "Hedef tespiti ve takibi için yazılım algoritmaları",
              "Operatör tarafındaki kullanıcı arayüzü",
            ],
          },
          {
            heading: "Teknik yaklaşım",
            bullets: [
              "Sensör verisi ile mekanik kontrol katmanı arasındaki haberleşme C/C++ ile yazıldı",
              "Mikrodenetleyici entegrasyonuyla gerçek zamanlı hedef takibi sağlandı",
              "Kamera ve kontrol elektroniği 3D baskıyla üretilen kule gövdesine yerleştirildi",
            ],
          },
          {
            heading: "Sonuç",
            paragraphs: ["TEKNOFEST 2024 Hava Savunma Sistemleri Yarışması'nda Türkiye 8.'liği."],
          },
        ],
        gallery: [
          {
            src: "/images/project-teamwork.jpg",
            alt: "Yarışma alanında sistem üzerinde çalışma",
            caption: "Yarışma alanında son ayarlar",
          },
          {
            src: "/images/project-turret-final.jpg",
            alt: "Tamamlanmış kule ve kamera yerleşimi",
            caption: "Tamamlanmış kule ve kamera yerleşimi",
          },
          {
            src: "/images/community-group.jpg",
            alt: "TEKNOFEST etkinlik alanında ekip",
            caption: "TEKNOFEST etkinlik alanı",
          },
        ],
      },
      {
        slug: "insansiz-su-alti-araci",
        title: "İnsansız Su Altı Aracı",
        meta: "TEKNOFEST 2026",
        year: "2026",
        summary:
          "Su altı keşif ve görev operasyonları için otonom araç. Yazılımı, çoklu sensör entegrasyonunu ve kontrol mimarisini kurdum.",
        role: "Yazılım geliştirme, çoklu sensör entegrasyonu, kontrol mimarisi",
        stack: ["Python", "Gömülü sistemler", "Sensör entegrasyonu"],
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Su altında keşif ve görev operasyonları yapabilen otonom araç. TEKNOFEST 2026 kapsamında geliştirildi.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Araç yazılımının geliştirilmesi",
              "Birden fazla sensörün aynı veri akışında birleştirilmesi",
              "Kontrol sistemlerinin mimari kurgusu",
            ],
          },
        ],
      },
      {
        slug: "insansiz-kara-araci",
        title: "İnsansız Kara Aracı",
        meta: "TEKNOFEST 2026",
        year: "2026",
        summary:
          "Zorlu arazide eşzamanlı konumlandırma, engel tespiti ve rota planlaması yapan otonom platform.",
        role: "Otonom sürüş algoritmaları, robotik sistem entegrasyonu",
        stack: ["Python", "C/C++", "Raspberry Pi", "Sensör füzyonu"],
        cover: {
          src: "/images/hardware-wiring.jpg",
          alt: "Aracın kontrol kartları ve kablolaması",
        },
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Arazide kendi konumunu belirleyip engelleri algılayan ve rotasını buna göre planlayan kara platformu. TEKNOFEST 2026 kapsamında geliştirildi.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Otonom sürüş algoritmaları",
              "Raspberry Pi ve sensörlerle engel tespit sisteminin kurulması",
              "Kontrol kartlarının C/C++ algoritmalarıyla eşzamanlı çalışacak şekilde programlanması",
            ],
          },
        ],
        gallery: [
          {
            src: "/images/hardware-wiring.jpg",
            alt: "Kontrol elektroniği ve kablolama",
            caption: "Kontrol elektroniği ve kablolama",
          },
        ],
      },
      {
        slug: "otonom-kule-mekanigi",
        title: "Otonom Kule Mekaniği",
        meta: "CAD ve 3D üretim",
        year: "2024",
        summary:
          "Kamerayı ve kontrol elektroniğini taşıyan dönebilen kule gövdesi. Fusion 360'ta modelledim, 3D yazıcıda ürettim.",
        role: "Mekanik tasarım, üretim, montaj",
        stack: ["Fusion 360", "3D baskı"],
        cover: { src: "/images/cad-turret.jpg", alt: "Fusion 360'ta kule modeli" },
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Hava savunma sisteminin mekanik tarafı. Gövde, kamerayı ve kontrol kartlarını koruyacak, aynı zamanda serbestçe dönebilecek şekilde tasarlandı.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Gövdenin Fusion 360 ile sıfırdan modellenmesi",
              "Baskı parametrelerinin ısı dengesi gözetilerek ayarlanması",
              "Parçaların montajı ve elektronik yerleşimi",
            ],
          },
          {
            heading: "Üretim",
            paragraphs: [
              "Parçalar Flashforge Adventurer 5M Pro ile, yüksek sıcaklık isteyen malzemelerle basıldı.",
            ],
          },
        ],
        gallery: [
          { src: "/images/cad-turret.jpg", alt: "Fusion 360'ta kule modeli", caption: "Fusion 360 modeli" },
          {
            src: "/images/project-turret-final.jpg",
            alt: "Basılmış ve monte edilmiş kule",
            caption: "Basılmış ve monte edilmiş hali",
          },
        ],
      },
      {
        slug: "akilli-tarim-otomasyonu",
        title: "Akıllı Tarım Otomasyonu",
        meta: "IoT",
        year: "2025",
        summary:
          "Adını “Akıllı Tosunlar” koyduğumuz tarım otomasyonu. Saha sensörlerinden gelen veriyi n8n akışlarıyla uzaktan izlenebilir hale getirdik.",
        role: "Gömülü yazılım, otomasyon kurgusu",
        stack: ["Arduino", "ESP32", "n8n"],
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Tarımda verimi artırmaya yönelik donanım ve otomasyon düzeni. Sahadaki sensör verisi toplanıyor, işleniyor ve uzaktan izlenebiliyor.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Arduino ve ESP32 tabanlı veri toplama katmanı",
              "Verinin n8n iş akışlarına bağlanması",
              "Uzaktan izleme ve bildirim kurgusu",
            ],
          },
        ],
      },
      {
        slug: "ucus-simulasyonu-kontrol-paneli",
        title: "Uçuş Simülasyonu Kontrol Paneli",
        meta: "Kişisel çalışma",
        year: "2025",
        summary: "Anahtar ve düğme yerleşimini sıfırdan çizdiğim fiziksel kokpit paneli.",
        role: "Panel tasarımı, elektronik montaj",
        stack: ["Elektronik", "Panel üretimi"],
        cover: { src: "/images/panel-wide.jpg", alt: "Tamamlanmış uçuş simülasyonu kontrol paneli" },
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Uçuş simülasyonu için fiziksel kontrol paneli. Anahtar ve düğme yerleşimi gerçek kokpit düzeni referans alınarak çizildi.",
            ],
          },
          {
            heading: "Katkım",
            bullets: [
              "Panel yerleşimi ve etiketleme",
              "Anahtar, buton ve gösterge montajı",
              "Kablolama ve bilgisayar bağlantısı",
            ],
          },
        ],
        gallery: [
          { src: "/images/panel-wide.jpg", alt: "Panelin tamamı", caption: "Panelin tamamı" },
          { src: "/images/panel-detail.jpg", alt: "Anahtar ve etiket detayı", caption: "Anahtar ve etiket detayı" },
        ],
      },
      {
        slug: "is-surecleri-otomasyonu",
        title: "İş Süreçleri ve Ağ Altyapısı",
        meta: "Serbest çalışma",
        year: "2021–",
        summary:
          "Elle yürüyen veri işlerini n8n, Glide ve VBA ile otomatikleştirdim. IP kamera, kayıt ve ağ yapılandırmalarını kurdum.",
        role: "Otomasyon tasarımı, ağ yapılandırması",
        stack: ["n8n", "Glide", "VBA", "Ağ"],
        sections: [
          {
            heading: "Kapsam",
            paragraphs: [
              "Kurumsal ve bireysel müşteriler için operasyonel işleri hızlandıran otomasyonlar ve bunların çalıştığı ağ altyapısı.",
            ],
          },
          {
            heading: "Yaptıklarım",
            bullets: [
              "Manuel veri işleme adımlarının n8n, Glide ve VBA ile dijitale taşınması",
              "IP güvenlik kamerası kurulumları ve 7/24 kayıt düzeni",
              "Statik IP ve port yönlendirme ile cihazların kesintisiz haberleşmesi",
            ],
          },
        ],
      },
    ],
  },
  experience: {
    title: "Deneyim",
    present: "devam",
    items: [
      {
        start: "10.2026",
        end: "",
        current: true,
        role: "Atölye Öğretmeni",
        org: "MBA Okulları",
        bullets: [
          "Öğrencilerin TEKNOFEST, TÜBİTAK ve HEBOCON gibi yarışmalara hazırlanması",
          "Uçtan uca robotik projelerin öğrencilerle birlikte geliştirilmesi",
          "Yazılım, elektrik ve mekanik derslerinin verilmesi",
        ],
      },
      {
        start: "03.2026",
        end: "07.2026",
        role: "IMU Stajyeri",
        org: "TRC Marine Electronic",
        bullets: [
          "Denizcilik elektroniğinde sistem takibi ve saha entegrasyonları",
          "Mikrodenetleyici tabanlı gömülü yazılım geliştirme",
          "Teknik personel eğitimlerinin organizasyonu",
        ],
      },
      {
        start: "04.2025",
        end: "",
        current: true,
        role: "Proje Koordinatörü",
        org: "İstanbul Nişantaşı Üniversitesi",
        bullets: [
          "Öğrenci projelerinin ve teknoloji takımlarının koordinasyonu ve mentorluğu",
          "TEKNOFEST ve TÜBİTAK takımlarına yazılım mimarisi ve süreç yönetimi desteği",
        ],
      },
      {
        start: "11.2024",
        end: "12.2024",
        role: "Görüntü İşleme ve Yapay Zekâ Uzmanı",
        org: "Daz-Tech Innovation & Technology",
        note: "Proje bazlı",
        bullets: [
          "Savunma sanayisine yönelik nesne tespiti ve hedef takibi algoritmaları",
          "Derin öğrenme tabanlı anomali analizi ve karar destek modelleri",
        ],
      },
      {
        start: "08.2023",
        end: "11.2023",
        role: "ManageEngine Developer",
        org: "Palcon Bilişim Sistemleri",
        bullets: [
          "ManageEngine ITSM üzerinde Deluge ve Python ile arayüz ve back-end geliştirme",
          "Kurumsal iş akışları için otomasyon ve sistem entegrasyonları",
        ],
      },
      {
        start: "12.2022",
        end: "06.2023",
        role: "Stajyer",
        org: "Yıldız Holding (Bizim Toptan)",
        bullets: [
          "Kurumsal sistemlerde ürün implementasyonu ve entegrasyon",
          "eBA İş Akış Yönetimi ve Former üzerinde süreç geliştirme",
          "Rapor şablonları ve ürün testleri",
        ],
      },
      {
        start: "12.2021",
        end: "06.2022",
        role: "Asistan Öğrenci",
        org: "İstanbul Nişantaşı Üniversitesi",
        bullets: [
          "ERP süreç analizi, teknik dokümantasyon ve proje planları",
          "“Nish Spor Sitesi” projesinde front-end ve back-end geliştirme",
        ],
      },
      {
        start: "09.2021",
        end: "",
        current: true,
        role: "Yazılım ve Sistem Geliştirici",
        org: "Serbest çalışma",
        bullets: [
          "Python, n8n ve Glide ile iş süreçleri için otomasyon ve özel yazılım",
          "Fusion 360 ile üretime uygun 3D mekanik tasarım ve prototip",
          "Yazılım ve donanımın birlikte çalıştığı uçtan uca çözümler",
        ],
      },
    ],
  },
  field: {
    title: "Sahadan",
    intro:
      "Mühendisliğe bilgisayar başında başlamadım. Makine dairesi ve tatami, bugün nasıl çalıştığımı en çok etkileyen iki yer. Arada Kuzey Makedonya'da geçen bir buçuk yıl var; Makedoncayı orada öğrendim.",
    stories: [
      {
        kicker: "2019–2021 · Gemi makineleri",
        title: "Makine dairesinde",
        text: [
          "Ordu Üniversitesi'nde gemi makineleri işletme okurken Rusya hattında (Rostov, Azov, Yeysk) çalışan ticari gemilerin makine dairesinde bulundum. Açık denizde yedek parça da yardım da sınırlı. Arızayı orada, elinizdekiyle çözmeniz gerekiyor.",
          "Büyük dizel motorlarda milimetrik toleranslarla çalışmak, bugün tasarladığım parçalara ve sahada test ettiğim sistemlere bakışımı belirledi.",
        ],
        photo: {
          src: "/images/engine-room.jpg",
          alt: "Serkan Acar bir ticari geminin makine kontrol odasında",
          caption: "Makine kontrol odası, Rusya hattı",
        },
        secondary: {
          src: "/images/engine-room-desk.jpg",
          alt: "Makine dairesinde vardiya kayıtlarını doldururken",
          caption: "Vardiya kayıtları",
        },
      },
      {
        kicker: "2015 · Taekwondo ve savate",
        title: "Ringden kalan alışkanlık",
        text: [
          "Küçük yaştan beri taekwondo yapıyorum. 2015'te Berlin Open'da altın madalya, aynı yıl savate Türkiye şampiyonasında üçüncülük aldım. Turnuvalar için Almanya, Fransa, Avusturya ve Lüksemburg'a gittim.",
          "Yarışma günü baskısını yönetmeyi orada öğrendim. TEKNOFEST finallerinde de aynı şey işe yarıyor.",
        ],
        photo: {
          src: "/images/taekwondo-win.jpg",
          alt: "Serkan Acar maç sonunda kollarını kaldırmış, kupa alırken",
          caption: "Maç sonu, kupa töreni",
        },
        secondary: {
          src: "/images/taekwondo-podium.jpg",
          alt: "Berlin Open'da madalya ve kupalarla",
          caption: "Berlin Open, 2015",
        },
      },
    ],
  },
  software: {
    title: "Yazılım",
    intro:
      "Yarışma dışında yazdıklarım. Bir kısmı açık kaynak, bir kısmı kurumlar için geliştirildiği için özel depoda duruyor.",
    privateLabel: "özel depo",
    liveLabel: "Canlı site",
    sourceLabel: "Kaynak kod",
    notebooks:
      "Bunlara ek olarak CNN, LSTM, GAN, kapsül ağları, transfer öğrenme ve stil aktarımı üzerine 30'dan fazla çalışma defteri GitHub'da.",
    all: "Tüm depolar",
    repos: [
      {
        name: "Ayvalık Keşfet",
        summary:
          "Ayvalık ve Cunda için iki dilli gezi rehberi. Harita, rota planlayıcı, çevrimdışı çalışma ve her sayfa için ayrı SEO.",
        stack: "React · TypeScript · Leaflet",
        year: "2026",
        url: "https://github.com/Nakresss/ayvalik-kesfet",
        live: "https://ayvalik-kesfet.vercel.app",
      },
      {
        name: "Ders Programı",
        summary:
          "Ortaokul ve lise programını tek tabloda yöneten çakışma denetimi. Öğretmen ve derslik çakışmaları veritabanı kısıtlarıyla engelleniyor.",
        stack: "TypeScript · Supabase · PostgreSQL",
        year: "2026",
      },
      {
        name: "NakresOS",
        summary:
          "MikroTik cihazlarını yönetmek ve izlemek için panel. Zamanlanmış görevler, Telegram ve e-posta bildirimleri, web filtresi.",
        stack: "Next.js · Supabase · RouterOS API",
        year: "2026",
      },
      {
        name: "BoneScan-AI",
        summary: "Röntgen görüntülerinde kemik kanseri belirtilerini işaretleyen YOLOv8 modeli.",
        stack: "Python · YOLOv8",
        year: "2024",
        url: "https://github.com/Nakresss/BoneScan-AI",
      },
      {
        name: "BoardScanner",
        summary: "Devre kartı üzerindeki direnç, kapasitör ve entegreleri tanıyan görüntü işleme modeli.",
        stack: "Python · YOLO · OpenCV",
        year: "2024",
        url: "https://github.com/Nakresss/BoardScanner",
      },
      {
        name: "Reinforcement-Learner",
        summary: "CartPole-v1 ortamını çözen Deep Q-Network ajanı.",
        stack: "Python · DQN",
        year: "2024",
        url: "https://github.com/Nakresss/Reinforcement-Learner",
      },
      {
        name: "Baloon-Detection",
        summary: "Hava savunma çalışmaları için balon tespiti.",
        stack: "Python · OpenCV",
        year: "2025",
        url: "https://github.com/Nakresss/Baloon-Detection",
      },
    ],
  },
  skills: {
    title: "Yetkinlikler",
    groups: [
      { label: "Programlama", items: ["Python", "C/C++", "SQL", "TypeScript", "Deluge"] },
      {
        label: "Yapay zekâ",
        items: ["Görüntü işleme", "Derin öğrenme", "Makine öğrenmesi", "NLP", "Veri madenciliği"],
      },
      {
        label: "Kütüphaneler",
        items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Ultralytics", "Scikit-Learn", "Django", "Flask"],
      },
      {
        label: "Gömülü ve donanım",
        items: ["Arduino", "ESP32", "Raspberry Pi", "Deneyap Kart", "Endüstriyel otomasyon"],
      },
      {
        label: "Araçlar",
        items: ["Git", "CI/CD", "Google Cloud", "Supabase", "MATLAB/Simulink", "n8n", "Glide"],
      },
      { label: "Tasarım ve üretim", items: ["Fusion 360", "3D modelleme", "3D baskı", "Prototipleme"] },
    ],
  },
  education: {
    title: "Eğitim",
    items: [
      {
        period: "2026–2027",
        program: "Yapay Zekâ Mühendisliği, Yüksek Lisans",
        school: "İstanbul Nişantaşı Üniversitesi",
        current: true,
      },
      {
        period: "2021–2026",
        program: "Yönetim Bilişim Sistemleri (%100 İngilizce)",
        school: "İstanbul Nişantaşı Üniversitesi",
        detail: "Sistem tasarımı, yazılım geliştirme, veritabanı yönetimi, iş zekâsı ve karar destek sistemleri.",
      },
      {
        period: "2019–2021",
        program: "Gemi Makineleri İşletme",
        school: "Ordu Üniversitesi",
        detail: "Mekanik sistem işletimi, motor bakım ve onarımı, gemi güvenliği.",
      },
    ],
  },
  certificates: {
    title: "Sertifikalar",
    intro: "Eğitim, yarışma ve seminerlerden aldığım belgeler. PDF işaretli olanlara tıklayarak belgenin kendisini açabilirsiniz.",
    file: "PDF",
    groups: [
      {
        issuer: "Udemy · Yapay zekâ",
        items: [
          { name: "Machine Learning A-Z" },
          { name: "Deep Learning A-Z" },
          { name: "Projelerle Yapay Zekâ ve Bilgisayarlı Görü" },
        ],
      },
      {
        issuer: "Udemy · Yazılım",
        items: [
          { name: "Sıfırdan İleri Seviye Python" },
          { name: "Python Django 5 ile Web Geliştirme" },
          { name: "Algoritma Geliştirme ve Programlamaya Giriş" },
        ],
      },
      {
        issuer: "T3 Vakfı",
        items: [
          {
            name: "Havacılıkta Yapay Zekâ Finalist Belgesi",
            year: "2026",
            href: "/certs/teknofest-2026-havacilikta-yapay-zeka-finalist.pdf",
          },
          { name: "Hava Savunma Sistemleri Finalist Belgesi", year: "2024" },
          { name: "Deneyap Kart TEKNOFEST Kulüp Eğitimleri", year: "2025" },
        ],
      },
      {
        issuer: "Zirve ve seminerler",
        items: [
          { name: "Milli Teknoloji Zirvesi Başarı Sertifikası", year: "2026" },
          { name: "Savunma Sanayii Akademi Kariyer Buluşmaları", year: "2024" },
          { name: "T3 Sinaps Kuantum Bilgisayarlar Semineri" },
        ],
      },
    ],
  },
  awards: {
    title: "Ödüller",
    items: [
      { year: "2026", title: "TEKNOFEST Havacılıkta Yapay Zekâ Yarışması", result: "Türkiye 3.'lüğü" },
      { year: "2024", title: "TEKNOFEST Hava Savunma Sistemleri Yarışması", result: "Türkiye 8.'liği" },
      { year: "2015", title: "Berlin Open Taekwondo Championship", result: "Altın madalya" },
      { year: "2015", title: "Savate Türkiye Şampiyonası", result: "Türkiye 3.'lüğü" },
    ],
    leadershipTitle: "Kulüpler",
    leadership: [
      {
        title: "Yazılım ve Bilişim Kulübü · Kurucu başkan",
        text: "1000'den fazla üyenin ve 50'yi aşkın teknik projenin koordinasyonu.",
      },
      {
        title: "Teknofest Kulübü · Başkan yardımcısı",
        text: "Yarışma takımlarının kurulması, rapor takibi ve etkinlik yönetimi.",
      },
    ],
    interestsTitle: "Boş zamanlarda",
    interests: "Satranç, fotoğraf, müzik ve hâlâ taekwondo.",
  },
  contact: {
    title: "İletişim",
    lead: "Bir proje, iş birliği ya da atölye fikri için yazabilirsiniz. En hızlı ulaşacağınız yol e‑posta.",
    email: "E-posta",
    phone: "Telefon",
    location: "Konum",
    copy: "Kopyala",
    copied: "Kopyalandı",
    cv: "CV (PDF, 2 sayfa)",
  },
  projectPage: {
    back: "Tüm projeler",
    role: "Rolüm",
    stack: "Kullanılanlar",
    year: "Yıl",
    result: "Sonuç",
    next: "Sıradaki proje",
    photos: "Fotoğraflar",
  },
  footer: {
    updated: "Son güncelleme: Kasım 2026",
    top: "Başa dön",
    built: "Next.js ile yazıldı, Vercel'de yayında.",
  },
  notFound: {
    title: "Bu sayfa yok.",
    text: "Adres değişmiş ya da yanlış yazılmış olabilir.",
    home: "Ana sayfaya dön",
  },
};
