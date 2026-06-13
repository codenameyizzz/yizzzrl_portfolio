import { publicAsset } from '../utils/publicAsset';

export const socialLinks = [
  {
    href: 'https://github.com',
    label: 'GitHub',
    ariaLabel: 'GitHub profile',
    iconName: 'github'
  },
  {
    href: 'https://linkedin.com/in/yizreelschwartz',
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn profile',
    iconName: 'linkedin'
  },
  {
    href: 'mailto:yizreelschwartz180304@gmail.com',
    label: 'Email',
    ariaLabel: 'Send email to Yizreel',
    iconName: 'email'
  }
];

export const heroMetrics = [
  {
    term: 'Current role',
    description: 'Backend Developer at PT Suitmedia Kreasi Indonesia'
  },
  {
    term: 'Education',
    description: 'Informatics, CGPA 3.84 / 4.0'
  },
  {
    term: 'Focus',
    description: 'Backend systems, full-stack apps, cloud-based solutions'
  }
];

export const aboutPanels = [
  {
    label: 'Education',
    content: 'Del Institute of Technology, Informatics undergraduate, CGPA 3.84 / 4.0.',
    speed: 0.4
  },
  {
    label: 'Experience',
    content: 'Backend developer, research trainee, teaching assistant, and organization leader.',
    speed: 0.6
  },
  {
    label: 'Approach',
    content: 'I like structured systems, clear interfaces, and products that solve real problems.',
    speed: 0.8
  }
];

export const projectHighlights = [
  {
    title: 'TobaGen AI Discovery',
    description:
      'AI travel planner for Lake Toba with itinerary generation, saved plans, PDF export, and map-backed discovery.',
    preview: publicAsset('/projects/tobagen-preview.png'),
    previewAlt: 'Landing page preview for TobaGen AI Discovery',
    liveUrl: 'https://tobagen-ai.vercel.app/',
    repoUrl: 'https://github.com/codenameyizzz/tobagen-AI'
  },
  {
    title: 'MindShelf',
    description:
      'Local-first media link library for saving YouTube, Instagram, and web references with cached thumbnails and quiet browsing.',
    preview: publicAsset('/projects/mindshelf-preview.png'),
    previewAlt: 'Landing page preview for MindShelf',
    liveUrl: 'https://mindshelf-ten.vercel.app/',
    repoUrl: 'https://github.com/codenameyizzz/mindshelf'
  },
  {
    title: 'MoodTune',
    description:
      'Photo mood analysis app that turns image vibes into curated songs, books, and movies with Gemini-powered recommendations.',
    preview: publicAsset('/projects/moodtune-preview.png'),
    previewAlt: 'Landing page preview for MoodTune',
    liveUrl: 'https://moodtune-liard.vercel.app/',
    repoUrl: 'https://github.com/codenameyizzz/moodtune'
  },
  {
    title: 'SSH Visual File Explorer',
    description:
      'Browser-based SSH and SFTP explorer for browsing, editing, and downloading remote files without terminal workflows.',
    preview: publicAsset('/projects/ssh-visualizer-preview.png'),
    previewAlt: 'Landing page preview for SSH Visual File Explorer',
    liveUrl: 'https://ssh-visual-file-explorer.vercel.app/',
    repoUrl: 'https://github.com/codenameyizzz/ssh-visual-file-explorer'
  }
];

