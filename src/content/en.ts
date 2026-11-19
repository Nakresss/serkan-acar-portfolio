import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Serkan Acar · Software Developer and Project Coordinator",
    description:
      "Software developer working with Python, computer vision and embedded systems. 3rd in Türkiye in the TEKNOFEST 2026 Artificial Intelligence in Aviation competition. Projects, experience and contact.",
    ogRole: "Software Developer and Project Coordinator",
    ogField: "Computer vision · Embedded systems · Automation",
  },
  nav: {
    items: [
      { id: "projeler", label: "Projects" },
      { id: "deneyim", label: "Experience" },
      { id: "sahadan", label: "From the Field" },
      { id: "yazilim", label: "Software" },
      { id: "egitim", label: "Education" },
      { id: "sertifikalar", label: "Certificates" },
      { id: "iletisim", label: "Contact" },
    ],
    cv: "CV",
    menu: "Menu",
    close: "Close",
    switchTo: "Türkçe",
    skip: "Skip to content",
  },
  hero: {
    role: "Software developer and project coordinator",
    location: "Ümraniye, Istanbul",
    intro: [
      "I graduated in Management Information Systems and am now studying Artificial Intelligence Engineering at master's level. I work with Python, computer vision and automation. Much of the code I write connects to a camera, a motor or a sensor.",
      "I served as team captain and led the software work in TEKNOFEST teams. Today, I support student teams at a university and run a robotics workshop at a school.",
    ],
    ctaMail: "Send email",
    ctaCv: "Download CV",
    photo: {
      src: "/images/stage-portrait.jpg",
      alt: "Serkan Acar giving a presentation with a microphone on the Biruni Teknopark Demo Day stage",
      caption: "Biruni Teknopark, pre-incubation Demo Day presentation",
    },
    facts: [
      { value: "3rd", label: "TEKNOFEST 2026 · Artificial Intelligence in Aviation" },
      { value: "8th", label: "TEKNOFEST 2024 · Air Defence Systems" },
      { value: "1000+", label: "members in the software club I founded" },
      { value: "3", label: "languages: Turkish, English, Macedonian" },
    ],
  },
  now: {
    title: "Right now",
    updated: "November 2026",
    items: [
      {
        since: "Since October 2026",
        title: "Workshop instructor",
        place: "MBA Schools",
        text: "I develop end-to-end robotics projects with students and prepare them for competitions such as TEKNOFEST, TÜBİTAK and HEBOCON. I teach software, electrical and mechanical subjects.",
      },
      {
        since: "Since April 2025",
        title: "Project coordinator",
        place: "Istanbul Nişantaşı University",
        text: "I coordinate student projects and technology teams. I support teams competing in national contests with software architecture and project processes.",
      },
      {
        since: "2026–2027",
        title: "Master's degree",
        place: "Artificial Intelligence Engineering, INU",
        text: "Taking the computer vision and deep learning methods I already use in the field further, on the academic side.",
      },
    ],
  },
  featured: {
    label: "Featured project",
    slug: "havacilikta-yapay-zeka",
    title: "Artificial Intelligence in Aviation",
    result: "3rd in Türkiye",
    meta: "TEKNOFEST 2026",
    intro:
      "We built a system that handles three tasks at the same time using images from an aircraft. The software retrieves frames from the competition server, combines the outputs of three models and sends the result back. If the connection drops, it continues from the last frame. I led the team and integrated the models into a single workflow.",
    tasksTitle: "Three tasks",
    tasks: [
      {
        title: "Object detection",
        text: "Detects and classifies vehicles, people and landing areas in each frame, and also identifies landing and movement states.",
        tools: "YOLO · ByteTrack",
      },
      {
        title: "Position estimation",
        text: "When GPS data is unreliable, it calculates the aircraft's position from camera images using visual odometry.",
        tools: "DPVO · PyTorch",
      },
      {
        title: "Reference object search",
        text: "Searches the example image provided by the server in relevant frames and marks its position.",
        tools: "OWLv2 · DINOv3",
      },
    ],
    metricsTitle: "Full-length competition test",
    metrics: [
      { value: "2250/2250", label: "frames processed without errors" },
      { value: "8 → 2.4 GB", label: "GPU memory use" },
      { value: "45%", label: "shorter processing time" },
    ],
    more: "Project details",
  },
  projects: {
    title: "Projects",
    intro:
      "Competition projects, work from the workshop and personal projects. I also built the mechanical and electronic components alongside the software in most of them.",
    open: "View",
    items: [
      {
        slug: "havacilikta-yapay-zeka",
        title: "Artificial Intelligence in Aviation",
        meta: "TEKNOFEST 2026",
        year: "2026",
        result: "3rd in Türkiye",
        summary:
          "An image-based decision-support system for aerial platforms. Object detection, visual position estimation and reference-object search run in the same workflow.",
        role: "Team leadership, model integration, technical coordination",
        stack: ["Python", "PyTorch", "YOLO", "DPVO", "OWLv2"],
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "The competition server sends frames one at a time, and each frame needs a result for all three tasks. Our software connects to the server, downloads the frame, runs the models and sends back the prediction. If the connection is lost, it continues from where it stopped.",
            ],
          },
          {
            heading: "Tasks",
            bullets: [
              "Object detection: classify vehicles, people and landing areas and determine landing and movement states (YOLO, ByteTrack)",
              "Position estimation: calculate the vehicle's x, y and z position from camera images when GPS is unreliable (DPVO)",
              "Reference object search: find the example image supplied by the server in the relevant frames (OWLv2, DINOv3)",
            ],
          },
          {
            heading: "Engineering notes",
            bullets: [
              "Because DPVO's C++/CUDA build did not run on Windows, it was rewritten in pure PyTorch with the maths unchanged, allowing the system to run without WSL",
              "I found and split the unbounded memory growth in the correlation step: GPU use fell from 8 GB to 2.4 GB and processing time dropped by 45%",
              "I fixed the process communication error that crashed task 3 on Windows with a thread and queue-based reader",
              "A full 2,250-frame run, with all three tasks working together, completed without errors",
            ],
          },
          {
            heading: "Result",
            paragraphs: ["3rd in Türkiye in the TEKNOFEST 2026 Artificial Intelligence in Aviation Competition."],
          },
        ],
      },
      {
        slug: "hava-savunma-sistemi",
        title: "Air Defence System",
        meta: "TEKNOFEST 2024",
        year: "2024",
        result: "8th in Türkiye",
        summary:
          "A system that detects and tracks targets with a camera and produces a defence response. I developed the communication between the sensor data and mechanical control layer.",
        role: "Team captaincy, software algorithms, user interface",
        stack: ["C/C++", "Computer vision", "Microcontroller"],
        cover: {
          src: "/images/project-teamwork.jpg",
          alt: "Working on the turret system in the competition area with team members",
        },
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "Detections from the camera feed drive a rotating turret. The system tracks targets and can be monitored through the operator interface.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Team captaincy and competition process management",
              "Software algorithms for target detection and tracking",
              "The operator-facing user interface",
            ],
          },
          {
            heading: "Technical approach",
            bullets: [
              "The communication between sensor data and the mechanical control layer was written in C/C++",
              "Microcontroller integration made real-time target tracking possible",
              "The camera and control electronics were installed in a 3D-printed turret body",
            ],
          },
          {
            heading: "Result",
            paragraphs: ["8th in Türkiye in the TEKNOFEST 2024 Air Defence Systems Competition."],
          },
        ],
        gallery: [
          {
            src: "/images/project-teamwork.jpg",
            alt: "Working on the system in the competition area",
            caption: "Final adjustments in the competition area",
          },
          {
            src: "/images/project-turret-final.jpg",
            alt: "Completed turret and camera arrangement",
            caption: "Completed turret and camera arrangement",
          },
          {
            src: "/images/community-group.jpg",
            alt: "Team in the TEKNOFEST event area",
            caption: "TEKNOFEST event area",
          },
        ],
      },
      {
        slug: "insansiz-su-alti-araci",
        title: "Unmanned Underwater Vehicle",
        meta: "TEKNOFEST 2026",
        year: "2026",
        summary:
          "An autonomous vehicle for underwater exploration and mission operations. I developed the software, multi-sensor integration and control architecture.",
        role: "Software development, multi-sensor integration, control architecture",
        stack: ["Python", "Embedded systems", "Sensor integration"],
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "An autonomous vehicle that performs exploration and mission operations underwater. Developed for TEKNOFEST 2026.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Development of the vehicle software",
              "Combining multiple sensors in the same data stream",
              "Architectural design of the control systems",
            ],
          },
        ],
      },
      {
        slug: "insansiz-kara-araci",
        title: "Unmanned Ground Vehicle",
        meta: "TEKNOFEST 2026",
        year: "2026",
        summary:
          "An autonomous platform that performs simultaneous localisation, obstacle detection and route planning in challenging terrain.",
        role: "Autonomous driving algorithms, robotics system integration",
        stack: ["Python", "C/C++", "Raspberry Pi", "Sensor fusion"],
        cover: {
          src: "/images/hardware-wiring.jpg",
          alt: "The vehicle's control boards and wiring",
        },
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "A ground platform that determines its position in the field, detects obstacles and plans its route accordingly. Developed for TEKNOFEST 2026.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Autonomous driving algorithms",
              "Obstacle detection system built with Raspberry Pi and sensors",
              "Programming control boards to run concurrently with C/C++ algorithms",
            ],
          },
        ],
        gallery: [
          {
            src: "/images/hardware-wiring.jpg",
            alt: "Control electronics and wiring",
            caption: "Control electronics and wiring",
          },
        ],
      },
      {
        slug: "otonom-kule-mekanigi",
        title: "Autonomous Turret Mechanism",
        meta: "CAD and 3D production",
        year: "2024",
        summary:
          "A rotating turret body that carries the camera and control electronics. I modelled it in Fusion 360 and produced it on a 3D printer.",
        role: "Mechanical design, production, assembly",
        stack: ["Fusion 360", "3D printing"],
        cover: { src: "/images/cad-turret.jpg", alt: "Turret model in Fusion 360" },
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "The mechanical component of the air defence system. The body was designed to protect the camera and control boards while allowing free rotation.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Modelling the body from scratch in Fusion 360",
              "Adjusting printing parameters with thermal balance in mind",
              "Assembly of the parts and electronic arrangement",
            ],
          },
          {
            heading: "Production",
            paragraphs: [
              "The parts were printed on a Flashforge Adventurer 5M Pro using materials that require high temperatures.",
            ],
          },
        ],
        gallery: [
          { src: "/images/cad-turret.jpg", alt: "Turret model in Fusion 360", caption: "Fusion 360 model" },
          {
            src: "/images/project-turret-final.jpg",
            alt: "Printed and assembled turret",
            caption: "Printed and assembled version",
          },
        ],
      },
      {
        slug: "akilli-tarim-otomasyonu",
        title: "Smart Agriculture Automation",
        meta: "IoT",
        year: "2025",
        summary:
          "Our agricultural automation project named “Akıllı Tosunlar”. We made field sensor data remotely viewable through n8n workflows.",
        role: "Embedded software, automation design",
        stack: ["Arduino", "ESP32", "n8n"],
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "A hardware and automation setup intended to improve agricultural yield. Field sensor data is collected, processed and remotely monitored.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Arduino and ESP32-based data collection layer",
              "Connecting the data to n8n workflows",
              "Remote monitoring and notification setup",
            ],
          },
        ],
      },
      {
        slug: "ucus-simulasyonu-kontrol-paneli",
        title: "Flight Simulation Control Panel",
        meta: "Personal project",
        year: "2025",
        summary: "A physical cockpit panel whose switch and button layout I designed from scratch.",
        role: "Panel design, electronic assembly",
        stack: ["Electronics", "Panel production"],
        cover: { src: "/images/panel-wide.jpg", alt: "Completed flight simulation control panel" },
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "A physical control panel for flight simulation. The switch and button layout was drawn based on a real cockpit layout.",
            ],
          },
          {
            heading: "My contribution",
            bullets: [
              "Panel layout and labelling",
              "Switch, button and indicator assembly",
              "Wiring and computer connection",
            ],
          },
        ],
        gallery: [
          { src: "/images/panel-wide.jpg", alt: "Complete panel", caption: "Complete panel" },
          { src: "/images/panel-detail.jpg", alt: "Switch and label detail", caption: "Switch and label detail" },
        ],
      },
      {
        slug: "is-surecleri-otomasyonu",
        title: "Business Processes and Network Infrastructure",
        meta: "Freelance work",
        year: "2021–",
        summary:
          "I automated manually handled data work with n8n, Glide and VBA. I set up IP cameras, recording and network configurations.",
        role: "Automation design, network configuration",
        stack: ["n8n", "Glide", "VBA", "Networking"],
        sections: [
          {
            heading: "Scope",
            paragraphs: [
              "Automations that speed up operational work and the network infrastructure they run on for corporate and individual clients.",
            ],
          },
          {
            heading: "What I did",
            bullets: [
              "Moved manual data-processing steps to digital workflows with n8n, Glide and VBA",
              "IP camera installations and 24/7 recording setups",
              "Uninterrupted device communication through static IP and port forwarding",
            ],
          },
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    present: "present",
    items: [
  {
    start: "10.2026",
    end: "",
    current: true,
    role: "Workshop Instructor",
    org: "MBA Schools",
    bullets: [
      "Preparing students for competitions such as TEKNOFEST, TÜBİTAK and HEBOCON",
      "Developing end-to-end robotics projects with students",
      "Teaching software, electrical and mechanical subjects",
    ],
  },
  {
    start: "03.2026",
    end: "07.2026",
    role: "IMU Intern",
    org: "TRC Marine Electronic",
    bullets: [
      "System monitoring and field integrations in marine electronics",
      "Microcontroller-based embedded software development",
      "Organisation of technical staff training",
    ],
  },
  {
    start: "04.2025",
    end: "",
    current: true,
    role: "Project Coordinator",
    org: "Istanbul Nişantaşı University",
    bullets: [
      "Coordination and mentoring of student projects and technology teams",
      "Software architecture and process-management support for TEKNOFEST and TÜBİTAK teams",
    ],
  },
  {
    start: "11.2024",
    end: "12.2024",
    role: "Computer Vision and Artificial Intelligence Specialist",
    org: "Daz-Tech Innovation & Technology",
    note: "Project-based",
    bullets: [
      "Object detection and target-tracking algorithms for the defence industry",
      "Deep-learning-based anomaly analysis and decision-support models",
    ],
  },
  {
    start: "08.2023",
    end: "11.2023",
    role: "ManageEngine Developer",
    org: "Palcon Information Systems",
    bullets: [
      "Interface and back-end development on ManageEngine ITSM with Deluge and Python",
      "Automation and system integrations for corporate workflows",
    ],
  },
  {
    start: "12.2022",
    end: "06.2023",
    role: "Intern",
    org: "Yıldız Holding (Bizim Toptan)",
    bullets: [
      "Product implementation and integration in corporate systems",
      "Process development in eBA Workflow Management and Former",
      "Report templates and product tests",
    ],
  },
  {
    start: "12.2021",
    end: "06.2022",
    role: "Student Assistant",
    org: "Istanbul Nişantaşı University",
    bullets: [
      "ERP process analysis, technical documentation and project plans",
      "Front-end and back-end development for the “Nish Spor Sitesi” project",
    ],
  },
  {
    start: "09.2021",
    end: "",
    current: true,
    role: "Software and Systems Developer",
    org: "Freelance",
    bullets: [
      "Automation and custom software for business processes with Python, n8n and Glide",
      "Production-ready 3D mechanical design and prototyping in Fusion 360",
      "End-to-end solutions where software and hardware operate together",
    ],
  },
    ],
  },
  field: {
    title: "From the Field",
    intro:
  "I didn't start engineering at a desk. The engine room and the tatami are the two places that have shaped how I work most. There is also a year and a half in North Macedonia; I learnt Macedonian there.",
    stories: [
  {
    kicker: "2019–2021 · Marine engines",
    title: "In the engine room",
    text: [
      "While studying Marine Engineering at Ordu University, I spent time in the engine rooms of commercial ships operating on the Russia line (Rostov, Azov, Yeysk). In the open sea, spare parts and assistance are limited. You have to solve the fault there, with whatever you have.",
      "Working with millimetre tolerances in large diesel engines shaped how I approach parts I design and systems I test in the field.",
    ],
    photo: {
      src: "/images/engine-room.jpg",
      alt: "Serkan Acar in the engine control room of a commercial ship",
      caption: "Engine control room, Russia line",
    },
    secondary: {
      src: "/images/engine-room-desk.jpg",
      alt: "Completing shift records in the engine room",
      caption: "Shift records",
    },
  },
  {
    kicker: "2015 · Taekwondo and savate",
    title: "Habits carried over from the ring",
    text: [
      "I have practised taekwondo since a young age. I won gold at the 2015 Berlin Open and placed third in the 2015 Savate Turkish Championship in the same year. I travelled to Germany, France, Austria and Luxembourg for tournaments.",
      "I learnt to manage the pressure of competition day there. The same approach works in TEKNOFEST finals.",
    ],
    photo: {
      src: "/images/taekwondo-win.jpg",
      alt: "Serkan Acar raising his arms after a match as he receives a trophy",
      caption: "After the match, trophy ceremony",
    },
    secondary: {
      src: "/images/taekwondo-podium.jpg",
      alt: "At the Berlin Open with medals and trophies",
      caption: "Berlin Open, 2015",
    },
  },
    ],
  },
  software: {
    title: "Software",
    intro:
      "Work I have written outside competitions. Some is open source; some remains in private repositories because it was developed for organisations.",
    privateLabel: "private repo",
    liveLabel: "Live site",
    sourceLabel: "Source code",
    notebooks:
      "On top of these, there are more than 30 notebooks on GitHub covering CNNs, LSTMs, GANs, capsule networks, transfer learning and style transfer.",
    all: "All repositories",
    repos: [
      {
        name: "Ayvalık Keşfet",
        summary:
          "A bilingual travel guide for Ayvalık and Cunda. It includes maps, route planning, offline use and separate SEO for every page.",
        stack: "React · TypeScript · Leaflet",
        year: "2026",
        url: "https://github.com/Nakresss/ayvalik-kesfet",
        live: "https://ayvalik-kesfet.vercel.app",
      },
      {
        name: "Ders Programı",
        summary:
          "A clash-checking system that manages middle and high school timetables in one table. Teacher and classroom clashes are prevented by database constraints.",
        stack: "TypeScript · Supabase · PostgreSQL",
        year: "2026",
      },
      {
        name: "NakresOS",
        summary:
          "A panel for managing and monitoring MikroTik devices. Scheduled tasks, Telegram and email notifications and web filtering.",
        stack: "Next.js · Supabase · RouterOS API",
        year: "2026",
      },
      {
        name: "BoneScan-AI",
        summary: "A YOLOv8 model that marks signs of bone cancer in X-ray images.",
        stack: "Python · YOLOv8",
        year: "2024",
        url: "https://github.com/Nakresss/BoneScan-AI",
      },
      {
        name: "BoardScanner",
        summary: "A computer-vision model that identifies resistors, capacitors and integrated circuits on circuit boards.",
        stack: "Python · YOLO · OpenCV",
        year: "2024",
        url: "https://github.com/Nakresss/BoardScanner",
      },
      {
        name: "Reinforcement-Learner",
        summary: "A Deep Q-Network agent that solves the CartPole-v1 environment.",
        stack: "Python · DQN",
        year: "2024",
        url: "https://github.com/Nakresss/Reinforcement-Learner",
      },
      {
        name: "Baloon-Detection",
        summary: "Balloon detection for air-defence exercises.",
        stack: "Python · OpenCV",
        year: "2025",
        url: "https://github.com/Nakresss/Baloon-Detection",
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { label: "Programming", items: ["Python", "C/C++", "SQL", "TypeScript", "Deluge"] },
      {
        label: "Artificial intelligence",
        items: ["Computer vision", "Deep learning", "Machine learning", "NLP", "Data mining"],
      },
      {
        label: "Libraries",
        items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Ultralytics", "Scikit-Learn", "Django", "Flask"],
      },
      {
        label: "Embedded systems and hardware",
        items: ["Arduino", "ESP32", "Raspberry Pi", "Deneyap Kart", "Industrial automation"],
      },
      {
        label: "Tools",
        items: ["Git", "CI/CD", "Google Cloud", "Supabase", "MATLAB/Simulink", "n8n", "Glide"],
      },
      { label: "Design and production", items: ["Fusion 360", "3D modelling", "3D printing", "Prototyping"] },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        period: "2026–2027",
        program: "Master's degree, Artificial Intelligence Engineering",
        school: "Istanbul Nişantaşı University",
        current: true,
      },
      {
        period: "2021–2026",
        program: "Management Information Systems (100% English)",
        school: "Istanbul Nişantaşı University",
        detail: "Systems design, software development, database management, business intelligence and decision-support systems.",
      },
      {
        period: "2019–2021",
        program: "Marine Engineering",
        school: "Ordu University",
        detail: "Operation of mechanical systems, engine maintenance and repair, and ship safety.",
      },
    ],
  },
  certificates: {
    title: "Certificates",
    intro: "Certificates from courses, competitions and seminars. Items marked PDF open the certificate itself.",
    file: "PDF",
    groups: [
      {
        issuer: "Udemy · Artificial intelligence",
        items: [
          { name: "Machine Learning A-Z" },
          { name: "Deep Learning A-Z" },
          { name: "Artificial Intelligence and Computer Vision with Projects" },
        ],
      },
      {
        issuer: "Udemy · Software",
        items: [
          { name: "Python from Zero to Advanced" },
          { name: "Web Development with Python Django 5" },
          { name: "Algorithm Development and Introduction to Programming" },
        ],
      },
      {
        issuer: "T3 Foundation",
        items: [
          {
            name: "Artificial Intelligence in Aviation Finalist Certificate",
            year: "2026",
            href: "/certs/teknofest-2026-havacilikta-yapay-zeka-finalist.pdf",
          },
          { name: "Air Defence Systems Finalist Certificate", year: "2024" },
          { name: "Deneyap Kart TEKNOFEST Club Training", year: "2025" },
        ],
      },
      {
        issuer: "Summits and seminars",
        items: [
          { name: "National Technology Summit Achievement Certificate", year: "2026" },
          { name: "Defence Industry Academy Career Meetings", year: "2024" },
          { name: "T3 Sinaps Quantum Computers Seminar" },
        ],
      },
    ],
  },
  awards: {
    title: "Awards",
    items: [
      { year: "2026", title: "TEKNOFEST Artificial Intelligence in Aviation Competition", result: "3rd in Türkiye" },
      { year: "2024", title: "TEKNOFEST Air Defence Systems Competition", result: "8th in Türkiye" },
      { year: "2015", title: "Berlin Open Taekwondo Championship", result: "Gold medal" },
      { year: "2015", title: "Savate Turkish Championship", result: "3rd in Türkiye" },
    ],
    leadershipTitle: "Clubs",
    leadership: [
      {
        title: "Software and Information Club · Founding president",
        text: "Coordination of more than 1,000 members and over 50 technical projects.",
      },
      {
        title: "Teknofest Club · Vice president",
        text: "Formation of competition teams, report tracking and event management.",
      },
    ],
    interestsTitle: "In my spare time",
    interests: "Chess, photography, music and, still, taekwondo.",
  },
  contact: {
    title: "Contact",
    lead: "You can write for a project, collaboration or workshop idea. Email is the quickest way to reach me.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    copy: "Copy",
    copied: "Copied",
    cv: "CV (PDF, 2 pages, Turkish)",
  },
  projectPage: {
    back: "All projects",
    role: "My role",
    stack: "Tools",
    year: "Year",
    result: "Result",
    next: "Next project",
    photos: "Photos",
  },
  footer: {
    updated: "Last updated: November 2026",
    top: "Back to top",
    built: "Built with Next.js and hosted on Vercel.",
  },
  notFound: {
    title: "This page does not exist.",
    text: "The address may have changed or been entered incorrectly.",
    home: "Back to the homepage",
  },
};
