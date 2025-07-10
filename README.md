# Meet Bhatt Portfolio – Next.js + Tailwind

A personal portfolio site built with **Next.js**, **Tailwind CSS**, and a backend API integration.

## 🌟 Features

- ⚡ Modern UI with Tailwind CSS
- 🧩 Dynamic GitHub project list via API (`/api/github`)
- 📬 Contact form integrated with backend
- 🌙 Dark mode ready (via Tailwind)

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/YOUR_USERNAME/meet-portfolio-frontend.git
cd meet-portfolio-frontend
```

Or [download the ZIP](https://github.com/YOUR_USERNAME/meet-portfolio-frontend/archive/refs/heads/main.zip) and extract it.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

## 🛠 Contact Form Setup

The form submits data to:

```
https://meet-backend.onrender.com/contact
```

Make sure your backend is configured to accept JSON POST requests at that endpoint.

---

## 🔗 GitHub Projects API

The portfolio pulls GitHub projects from:

```
https://meet-backend.onrender.com/github
```

Ensure your backend forwards GitHub data from this endpoint.

---

## 🧑‍💻 Deploy to GitHub Pages (Static Export)

1. **Add export config** to `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  distDir: 'docs',
}
module.exports = nextConfig
```

2. **Build and export static site**:

```bash
npm run build
npm run export
```

3. **Push to GitHub** with repo name:

```
https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io
```

4. **Enable GitHub Pages** → source: `/docs` folder (or root, depending on branch).

---

## 📂 Folder Structure

```
meet-portfolio-frontend/
├── components/
│   ├── ContactForm.tsx
│   └── ProjectCard.tsx
├── pages/
│   ├── api/
│   │   └── github.ts
│   └── index.tsx
├── styles/
│   └── globals.css
├── public/
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

---

## ✨ Credits

Built by [Meet Bhatt](https://github.com/Meet2197) with 💙 using Next.js + Tailwind.
