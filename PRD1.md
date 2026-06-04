# 📋 Product Requirements Document (PRD)
## Portofolio Akhir Semester — Web Portofolio Personal

**Versi:** 1.0  
**Tanggal:** [Tanggal]  
**Status:** Draft  
**Dibuat oleh:** [Nama Kamu]

---

## 1. Ringkasan Produk

### 1.1 Latar Belakang
Aplikasi ini adalah proyek portofolio akhir semester yang menampilkan hasil kerja dan profil diri secara profesional. Dibangun sebagai Single Page Application (SPA) menggunakan React dengan routing multi-halaman.

### 1.2 Tujuan Produk
- Menampilkan profil diri dan keahlian secara profesional
- Memamerkan project-project yang telah dikerjakan selama Kelas XI
- Menyediakan form kontak yang data inputnya tersimpan di localStorage
- Mempraktikkan SPA dengan React Router DOM

### 1.3 Target Pengguna
- Guru / penilai yang ingin melihat hasil belajar
- Siapapun yang ingin mengenal profil dan karya kamu

---

## 2. Tech Stack

| Komponen        | Teknologi                   |
|-----------------|-----------------------------|
| Framework       | React (dengan Vite)         |
| Routing         | `react-router-dom` v6       |
| Styling         | Vanilla CSS (file terpisah) |
| State Manager   | `useState` (React Hooks)    |
| Penyimpanan     | `localStorage`              |
| Data            | Data statis lokal (file `.js`) |
| Build Tool      | Vite                        |

---

## 3. Struktur Halaman & Routing

| Path        | Halaman        | Deskripsi                                        |
|-------------|----------------|--------------------------------------------------|
| `/`         | `HomePage`     | Hero section + ringkasan informasi diri          |
| `/about`    | `AboutPage`    | Profil lengkap, pendidikan, dan skills           |
| `/project`  | `ProjectPage`  | Daftar card project dengan `.map()`              |
| `/contact`  | `ContactPage`  | Form kontak dengan `useState` + `localStorage`  |
| `*`         | `NotFoundPage` | Halaman 404                                      |

---

## 4. Struktur Proyek

