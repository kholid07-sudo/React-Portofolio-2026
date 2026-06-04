const itProjects = [
  {
    id: 1,
    nama: "Website Portfolio",
    deskripsi: "Portfolio website personal berbasis HTML dengan animasi modern dan responsive design.",
    teknologi: ["HTML", "JavaScript", "Vanilla CSS"],
    kategori: "IT Projects",
    semester: "Semester 1",
    link: "#",
    gambar: "https://placehold.co/600x400/1e293b/3b82f6?text=Portfolio"
  },
  {
    id: 2,
    nama: "React Todo-List",
    deskripsi: "Todo-List webseit berbasis react menggunakan immutable dan juga state react.",
    teknologi: ["React", "CSS"],
    kategori: "IT Projects",
    semester: "Semester 2",
    link: "https://github.com/kholid07-sudo/react-todo.git",
    gambar: "https://placehold.co/600x400/1e293b/6366f1?text=School+MS"
  },
  {
    id: 3,
    nama: "Student Profile App",
    deskripsi: "Aplikasi yang menampilkan data siswa yang berbentuk Array of Object dalam bentuk card menggunakan react.",
    teknologi: ["React", "CSS",],
    kategori: "IT Projects",
    semester: "Semester 2",
    link: "https://github.com/kholid07-sudo/kholid-project-skl-1.git",
    gambar: "https://placehold.co/600x400/1e293b/06b6d4?text=POS+App"
  },
  {
    id: 4,
    nama: "Landing Page Iphone",
    deskripsi: "Landing page modern dengan hero section interaktif, animasi scroll, dan optimasi konversi.",
    teknologi: ["HTML", "Java Script", "Vanilla CSS"],
    kategori: "IT Projects",
    semester: "Semester 1",
    link: "https://github.com/kholid07-sudo/landing-page-iphone.git",
    gambar: "https://placehold.co/600x400/1e293b/10b981?text=Landing+Page"
  },
  {
    id: 5,
    nama: "Weather Dashboard",
    deskripsi: "Prototype Dashboard cuaca yang menampilkan cuaca hari itu dan 5 hari kedepan.",
    teknologi: ["React", "Vanilla CSS","Artificial Intelligence"],
    kategori: "IT Projects",
    semester: "Semester 2",
    link: "https://github.com/kholid07-sudo/dashboard-weather-skl-3.git",
    gambar: "https://placehold.co/600x400/1e293b/f59e0b?text=Dashboard"
  },
  {
    id: 6,
    nama: "Memorization Tracking App",
    deskripsi: "Aplikasi data hafalan menggunakan react dan useState.",
    teknologi: ["React", "Vanila CSS"],
    kategori: "IT Projects",
    semester: "Semester 2",
    link: "https://github.com/kholid07-sudo/hafalan-app-skl-bonus.git",
    gambar: "https://placehold.co/600x400/1e293b/ef4444?text=E-Commerce"
  }
];

const generalProjects = [
  {
    id: 7,
    nama: "Global English",
    deskripsi: "Kursus Bahasa Inggris selama 1 bulan di kampung inggris bersama Global English, Pare.",
    teknologi: ["Global English, Pare, Kediri, Jawa Timur, Indonesia"],
    kategori: "Bahasa Inggris",
    semester: "Semester 2",
    link: "#",
    gambar: "https://placehold.co/600x400/1e293b/ec4899?text=Poster"
  },
  {
    id: 8,
    nama: "Offline Micro Teaching",
    deskripsi: "Mengajarkan Bahasa inggris (vocabulary & Grammar) secara offline dikelas secara tatap muka.",
    teknologi: ["HSI Boarding School"],
    kategori: "Bahasa Inggris",
    semester: "Semester 2",
    link: "https://drive.google.com/drive/folders/1vjlaOK1ufahRysMrTSA4uefz9NzzYMYp?usp=sharing",
    gambar: "./Picture/off.jpg"
  },
  {
    id: 9,
    nama: "Online Micro Teaching",
    deskripsi: "Mengajarkan Bahasa inggris (vocabulary & Grammar) secara online di zoom.",
    teknologi: ["Zoom"],
    kategori: "Bahasa Inggris",
    semester: "Semester 2",
    link: "#",
    gambar: "https://placehold.co/600x400/1e293b/f97316?text=Speaking"
  },
  {
    id: 10,
    nama: "Juz 28 Recitation Test",
    deskripsi: "Ujian hafalan Al-Qur'an juz 28.",
    teknologi: [],
    kategori: "Tahfidz",
    semester: "Semester 2",
    link: "https://drive.google.com/drive/folders/1ZKP3-Th0xCQnCsiTc5PqbzUTQsrmtjeM?usp=sharing",
    gambar: "https://placehold.co/600x400/1e293b/14b8a6?text=Language"
  },
  {
    id: 11,
    nama: "Juz 27 Recitation Test",
    deskripsi: "Ujian hafalan Al-Qur'an juz 27.",
    teknologi: [],
    kategori: "Tahfidz",
    semester: "Semester 2",
    link: "https://drive.google.com/drive/folders/1ZKP3-Th0xCQnCsiTc5PqbzUTQsrmtjeM?usp=sharing",
    gambar: "https://placehold.co/600x400/1e293b/7c3aed?text=Event+Doc"
  },
  // {
  //   id: 12,
  //   nama: "Creative Design Projects",
  //   deskripsi: "Kumpulan proyek desain kreatif meliputi branding, ilustrasi, dan konten media sosial.",
  //   teknologi: ["Figma", "Adobe Suite"],
  //   kategori: "General Projects",
  //   semester: "Semester 2",
  //   link: "#",
  //   gambar: "https://placehold.co/600x400/1e293b/06b6d4?text=Creative"
  // }
];

const projectData = [...itProjects, ...generalProjects];

export default projectData;
export { itProjects, generalProjects };