export const projects = [
  {
    period: 'Aug 2025 - Present',
    role: 'Software Engineer (Backend Developer)',
    title: 'Indonesia Stock Exchange Trading Operation Support System (IDX SPOP+)',
    description:
      'Responsible for developing obligation-related features in the SPOP CMS for equity products and services using ASP.NET and Razor views. I also handled legacy issues involving Syncfusion, AJAX Datatable flows, port issues, service synchronization, and view components based on analyst and client requirements.',
    tags: ['ASP.NET', 'Razor', 'Syncfusion', 'Legacy maintenance', 'Service sync'],
    speed: 0.85
  },
  {
    period: 'Jan 2025 - Present',
    role: 'Full-stack Developer',
    title: 'Campus Alumni Information System (CAIS)',
    description:
      'Built the frontend with Bootstrap and JavaScript, the backend with Node.js and Express.js, and supported microservices with Docker. The project also involved MariaDB database management, Git-based collaboration, Agile Scrum development, and secure authentication and authorization using Laravel Breeze with Google reCAPTCHA v3.',
    tags: ['Node.js', 'Express.js', 'Bootstrap', 'Docker', 'MariaDB'],
    speed: 1.05
  },
  {
    period: 'Nov 2024 - Dec 2024',
    role: 'Team Lead',
    title: 'Terra-Track',
    description:
      'Led a smart agriculture platform project using AI, IoT, and Huawei technologies to provide real-time soil and crop insights, with the goal of optimizing resources, improving productivity, and supporting sustainable farming. The project achieved National Runner-Up in the Huawei ICT Innovation Track 2024.',
    tags: ['AI', 'IoT', 'Huawei', 'Team leadership', 'Innovation'],
    speed: 1.2
  },
  {
    period: 'Aug 2024 - Sep 2024',
    role: 'Full-stack Web Developer',
    title: 'Auctions Website',
    description:
      'Developed an auctions website using React.js with Vite, JavaScript, and Bootstrap for the frontend, while integrating the public Delcom API to fetch and display auction-related data dynamically.',
    tags: ['React', 'Vite', 'JavaScript', 'Bootstrap', 'API integration'],
    speed: 0.95
  },
  {
    period: 'Academic project',
    role: 'Algorithm and visualization',
    title: 'Numbrix Solver',
    description:
      'Implemented a Numbrix solver using a Depth-First Search with backtracking algorithm in Python, then created a Tkinter-based GUI to visualize how the solution is discovered step by step.',
    tags: ['Python', 'DFS', 'Backtracking', 'Tkinter', 'Visualization'],
    speed: 1.1
  },
  {
    period: 'Jun 2024 - Jul 2024',
    role: 'Web Developer',
    title: 'FilmMania',
    description:
      'Developed a Laravel 11 web application for managing reviews, notes, and watchlists. The project used Laravel Eloquent for database operations, migrations for schema management, and phpMyAdmin with MySQL for administration.',
    tags: ['Laravel 11', 'PHP', 'MySQL', 'Eloquent', 'Migrations'],
    speed: 0.9
  }
];

export const experienceTimeline = [
  {
    period: 'Aug 2025 - Present',
    organization: 'PT Suitmedia Kreasi Indonesia',
    title: 'Software Engineer (Backend Developer)',
    description:
      'Selected through the Magang Berdampak program and trusted with databases, service synchronization, layouts, entry forms, and backend-oriented product work for enterprise systems.'
  },
  {
    period: 'Jan 2025 - Present',
    organization: 'Garuda ACE x University of Chicago',
    title: 'Research Trainee',
    description:
      'Exploring AI and ML, backend systems, and open-source frameworks through remote research training connected to Prof. Haryadi Gunawi and advanced systems topics.'
  },
  {
    period: 'Aug 2024 - Dec 2024',
    organization: 'Del Institute of Technology',
    title: 'Teaching Assistant - Computer Network',
    description:
      'Supported practical labs on routers, switches, configuration tools, and the OSI and TCP/IP reference models while helping students build confidence in hands-on networking work.'
  },
  {
    period: 'Aug 2024 - Present',
    organization: 'Del Data Science Club',
    title: 'Chairman of Organization',
    description:
      'Leading workshops, study groups, and collaborative projects that help students learn data science through practical activities, technical sessions, and community-driven growth.'
  }
];

