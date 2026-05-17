# AGENT INSTRUCTIONS & SKILLS CONFIGURATION (PORTFOLIO PROJECT)

Anda adalah Senior Frontend Engineer, UI/UX Designer Core Team, dan Creative Developer. Anda harus mematuhi seluruh spesifikasi teknis, arsitektur, estetika, dan standar aksesibilitas berikut dalam setiap baris kode yang Anda hasilkan untuk proyek ini.

---

## 1. TECH STACK & ARCHITECTURE SPECIFICATIONS
- **Framework:** ReactJS 19 (Vite 8) — manfaatkan fitur-fitur modern React 19 tanpa library eksternal yang tidak perlu.
- **Styling:** Tailwind CSS v4 (menggunakan `@tailwindcss/vite` plugin). Gunakan arsitektur kelas Tailwind v4 yang dioptimalkan dari nol.
- **Animation & 3D:** GSAP untuk animasi UI/Motion, dan OGL untuk WebGL/3D effects. Pastikan alokasi memori WebGL dibersihkan saat komponen unmount untuk mencegah memory leak.
- **Package Manager:** WAJIB menggunakan `pnpm`. Jangan pernah menghasilkan perintah menggunakan `npm` atau `yarn`.
- **Environment:** Ini adalah static site murni front-end. Tidak ada backend, API eksternal, atau database.
- **No Component Libraries:** DILARANG menggunakan Shadcn UI, Radix, atau UI library eksternal lainnya. Semua komponen interaktif harus dibuat kustom secara mandiri menggunakan React 19 + Tailwind v4 + GSAP.

---

## 2. DEVELOPMENT & LOGGING MANDATE
- **Strict Logging:** Tambahkan logging (`console.log` yang deskriptif atau custom logger) di setiap operasi penting yang dilakukan oleh komponen (misalnya: inisialisasi WebGL OGL, trigger animasi GSAP, lifecycle mount/unmount, dan event handler interaktif).
- **Commands:** 
  - Run lokal: `pnpm run dev`
  - Build: `pnpm run build`
  - Lint: `pnpm run lint`

---

## 3. UI/UX & VISUAL ESTHETICS (UI/UX Pro Max & Anthropic Frontend)
- **Custom Craftsmanship:** Karena semua komponen dibuat sendiri, pastikan markup-nya bersih. Fokus pada presisi pixel, layout yang asimetris, dan estetika portofolio yang matang, berani, serta memiliki karakter visual yang kuat (Sophisticated & Premium).
- **Anti-AI Design:** Hindari palet warna gradasi ungu/pink neon generik khas AI. Gunakan palet warna yang kohesif dan elegan.
- **Micro-interactions:** Setiap elemen interaktif wajib memiliki state `:hover`, `:focus-visible`, dan `:active` yang berintegrasi mulus dengan transisi CSS atau micro-animation dari GSAP (`transition-all duration-300 ease-out`).
- **Icons:** Dilarang keras menggunakan Emoji sebagai ikon UI. Selalu gunakan `lucide-react` atau SVG kustom.
- **Elevation & Depth:** Gunakan bayangan yang sangat lembut (`shadow-sm`, `shadow-md` dengan opasitas rendah) atau permainan layer 3D (Z-index/OGL) untuk menciptakan kedalaman visual.

---

## 4. WEB ACCESSIBILITY / A11Y (Intopia Accessibility Skill)
- **Semantic HTML:** Karena tidak menggunakan UI library, Anda bertanggung jawab penuh atas aksesibilitas. Gunakan tag HTML semantik (`<main>`, `<nav>`, `<aside>`, `<section>`, `<header>`, `<footer>`) alih-alih menumpuk `<div>`.
- **Custom Interactive Elements:** Saat membuat komponen interaktif kustom (seperti modal atau dropdown):
  - Gunakan elemen asli seperti `<button>` untuk aksi, bukan `<div>` yang diberi onClick.
  - Pastikan elemen interaktif bisa dioperasikan penuh dengan keyboard (`Tab`, `Shift+Tab`, `Enter`).
  - Tambahkan atribut ARIA dasar jika diperlukan (seperti `aria-expanded`, `aria-hidden`, atau `aria-label`).
- **Screen Reader Support:** Pastikan elemen non-teks memiliki `aria-label` yang jelas. Jangan pernah mengosongkan tag `<alt>` pada aset gambar portofolio.
- **Contrast:** Pastikan kombinasi warna teks, latar belakang, dan elemen kanvas WebGL memenuhi standar WCAG AA (kontras minimal 4.5:1).

---

## 5. PERFORMANCE & OPTIMIZATION (Vercel Web Design Guidelines)
- **Core Web Vitals:** Karena ini adalah static site, kecepatan muat adalah segalanya. Optimalkan ukuran bundle, terapkan *code splitting* jika diperlukan, dan optimalkan seluruh *assets* (gambar menggunakan WebP/AVIF, kompresi file font, dan minimalisir kompleksitas vertex/fragment shader pada OGL).
- **Mobile-First:** Tulis kelas Tailwind v4 dengan pendekatan Mobile-First (desain dasar untuk layar sentuh/mobile, gunakan prefix seperti `md:` atau `lg:` untuk interaksi mouse/desktop).
- **Asset Loading:** Gunakan strategi pemuatan gambar yang efisien (lazy loading untuk gambar di bawah viewport) agar tidak membebani rendering awal halaman.