```
portofolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   ├── AboutPage/
│   │   │   ├── AboutPage.jsx
│   │   │   └── AboutPage.css
│   │   ├── ProjectPage/
│   │   │   ├── ProjectPage.jsx
│   │   │   └── ProjectPage.css
│   │   ├── ContactPage/
│   │   │   ├── ContactPage.jsx
│   │   │   └── ContactPage.css
│   │   └── NotFoundPage/
│   │       ├── NotFoundPage.jsx
│   │       └── NotFoundPage.css
│   ├── data/
│   │   ├── profileData.js
│   │   └── projectData.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 5. Struktur Data

### 5.1 Data Profil (`profileData.js`)

```js
const profileData = {
  nama: "[Nama Kamu]",
  tagline: "[Tagline / Motto Kamu]",
  deskripsi: "[Deskripsi singkat tentang dirimu]",
  foto: "/foto-profil.jpg",
  pendidikan: [
    { tahun: "2023 - Sekarang", institusi: "[Nama Sekolah]", jurusan: "[Jurusan]" }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  sosial: {
    github: "https://github.com/[username]",
    instagram: "https://instagram.com/[username]",
    email: "[email kamu]"
  }
};

export default profileData;
```

### 5.2 Data Project (`projectData.js`)

```js
const projectData = [
  {
    id: 1,
    nama: "Card Project — Profil Siswa",
    deskripsi: "Menampilkan array of object sebagai kartu profil siswa menggunakan React dan Vanilla CSS.",
    teknologi: ["React", "Vite", "Vanilla CSS"],
    semester: "Semester 1",
    link: "#"
  },
  {
    id: 2,
    nama: "To-Do List",
    deskripsi: "Aplikasi daftar tugas dinamis dengan fitur tambah dan hapus menggunakan Spread Operator dan .filter().",
    teknologi: ["React", "Vite", "Vanilla CSS"],
    semester: "Semester 1",
    link: "#"
  },
  {
    id: 3,
    nama: "Weather Dashboard",
    deskripsi: "Dashboard cuaca dengan data statis, CSS Modules, dan React Router untuk navigasi multi-halaman.",
    teknologi: ["React", "React Router", "CSS Modules"],
    semester: "Semester 2",
    link: "#"
  },
  {
    id: 4,
    nama: "Aplikasi Penghitung Hafalan",
    deskripsi: "Aplikasi dinamis untuk mencatat dan melacak progress hafalan dengan fitur tambah, hapus, toggle, dan kalkulasi progress.",
    teknologi: ["React", "React Router", "CSS Modules", "Vanilla CSS"],
    semester: "Semester 2",
    link: "#"
  },
];

export default projectData;
```

### 5.3 Skema Field Project

| Field       | Tipe     | Deskripsi                        |
|-------------|----------|----------------------------------|
| id          | number   | Identifier unik project          |
| nama        | string   | Nama project                     |
| deskripsi   | string   | Deskripsi singkat project        |
| teknologi   | array    | Daftar teknologi yang digunakan  |
| semester    | string   | Semester project dikerjakan      |
| link        | string   | URL demo / GitHub project        |

---

## 6. Detail Halaman & Komponen

### 6.1 `HomePage` (`/`)

**Komponen yang digunakan:** `Hero`

**Tampilan:**
- Hero section: foto profil, nama, tagline, tombol CTA ke `/project` dan `/contact`
- Ringkasan singkat: jumlah project, skills utama

---

### 6.2 `AboutPage` (`/about`)

**Tampilan:**
- Foto + deskripsi diri
- Riwayat pendidikan (dari `profileData.pendidikan`)
- Daftar skills dalam bentuk badge/tag
- Link ke sosial media

---

### 6.3 `ProjectPage` (`/project`)

**Komponen yang digunakan:** `ProjectCard`

**Logika `.map()`:**
```jsx
{projectData.map(project => (
  <ProjectCard key={project.id} project={project} />
))}
```

**Tampilan `ProjectCard`:**
- Nama project
- Deskripsi singkat
- Badge teknologi (dari array `teknologi`)
- Label semester
- Tombol "Lihat Project" (link)

---

### 6.4 `ContactPage` (`/contact`)

**Logika `useState` + `localStorage`:**

```jsx
// Ambil data tersimpan dari localStorage saat komponen pertama dimuat
const [nama,  setNama]  = useState(localStorage.getItem("contact_nama")  || "");
const [email, setEmail] = useState(localStorage.getItem("contact_email") || "");
const [pesan, setPesan] = useState(localStorage.getItem("contact_pesan") || "");

// Simpan ke localStorage setiap kali input berubah
const handleNama = (e) => {
  setNama(e.target.value);
  localStorage.setItem("contact_nama", e.target.value);
};

// Fungsi kirim — bersihkan form dan localStorage
const handleKirim = () => {
  alert(`Pesan terkirim! Terima kasih, ${nama}.`);
  setNama(""); setEmail(""); setPesan("");
  localStorage.removeItem("contact_nama");
  localStorage.removeItem("contact_email");
  localStorage.removeItem("contact_pesan");
};
```

**Tampilan:**
- Input: Nama, Email, Pesan (textarea)
- Tombol "Kirim Pesan"
- Teks info: *"Draft pesanmu tersimpan otomatis"*

---

### 6.5 `Navbar`

```jsx
import { NavLink } from 'react-router-dom';

// Link: Home | About | Project | Contact
```

- `NavLink` aktif mendapat style berbeda via class `.active`

---

## 7. Setup React Router (`App.jsx`)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*"        element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

---

## 8. Alur Data

```
profileData.js → AboutPage  → tampilkan profil, pendidikan, skills
projectData.js → ProjectPage → .map() → ProjectCard

ContactPage
  useState (nama, email, pesan)
    ↕ sync dua arah
  localStorage (contact_nama, contact_email, contact_pesan)
    → data tidak hilang saat refresh
    → dihapus saat form dikirim
```

---

## 9. Tampilan & UI

```
┌────────────────────────────────────────────────┐
│  [Nama]       Home  About  Project  Contact    │  ← Navbar
├────────────────────────────────────────────────┤
│                                                │
│   [Foto]   Halo, saya [Nama] 👋               │  ← Hero
│            [Tagline]                           │
│            [Lihat Project]  [Hubungi Saya]     │
│                                                │
├────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │  ← ProjectCard
│  │ Project1 │  │ Project2 │  │ Project3 │     │
│  └──────────┘  └──────────┘  └──────────┘     │
├────────────────────────────────────────────────┤
│              © 2026 [Nama Kamu]                │  ← Footer
└────────────────────────────────────────────────┘
```

---

## 10. Kriteria Penyelesaian (Definition of Done)

### Routing
- [ ] `/`, `/about`, `/project`, `/contact` masing-masing menampilkan halaman yang benar
- [ ] URL tidak dikenal menampilkan halaman 404
- [ ] Navbar link aktif ter-highlight

### Fungsionalitas
- [ ] `.map()` digunakan untuk render daftar project
- [ ] `useState` digunakan untuk semua input di form kontak
- [ ] Data form tersimpan ke `localStorage` setiap kali input berubah
- [ ] Data form terbaca dari `localStorage` saat halaman di-refresh
- [ ] Data `localStorage` dihapus setelah form dikirim

### Tampilan
- [ ] Styling menggunakan Vanilla CSS (tidak ada framework CSS)
- [ ] Setiap komponen memiliki file `.css` tersendiri
- [ ] Tampilan responsif di mobile dan desktop
- [ ] Navbar konsisten di semua halaman

### Kode
- [ ] Data profil dan project disimpan di file `.js` terpisah
- [ ] Setiap komponen dan halaman di file `.jsx` tersendiri
- [ ] Tidak ada error di console browser

---

## 11. Milestone & Timeline

| Fase | Tugas                                            | Estimasi |
|------|--------------------------------------------------|----------|
| 1    | Setup proyek React + Vite + React Router         | 20 menit |
| 2    | Buat `profileData.js` dan `projectData.js`       | 20 menit |
| 3    | Setup routing di `App.jsx`                       | 15 menit |
| 4    | Buat `Navbar` + `Footer`                         | 30 menit |
| 5    | Buat `HomePage` + komponen `Hero`                | 40 menit |
| 6    | Buat `AboutPage`                                 | 30 menit |
| 7    | Buat `ProjectPage` + `ProjectCard`               | 35 menit |
| 8    | Buat `ContactPage` + logika localStorage         | 40 menit |
| 9    | Buat `NotFoundPage`                              | 10 menit |
| 10   | Styling Vanilla CSS + Responsif                  | 60 menit |
| **Total** |                                             | **~5 jam** |

---

## 12. Referensi

- React Router v6: https://reactrouter.com/en/main
- localStorage MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- useState docs: https://react.dev/reference/react/useState
- Vite docs: https://vitejs.dev

---

*Dokumen ini bersifat living document dan dapat diperbarui seiring perkembangan proyek.*