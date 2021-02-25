var dataQuest = [
  {
    id: 0,
    question:
      "Pilihlah pernyataan-pernyataan yang paling sesuai dan menggambarkan diri anda. Pada setiap bagian, anda bebas memilih berapapun pernyataan tentang diri anda!",
    answer: [{ id: 0, data: "Ya saya mengerti", active: false }],
  },
  {
    id: 1,
    question: "BAGIAN 1 - KONVENSIONAL",
    answer: [
      { id: 1, data: "Bagian Administrasi" },
      { id: 1, data: "Resepsionis" },
      { id: 1, data: "Gaya hidup praktis dan senyaman mungkin" },
      {
        id: 1,
        data: "Tertarik dengan Topik nyata sehari - hari dibanding fiktif",
      },
      { id: 1, data: "Bermain Kartu" },
      { id: 1, data: "Kolektor Barang Antik" },
      { id: 1, data: "Pengawas Bangunan" },
      { id: 1, data: "Mengerjakan tugas dengan rapi dan teratur" },
      { id: 1, data: "Pendapat dan Perilaku biasa saja" },
      { id: 1, data: "Meng hargai Tradisi di Sekitar" },
      { id: 1, data: "Asisten Perpustakaan" },
      { id: 1, data: "Akuntan" },
    ],
  },
  {
    id: 2,
    question: "BAGIAN 2 - SOSIAL",
    answer: [
      { id: 2, data: "Rohaniawan / Agamawan" },
      { id: 2, data: "Berusaha Ramah meskipun merasa kurang nyaman" },
      { id: 2, data: "Konselor" },
      { id: 2, data: "Ayah / Ibu rumah tangga yang baik" },
      { id: 2, data: "Perawat" },
      { id: 2, data: "Olahraga bersama teman" },
      { id: 2, data: "Anggota Club / Organisasi" },
      { id: 2, data: "Bersosialisasi dengan berbagai orang" },
      {
        id: 2,
        data: "Bijaksana dalam kritik agar tidak menyakiti hati orang lain",
      },
      { id: 2, data: "Menolong dan berbagi pengalaman dengan banyak orang" },
      { id: 2, data: "Guru" },
      { id: 2, data: "Menikmati situasi kerjasama" },
    ],
  },
  {
    id: 3,
    question: "BAGIAN 3 - INVESTIGATIF",
    answer: [
      { id: 3, data: "Programer Komputer" },
      { id: 3, data: "Asisten Peneliti Laboratorium" },
      { id: 3, data: "Penerjemah Buku" },
      { id: 3, data: "Profesor / Peneliti" },
      { id: 3, data: "Dokter" },
      { id: 3, data: "Catur , Game Strategi" },
      {
        id: 3,
        data: "Menganalisa / Belajar per kembangan pengetahuan atau seni",
      },
      { id: 3, data: "Memahami Informasi dengan Benar dan Tepat" },
      { id: 3, data: "Meng hargai diskusi berbagai topik (bukan gosip)" },
      { id: 3, data: "Berpikir matang sebelum me mutuskan meski waktu lama" },
      { id: 3, data: "Membaca Buku / Jurnal Ilmiah" },
      { id: 3, data: "Tidak mudah menerima pendapat / pandangan baru" },
    ],
  },
  {
    id: 4,
    question: "BAGIAN 4 - ARTISTIK",
    answer: [
      {
        id: 4,
        data:
          "Mengagumi Orisinalitas / Keaslian diri seseorang (fisik / mental)",
      },
      { id: 4, data: "Aktor / Aktris" },
      { id: 4, data: "Perancang Seni / Busana, Kerajinan" },
      { id: 4, data: "Musikus" },
      { id: 4, data: "Menari" },
      { id: 4, data: "Fotografi" },
      { id: 4, data: "Arsitek" },
      { id: 4, data: "Mudah meng ekspresikan perasaan secara spontan" },
      {
        id: 4,
        data: "Sering melakukan aktivitas yang mengejutkan / tak terduga",
      },
      {
        id: 4,
        data: "Tertarik pada hal baru tanpa meng hiraukan asal muasalnya",
      },
      { id: 4, data: "Pengarang Buku / Novel" },
      {
        id: 4,
        data: "Lebih menyukai kesan menyeluruh dibanding detail-detail konkrit",
      },
    ],
  },
  {
    id: 5,
    question: "BAGIAN 5 - REALISTIK",
    answer: [
      { id: 5, data: "Menikmati aktivitas manual / fisik" },
      { id: 5, data: "Ahli Perkayuan / Furnitur" },
      { id: 5, data: "Ahli pertanian / perkebunan" },
      {
        id: 5,
        data: "Tidak mudah mengobral janji kecuali yakin dapat me nepatinya",
      },
      { id: 5, data: "Ahli Optik / Kacamata/ Lensa" },
      { id: 5, data: "Suka memperbaiki mesin / elektronik / rumah sendiri" },
      { id: 5, data: "Berlayar / bersampan seorang diri" },
      {
        id: 5,
        data:
          "Lebih suka bergaul dengan sedikit orang yang benar-benar dipercaya",
      },
      {
        id: 5,
        data:
          "Berpegang teguh pada pendirian bagai manapun pendapat orang lain",
      },
      { id: 5, data: "Koki" },
      { id: 5, data: "Insinyur Teknik mesin / bangunan" },
      { id: 5, data: "Terkadang saya tampak acuh meski kenyataanya tidak" },
    ],
  },
  {
    id: 6,
    question: "BAGIAN 6 - ENTREPRISING",
    answer: [
      { id: 6, data: "Ahli hukum" },
      { id: 6, data: "Ber penampilan keren / modis" },
      { id: 6, data: "Manajer / eksekutif (pengelola bisnis)" },
      { id: 6, data: "Politisi" },
      { id: 6, data: "Bersemangat dalam melakukan suatu aktivitas" },
      { id: 6, data: "Suka permainan gambling / beresiko" },
      { id: 6, data: "Berwisata" },
      { id: 6, data: "Agensi perjalanan dan wisata" },
      { id: 6, data: "Senang menjadi pusat perhatian" },
      {
        id: 6,
        data:
          "Menyukai aktivitas yang beresiko (contoh : arung jeram, outbound ,dll)",
      },
      { id: 6, data: "Menikmati situasi kompetitif" },
      { id: 6, data: "Bagian Pemasaran" },
    ],
  },
];
var icon = [
  "RiAncientPavilionLine",
  "RiHomeLine",
  "RiSendPlaneLine",
  "FaEthereum",
  "FaDribbbleSquare",
  "FaBalanceScaleLeft",
  "FaBullhorn",
  "FaCashRegister",
  "FaCity",
];
var dataAnswer = dataQuest[indexQuestion].answer;

var dummyArr = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6];
let dummyOutput = [
  {
    id: 1,
    title: "Konvensional",
    description: "anda adalah seorang konvensional",
  },
  {
    id: 2,
    title: "Sosial",
    description: "anda adalah seorang Sosial",
  },
  {
    id: 3,
    title: "Infestigatif",
    description: "anda adalah seorang Infestigatif",
  },
  {
    id: 4,
    title: "Artistik",
    description: "anda adalah seorang Artistik",
  },
  {
    id: 5,
    title: "Realistik",
    description: "anda adalah seorang Realistik",
  },
  {
    id: 6,
    title: "Entreprising",
    description: "anda adalah seorang Entreprising",
  },
];