export const techStack = [
  ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 0.3],
  ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 0.34],
  ['Bootstrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', 0.38],
  ['ASP.NET', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg', 0.42],
  ['Laravel', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', 0.46],
  ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', 0.5],
  ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', 0.54],
  ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 0.58],
  ['MariaDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg', 0.62],
  ['SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', 0.66],
  ['Google Cloud', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', 0.7],
  ['Docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', 0.74],
  ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', 0.78],
  ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', 0.82],
  ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 0.86],
  ['Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', 0.9],
  ['TensorFlow', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', 0.94],
  ['PyTorch', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', 0.98],
  ['n8n', 'https://cdn.simpleicons.org/n8n/EA4B71', 1.02]
].map(([label, icon, speed]) => ({ label, icon, speed }));

export const achievements = [
  {
    badge: 'Silver Medal',
    title: 'Huawei ICT Competition Innovation Track 2024',
    summary: 'National level / Indonesia',
    hoverCopy: 'Hover to preview the significance, then click for full details.',
    modalTitle: 'Silver Medal - Huawei ICT Competition Innovation Track 2024',
    modalDescription:
      'Won Silver Medal at the National Huawei ICT Competition Innovation Track 2024 in Indonesia. This result reflects strong problem solving, teamwork, and innovation through Terra-Track, a smart agriculture platform using AI and IoT.',
    delay: '0.04s'
  },
  {
    badge: 'Silver Medal',
    title: 'Huawei ICT Competition Computing Track 2025',
    summary: 'National level / Indonesia',
    hoverCopy: 'Recognition for technical depth and competitive computing skills.',
    modalTitle: 'Silver Medal - Huawei ICT Competition Computing Track 2025',
    modalDescription:
      'Won Silver Medal at the National Huawei ICT Competition Computing Track 2025 in Indonesia. This recognition highlights technical depth across computing-oriented problem solving and competitive software engineering skill.',
    delay: '0.1s'
  },
  {
    badge: 'Silver Medal',
    title: 'Campus Capture the Flag Competition 2024',
    summary: 'IT Del x PoltekSSN / Institut Teknologi Del',
    hoverCopy: 'Security challenge achievement with hands-on capture-the-flag work.',
    modalTitle: 'Silver Medal - Campus Capture the Flag Competition 2024',
    modalDescription:
      'Won Silver Medal in the Campus Capture the Flag Competition held by IT Del x PoltekSSN in 2024 at Institut Teknologi Del. This shows practical security and problem-solving capability in a hands-on competitive setting.',
    delay: '0.16s'
  },
  {
    badge: 'Finalist',
    title: 'Huawei ICT Competition Cloud Track 2024',
    summary: 'National level / Indonesia',
    hoverCopy: 'Finalist recognition in cloud-oriented technical competition.',
    modalTitle: 'Finalist - Huawei ICT Competition Cloud Track 2024',
    modalDescription:
      'Reached finalist level in the National Huawei ICT Competition Cloud Track 2024 in Indonesia, demonstrating strong understanding of cloud concepts, architecture, and applied technical readiness.',
    delay: '0.22s'
  },
  {
    badge: 'Top 30',
    title: 'National BPJS Capture The Flag Competition',
    summary: 'National level / Indonesia',
    hoverCopy: 'Top 30 national placement in a cybersecurity competition.',
    modalTitle: 'Top 30 Team - National BPJS Capture The Flag Competition',
    modalDescription:
      'Placed in the Top 30 teams in the national Capture The Flag competition organized by BPJS in Indonesia. This achievement reflects consistency in cybersecurity challenges and competitive technical analysis.',
    delay: '0.28s'
  },
  {
    badge: 'Delegation',
    title: 'Indonesia-China Youth Exchange Program 2024',
    summary: 'International / Indonesia and China',
    hoverCopy: 'International representation with technology and cultural exchange exposure.',
    modalTitle: 'Indonesia Delegation - Indonesia-China Youth Exchange Program 2024',
    modalDescription:
      'Selected as part of the Indonesia delegation for the international Indonesia-China Youth Exchange Program 2024, representing Indonesia in a cross-country program spanning Indonesia and China with exposure to industry and technology exchange.',
    delay: '0.34s'
  },
  {
    badge: 'Regional',
    title: 'KNMIPA 2023',
    summary: 'Regional participant / Indonesia',
    hoverCopy: 'Academic competition participation in mathematics and science.',
    modalTitle: 'Regional Participant - KNMIPA 2023',
    modalDescription:
      'Selected as a regional participant in Kompetisi Nasional Matematika dan Ilmu Pengetahuan Alam (KNMIPA) 2023, reflecting strong academic capability in science and analytical reasoning.',
    delay: '0.4s'
  },
  {
    badge: 'Regional',
    title: 'KNMIPA 2024',
    summary: 'Regional participant / Indonesia',
    hoverCopy: 'Continued academic competition participation and consistency.',
    modalTitle: 'Regional Participant - KNMIPA 2024',
    modalDescription:
      'Selected again as a regional participant in Kompetisi Nasional Matematika dan Ilmu Pengetahuan Alam (KNMIPA) 2024, showing continuity in academic competitiveness and analytical performance.',
    delay: '0.46s'
  }
];

export const awards = [
  {
    image: publicAsset('/awards/Yizreel_Achievement_1.jpg'),
    alt: 'Award highlight for Yizreel Schwartz Sipahutar',
    title: 'Huawei ICT Innovation Track',
    description:
      'National Runner-Up for Terra-Track, a smart agriculture platform powered by AI and IoT.'
  },
  {
    image: publicAsset('/awards/Yizreel_Achievement_2.jpg'),
    alt: 'Competition achievement for Yizreel Schwartz Sipahutar',
    title: 'Huawei ICT Cloud Track',
    description:
      'National finalist recognition for technical depth, delivery, and competitive problem solving.'
  },
  {
    image: publicAsset('/awards/Yizreel_Achievement_3.jpg'),
    alt: 'Recognition and award photo for Yizreel Schwartz Sipahutar',
    title: 'Leadership and Technical Recognition',
    description:
      'Milestones across engineering, research, and student leadership experience.'
  },
  {
    image: publicAsset('/awards/2nd.png'),
    alt: 'National competition recognition visual',
    title: 'National Competition Recognition',
    description: 'Additional achievement record from competition and portfolio milestones.'
  },
  {
    image: publicAsset('/awards/Hari Batik Jakarta.jpg'),
    alt: 'Achievement or event photo from Jakarta',
    title: 'Event Documentation',
    description: 'Public activity and documented presence in achievement-related events.'
  },
  {
    image: publicAsset('/awards/WhatsApp Image 2025-12-16 at 13.55.18.jpeg'),
    alt: 'Additional milestone photo for achievements',
    title: 'Additional Milestone',
    description: 'Supplementary photo from the wider archive of achievements and recognition.'
  }
];

export const blogPosts = [
  {
    slug: 'blog-cybersecurity-government',
    title: 'Keamanan Siber dalam Infrastruktur Digital Pemerintah: Melindungi Data dan Kepercayaan Publik',
    listTitle: 'Keamanan Siber dalam Infrastruktur Digital Pemerintah: Melindungi Data dan Kepercayaan Publik',
    metaDescription:
      'Artikel Yizreel Schwartz Sipahutar tentang keamanan siber dalam infrastruktur digital pemerintah dan pentingnya menjaga data serta kepercayaan publik.',
    pageTitle: 'Keamanan Siber dalam Infrastruktur Digital Pemerintah - Yizreel Schwartz Sipahutar',
    lang: 'id',
    heroEyebrow: '14 November 2025 / Government / Cyber Security',
    listMeta: ['Government', 'Cyber security'],
    listExcerpt:
      'Transformasi digital pemerintah membutuhkan fondasi keamanan siber yang kuat untuk melindungi data sensitif, menjaga layanan publik, dan mempertahankan kepercayaan masyarakat.',
    featured: true,
    thumbClassName: 'blog-thumb-cyber',
    featuredCta: 'Baca artikel',
    intro: 'Penulis Yizreel Schwartz Sipahutar (Software Engineer) - Editor Jessica Patricia (Copywriter)',
    body: [
      {
        type: 'p',
        content:
          'Transformasi digital telah mengubah cara pemerintah beroperasi dan melayani masyarakat. Dari sistem administrasi hingga layanan publik berbasis data, hampir seluruh aspek pemerintahan kini bergantung pada infrastruktur digital yang saling terhubung. Namun, di balik efisiensi dan transparansi yang ditawarkan teknologi, muncul tantangan baru berupa ancaman siber yang semakin kompleks dan terorganisir.'
      },
      {
        type: 'p',
        content:
          'Serangan terhadap sistem pemerintahan bukan hanya berpotensi merugikan secara finansial, tetapi juga dapat mengguncang kepercayaan publik dan mengancam stabilitas nasional. Oleh karena itu, keamanan siber menjadi fondasi penting dalam menjaga keberlanjutan pemerintahan digital yang aman, andal, dan terpercaya.'
      },
      {
        type: 'lead',
        label: 'Gagasan utama',
        content:
          'Keamanan siber dalam sektor pemerintah bukan lapisan tambahan setelah sistem jadi, melainkan fondasi yang menjaga layanan publik tetap aman, data warga tetap terlindungi, dan kepercayaan masyarakat tetap utuh.'
      },
      {
        type: 'quote',
        content:
          'Tanpa perlindungan siber yang kuat, transformasi digital pemerintah dapat kehilangan dua hal yang paling penting: kontinuitas layanan dan kepercayaan publik.'
      },
      {
        type: 'h2',
        content: 'Apa Itu Keamanan Siber atau Cyber Security?'
      },
      {
        type: 'p',
        content:
          'Keamanan siber atau cyber security adalah solusi dan praktik yang dirancang untuk melindungi organisasi atau instansi dari ancaman siber seperti data breach maupun disruptive cyber attacks. Dalam konteks pemerintahan, hal ini mencakup perlindungan data sensitif warga negara, informasi rahasia, dan infrastruktur kritis yang dapat terganggu oleh serangan siber.'
      },
      {
        type: 'h2',
        content: 'Bagaimana Contoh Keamanan Siber di Indonesia?'
      },
      {
        type: 'p',
        content:
          'Dalam era transformasi digital pemerintah, keamanan siber menjadi salah satu aspek yang sangat krusial karena lembaga pemerintah semakin bergantung pada infrastruktur digital untuk skalabilitas, fleksibilitas, dan ketahanan. Namun, adopsi teknologi ini juga membawa risiko seperti kesalahan konfigurasi dan kerentanan pihak ketiga.'
      },
      {
        type: 'p',
        content:
          'Di Indonesia, pemerintahan digital didukung oleh keamanan siber sebagai pilar utama untuk membangun digital trust dan mengoptimalkan layanan publik. Tanpa keamanan siber yang kuat, serangan siber dapat menyebabkan kerugian signifikan, termasuk hilangnya kepercayaan publik dan gangguan pada layanan esensial seperti pajak, kesehatan, dan administrasi publik.'
      },
      {
        type: 'h2',
        content: 'Peran Keamanan Siber dan Prinsip Dasar Keamanan Informasi'
      },
      {
        type: 'p',
        content:
          'Peran keamanan siber dalam infrastruktur digital pemerintah jauh melampaui sekadar menjaga sistem dari serangan. Ia menjadi fondasi untuk menjalankan pemerintahan yang efektif dan terpercaya melalui tiga prinsip dasar keamanan informasi: Confidentiality, Integrity, dan Availability.'
      },
      {
        type: 'p',
        content:
          'Perlindungan Data Warga Negara (Confidentiality) Pemerintah menyimpan volume data pribadi yang sangat besar. Keamanan siber bertugas mengenkripsi dan mengamankan data ini dari akses tidak sah. Kegagalan perlindungan akan merusak privasi dan mengakibatkan kerugian bagi individu.'
      },
      {
        type: 'p',
        content:
          'Menjaga Integritas Infrastruktur (Integrity and Availability) Infrastruktur digital kritis seperti sistem energi, transportasi, dan kesehatan harus selalu akurat dan beroperasi. Keamanan siber memastikan data tidak dimodifikasi oleh pihak yang tidak berhak dan sistem tetap tersedia saat dibutuhkan.'
      },
      {
        type: 'p',
        content:
          'Membangun dan Mempertahankan Kepercayaan Publik Kepercayaan publik adalah modal terpenting pemerintah. Ketika keamanan siber diterapkan dengan kuat dan transparan, masyarakat merasa aman saat menggunakan layanan digital pemerintah.'
      },
      {
        type: 'p',
        content:
          'Mempertahankan Kedaulatan Digital Dalam konteks geopolitik, serangan siber dapat menjadi alat spionase atau sabotase. Keamanan siber yang kuat menjadi instrumen pertahanan nasional untuk melindungi informasi rahasia dan menegaskan kedaulatan negara atas ruang sibernya.'
      },
      {
        type: 'h2',
        content: 'Strategi Pemerintah dalam Memperkuat Keamanan Siber'
      },
      {
        type: 'p',
        content:
          'Pemerintah Indonesia melalui Badan Siber dan Sandi Negara (BSSN) telah merumuskan strategi komprehensif yang mengacu pada lima pilar Global Cybersecurity Index. Strategi ini berfokus pada pendekatan berlapis, mulai dari regulasi, teknologi, sumber daya manusia, hingga kerja sama lintas sektor.'
      },
      {
        type: 'p',
        content:
          '1. Penguatan Regulasi dan Tata Kelola Strategi Keamanan Siber Nasional, adopsi standar internasional seperti ISO/IEC 27001, dan dorongan terhadap regulasi komprehensif seperti RUU Keamanan dan Ketahanan Siber menjadi dasar tata kelola yang kuat.'
      },
      {
        type: 'p',
        content:
          '2. Implementasi Teknologi Pertahanan Tingkat Lanjut Pemerintah mendorong penerapan Zero Trust Architecture, penguatan CSIRT di berbagai instansi, serta penggunaan solusi kriptografi nasional untuk menjaga kedaulatan digital.'
      },
      {
        type: 'p',
        content:
          '3. Pengembangan Kapasitas Sumber Daya Manusia Program literasi keamanan siber, kampanye kesadaran publik, pelatihan profesional, dan sertifikasi menjadi faktor utama dalam membangun ketahanan organisasi.'
      },
      {
        type: 'p',
        content:
          '4. Kerjasama Internasional dan Nasional Kolaborasi antara pemerintah, sektor swasta, akademisi, dan forum internasional membantu memperkuat threat intelligence serta kesiapan terhadap ancaman baru.'
      },
      {
        type: 'h2',
        content: 'Apa Hal yang Perlu Dilakukan Pemerintah?'
      },
      {
        type: 'p',
        content:
          'Pemerintah perlu memahami bahwa keamanan siber adalah pilar integral dari digital trust dan harus diperlakukan sebagai investasi strategis nasional, bukan sekadar biaya operasional. Prioritas kepemimpinan, pendekatan adaptif, dan fokus pada manusia menjadi faktor utama dalam implementasi yang efektif.'
      },
      {
        type: 'h2',
        content: 'Menuju Keamanan dan Kepercayaan Digital yang Berkelanjutan'
      },
      {
        type: 'p',
        content:
          'Dengan fondasi keamanan siber yang kuat, pemerintah dapat membangun infrastruktur digital yang tangguh sekaligus memperkuat kepercayaan publik terhadap layanan digitalnya. Namun, keberhasilan transformasi digital tidak hanya bergantung pada sistem yang aman, tetapi juga pada komunikasi publik yang efektif dan keterlibatan komunitas digital yang aktif.'
      },
      {
        type: 'p',
        content:
          'Sebagai digital agency Indonesia, Suitmedia tidak hanya membantu instansi pemerintah memperkuat keamanan dan transparansi digital, tetapi juga mengelola hubungan dengan masyarakat melalui strategi community management yang strategis dan berbasis data. Dengan menciptakan komunitas digital yang dinamis, Suitmedia membantu membangun kepercayaan, memperluas jangkauan komunikasi, serta meningkatkan loyalitas publik terhadap layanan digital pemerintah.'
      },
      {
        type: 'p',
        content: 'Industry: Government'
      },
      {
        type: 'p',
        content: 'Expertises: IT Strategy and Governance'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Cyber security, government infrastructure, and public trust.'
    ]
  },
  {
    slug: 'blog-legacy-systems',
    title: 'Handling legacy issues in enterprise software without losing delivery speed',
    listTitle: 'Handling legacy issues in enterprise software without losing delivery speed',
    metaDescription:
      'An article by Yizreel Schwartz Sipahutar on handling legacy issues in enterprise software while maintaining delivery speed.',
    pageTitle: 'Handling Legacy Issues - Yizreel Schwartz Sipahutar',
    lang: 'en',
    heroEyebrow: 'Backend systems / Technical note',
    listMeta: ['Backend systems', 'Technical note'],
    listExcerpt:
      'What I learn from synchronization issues, port conflicts, brittle views, and maintaining complex backend environments without slowing delivery.',
    thumbClassName: 'blog-thumb-legacy',
    intro:
      'Enterprise systems rarely fail because of one dramatic problem. More often, they slow teams down through accumulated complexity: synchronization issues, aging dependencies, brittle views, and unclear service boundaries.',
    body: [
      {
        type: 'p',
        content:
          'Working around legacy issues teaches a different kind of engineering discipline. Instead of chasing ideal architecture immediately, the first job is understanding where risk lives. In a business-critical system, even a small fix can affect reporting flows, forms, integrations, or user expectations that have existed for years.'
      },
      {
        type: 'p',
        content:
          'What matters is the ability to reduce uncertainty step by step. I focus on tracing the real source of the issue, isolating impact, and making improvements that preserve delivery speed. That often means reading old logic carefully, reviewing how synchronization behaves across services, and making targeted improvements before attempting bigger structural cleanup.'
      },
      {
        type: 'p',
        content:
          'Legacy work is not glamorous, but it builds strong engineering judgment. It teaches patience, careful debugging, communication with analysts and stakeholders, and the ability to move a system forward without breaking what people depend on.'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Backend systems, delivery, and maintenance thinking.'
    ]
  },
  {
    slug: 'blog-research-systems',
    title: 'What research training taught me about AI, backend systems, and engineering discipline',
    listTitle: 'What research training taught me about AI, backend systems, and engineering discipline',
    metaDescription:
      'An article by Yizreel Schwartz Sipahutar on research training, AI, backend systems, and engineering discipline.',
    pageTitle: 'Research and Systems - Yizreel Schwartz Sipahutar',
    lang: 'en',
    heroEyebrow: 'Research and practice / Reflection',
    listMeta: ['Research and practice', 'Reflection'],
    listExcerpt:
      'Connecting Spark, Hadoop, HDFS, Cassandra, TensorFlow, and PyTorch thinking with real engineering decisions and technical maturity.',
    thumbClassName: 'blog-thumb-research',
    intro:
      'Research training expands how I think about systems. It pushes me beyond implementation into deeper questions about performance, scale, reliability, and why certain architectural decisions matter.',
    body: [
      {
        type: 'p',
        content:
          'Topics like Spark, Hadoop, HDFS, Cassandra, TensorFlow, and PyTorch are not only academic subjects. They reveal patterns about distributed computation, data movement, training workflows, and system constraints that also apply to practical engineering work.'
      },
      {
        type: 'p',
        content:
          'What I value most from this kind of learning is discipline. Research encourages more careful reasoning, stronger curiosity, and a habit of asking whether a solution is merely working or whether it is actually robust, scalable, and well understood.'
      },
      {
        type: 'p',
        content:
          'That mindset helps in everyday engineering. Even when building web systems, I carry the same habit of tracing assumptions, measuring tradeoffs, and trying to understand the structure behind the tool rather than only using it at the surface level.'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Research learning, systems thinking, and technical discipline.'
    ]
  },
  {
    slug: 'blog-community-leadership',
    title: 'Leading a student data science organization through workshops, study groups, and real projects',
    listTitle: 'Leading a student data science organization through workshops, study groups, and real projects',
    metaDescription:
      'An article by Yizreel Schwartz Sipahutar on leading a student data science organization and building learning communities.',
    pageTitle: 'Community Leadership - Yizreel Schwartz Sipahutar',
    lang: 'en',
    heroEyebrow: 'Leadership / Community building',
    listMeta: ['Leadership', 'Community building'],
    listExcerpt:
      'How community work at DDSC shapes technical growth, collaboration habits, and a more practical learning culture.',
    thumbClassName: 'blog-thumb-community',
    intro:
      'A technical community grows best when people are given practical reasons to stay curious. Good leadership creates the structure that turns interest into momentum.',
    body: [
      {
        type: 'p',
        content:
          'At Del Data Science Club, the goal is not just to run events, but to make learning feel concrete. Workshops, study groups, collaborative projects, and guest sessions help members move from theory to application.'
      },
      {
        type: 'p',
        content:
          'Community leadership also develops communication. It requires translating technical ideas into something approachable, organizing people with different skill levels, and creating an environment where asking questions feels normal rather than intimidating.'
      },
      {
        type: 'p',
        content:
          'For me, this kind of work complements software engineering. It sharpens responsibility, improves collaboration habits, and builds a stronger sense of how teams learn and grow together over time.'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Leadership, learning culture, and technical community building.'
    ]
  },
  {
    slug: 'blog-fullstack-shipping',
    title: 'From React and Laravel to Docker and MariaDB: building systems that actually ship',
    listTitle: 'From React and Laravel to Docker and MariaDB: building systems that actually ship',
    metaDescription:
      'An article by Yizreel Schwartz Sipahutar on building full-stack systems that actually ship.',
    pageTitle: 'Full-Stack Shipping - Yizreel Schwartz Sipahutar',
    lang: 'en',
    heroEyebrow: 'Full-stack development / Build log',
    listMeta: ['Full-stack development', 'Build log'],
    listExcerpt:
      'A writing direction about turning frameworks, infrastructure, and database choices into products that are usable, maintainable, and secure.',
    thumbClassName: 'blog-thumb-fullstack',
    intro:
      'A working product is more than a collection of frameworks. It is the result of decisions that align interface quality, backend logic, data design, deployment, and team workflow.',
    body: [
      {
        type: 'p',
        content:
          'What I enjoy about full-stack work is how every layer influences the others. Frontend decisions affect API design. Authentication choices affect database structure. Deployment and service boundaries affect how features can evolve later.'
      },
      {
        type: 'p',
        content:
          'Frameworks like React, Laravel, Express.js, and Docker are useful, but they matter most when they support a system that can actually be delivered, maintained, and improved. Shipping means thinking about usability, reliability, version control, and secure flows at the same time.'
      },
      {
        type: 'p',
        content:
          'The best full-stack work feels connected. Each technical choice should support the product instead of becoming separate complexity that teams carry indefinitely.'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Full-stack delivery, maintainability, and shipping mindset.'
    ]
  },
  {
    slug: 'blog-terra-track',
    title: 'How Terra-Track grew from an idea into a national runner-up innovation project',
    listTitle: 'How Terra-Track grew from an idea into a national runner-up innovation project',
    metaDescription:
      'An article by Yizreel Schwartz Sipahutar on how Terra-Track became a national runner-up innovation project.',
    pageTitle: 'Terra-Track Case Study - Yizreel Schwartz Sipahutar',
    lang: 'en',
    heroEyebrow: 'Competition / Case study',
    listMeta: ['Competition', 'Case study'],
    listExcerpt:
      'A deeper case study on problem framing, AI and IoT direction, team leadership, and presenting innovation in a competitive setting.',
    thumbClassName: 'blog-thumb-terra',
    intro:
      'Innovation projects become meaningful when they solve a clear problem and communicate that value convincingly. Terra-Track was shaped around practical agricultural insight, not just technical novelty.',
    body: [
      {
        type: 'p',
        content:
          'Terra-Track focused on a clear need: improving how farmers understand soil and crop conditions in real time. Using AI, IoT, and Huawei-oriented technologies, the project aimed to make resource usage more efficient and farming decisions more informed.'
      },
      {
        type: 'p',
        content:
          'What made the work valuable was the combination of technical direction and storytelling. A strong competition project is not only about the tools used, but also about why the solution matters, how the system is structured, and how the team presents the impact.'
      },
      {
        type: 'p',
        content:
          'Reaching national runner-up status reinforced an important lesson for me: strong products emerge when engineering, teamwork, and communication work together rather than separately.'
      }
    ],
    footer: [
      'Blog article - Yizreel Schwartz Sipahutar.',
      'Innovation work, competition thinking, and Terra-Track.'
    ]
  }
];

export const primaryContactLinks = [
  {
    href: 'https://drive.google.com/file/d/115rcYevSjgu-hWZaTYLL5ZmSsAySi679/view?usp=sharing',
    label: 'Access CV',
    external: true
  },
  {
    href: 'mailto:yizreelschwartz180304@gmail.com',
    label: 'yizreelschwartz180304@gmail.com'
  },
  {
    href: 'mailto:ifs22038@del.ac.id',
    label: 'ifs22038@del.ac.id'
  },
  {
    href: 'tel:+6281363333029',
    label: '(+62) 81363333029'
  },
  {
    href: 'https://linkedin.com/in/yizreelschwartz',
    label: 'linkedin.com/in/yizreelschwartz',
    external: true
  }
];

export const projectCtaLinks = [
  { href: '/blog', label: 'Go to blog', internal: true },
  {
    href: 'https://drive.google.com/file/d/115rcYevSjgu-hWZaTYLL5ZmSsAySi679/view?usp=sharing',
    label: 'Access CV',
    external: true
  },
  { href: '/#contact', label: 'Contact me', internal: true },
  { href: 'https://linkedin.com/in/yizreelschwartz', label: 'LinkedIn', external: true },
  { href: 'mailto:yizreelschwartz180304@gmail.com', label: 'Email' }
];

export const blogCtaLinks = [
  { href: '/projects', label: 'Go to projects', internal: true },
  {
    href: 'https://drive.google.com/file/d/115rcYevSjgu-hWZaTYLL5ZmSsAySi679/view?usp=sharing',
    label: 'Access CV',
    external: true
  },
  { href: '/#contact', label: 'Contact me', internal: true },
  { href: 'https://linkedin.com/in/yizreelschwartz', label: 'LinkedIn', external: true },
  { href: 'mailto:ifs22038@del.ac.id', label: 'Academic email' }
];

export const homeFooter = [
  'Yizreel Schwartz Sipahutar - portfolio, projects, writing, and achievements.',
  'Final-year Informatics student focused on backend systems and full-stack development.'
];

export const projectsFooter = [
  'Projects page - Yizreel Schwartz Sipahutar.',
  'Backend systems, full-stack apps, product experimentation.'
];

export const blogFooter = [
  'Blog page - Yizreel Schwartz Sipahutar.',
  'Technical reflections, article ideas, and engineering writing.'
];
