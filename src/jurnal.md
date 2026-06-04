# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Proyek:** Portofolio Web Personal  
**Stack:** React 18 + Vite 6, react-router-dom v6, Vanilla CSS  
**Nama:** Kholid

---

## 1. Definisi Stack & Arsitektur

### Stack yang Digunakan

| Lapisan | Teknologi | Alasan |
|---------|-----------|--------|
| Framework UI | React 18 | Komponen reusable, state management via hooks, ekosistem besar |
| Build Tool | Vite 6 | Dev server cepat (HMD), build optimal, zero-config untuk React |
| Routing | react-router-dom v6 | SPA dengan multi-halaman tanpa reload, NavLink untuk active styling |
| Ikon | react-icons v5 | Library ikon ringan, import sesuai kebutuhan (Fi, Fa6) |
| CSS | Vanilla CSS | Tiap komponen punya file `.css` sendiri, kontrol penuh tanpa abstraksi |
| Penyimpanan | localStorage | Form kontak auto-save tanpa backend |
| Linting | ESLint 9 (flat config) | Menjaga konsistensi kode |

### Struktur Folder

```
src/
├── components/    # Komponen reusable (Hero, Footer, Navbar, dll)
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css      # CSS co-located
├── pages/         # Halaman sesuai route
│   ├── HomePage/
│   ├── AboutPage/
│   ├── ProjectPage/
│   ├── ContactPage/
│   └── NotFoundPage/
├── data/          # Data statis
│   ├── profileData.js
│   ├── projectData.js
│   └── Picture/   # Asset gambar
├── App.jsx        # Routing utama
├── App.css        # CSS global & variabel
└── main.jsx       # Entry point
```

**Mengapa struktur ini?**

- **Co-located CSS** — Setiap `.jsx` punya `.css` sendiri, memudahkan maintain dan deletion. Tidak perlu bolak-balik folder saat mengedit satu komponen.
- **Pemisahan `data/`** — Data dipisah dari logika render. `profileData.js` dan `projectData.js` bisa diedit tanpa menyentuh JSX.
- **`components/` vs `pages/`** — Komponen reusable (Hero, Navbar) di `components/`, halaman utuh (HomePage, AboutPage) di `pages/`. Perbedaan jelas: komponen dipakai di banyak tempat, halaman cuma sekali sesuai route.

---

## 2. Strategi Prompting

### Prompt 1 — Mapping Gambar Project ke Card

> "Saya punya folder `src/data/Picture/` berisi gambar project. Buatkan mapping object `projectImages` di `ProjectPage.jsx` yang menghubungkan judul project dengan gambar imported. Setiap card harus menampilkan gambar yang sesuai, jangan placeholder. Import langsung dari folder data, bukan URL eksternal. Simpan mapping dalam object biar rapi."

**Mengapa prompt ini efektif?**  
Saya sengaja menyebutkan constraint sekaligus (import lokal, bukan URL, mapping object) agar AI langsung menghasilkan struktur yang tepat tanpa revisi. Hasilnya: 11 gambar di-import, mapping `{ "Student Profile App": AppCard, ... }`, dan fallback `|| project.gambar` untuk keamanan.

### Prompt 2 — Layout Contact 2 Kolom

> "Contact section terlihat kosong. Buat layout 2 kolom di desktop: kiri berisi info kontak (email, WhatsApp, lokasi, sosial media), kanan form yang sudah ada. Pakai glassmorphism ringan, border tipis, shadow halus. Responsif: 1 kolom di mobile, tetap nyaman di tablet."

**Mengapa prompt ini efektif?**  
Saya memberikan deskripsi visual yang jelas (2 kolom, konten kiri vs kanan) plus spesifikasi styling (glassmorphism, responsive breakpoints). AI langsung menghasilkan struktur grid CSS yang sesuai tanpa perlu iterasi.

---

## 3. Log Problem Solving

### Masalah: Gambar Tidak Muncul Karena Path Bermasalah

**Gejala:**  
Project "Offline Micro Teaching" menggunakan path `"./Picture/off.jpg"` di `projectData.js` sementara file asli bernama `off1.jpg` dan terletak di `src/data/Picture/`. Gambar tidak tampil karena path tidak cocok.

**Langkah Diagnosis:**

1. Cek isi folder `src/data/Picture/` — ternyata ada `off1.jpg`, bukan `off.jpg`.
2. Cek `projectData.js` — field `gambar` untuk project id 8 berisi `"./Picture/off.jpg"`.
3. Cek project lain — semuanya pakai placeholder URL (`https://placehold.co/...`), bukan file lokal.

**Solusi yang Diterapkan:**

Saya tidak mengubah file data (`projectData.js`) karena instruksi melarangnya. Sebaliknya, saya membuat image mapping di `ProjectPage.jsx`:

```js
import Off1 from '../../data/Picture/off1.jpg';

const projectImages = {
  "Offline Micro Teaching": Off1,
  // ... project lain
};
```

Kemudian di komponen render:
```jsx
<img src={projectImages[project.nama] || project.gambar} ... />
```

**Mengapa solusi ini lebih baik daripada edit data?**  
- Data tetap sesuai spesifikasi awal (tidak disentuh).
- Mapping di tempat render memberikan fleksibilitas: jika nama file berubah, cukup edit satu object mapping, tidak perlu ubah seluruh data.
- Fallback `|| project.gambar` memastikan jika ada project baru tanpa mapping, gambar default tetap muncul (tidak broken image).

**Kendala Teknis — Import dengan Karakter Spesial:**  
File `Qur'an.jpg` memiliki tanda kutip di namanya. Import biasa dengan petik ganda berhasil:
```js
import Quran from "../../data/Picture/Qur'an.jpg";
```
Vite menangani ini dengan baik saat build — file keluar dengan hash `Qur'an-N_1M-ZGt.jpg` di folder `dist/assets/`.
