# Funngro Teenlancer Clone

This project is a responsive React.js clone of the Funngro Teenlancer landing page, designed to showcase web development skills with SEO optimization and mobile-first responsiveness.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**:  Custom SVGs
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 🔍 SEO Implementation

To make the site SEO-friendly, the following strategies were applied:

- ✅ **Semantic HTML Tags**: Used `<main>`, `<section>`, `<nav>`, `<header>`, and `<footer>` for structure.
- ✅ **Meta Tags**: Added meaningful `<title>`, `<meta name="description">`, and Open Graph tags in `index.html`.
- ✅ **Image Alt Text**: All images include descriptive `alt` attributes.
- ✅ **Page Routing**: React Router is used with meaningful URLs (`/teen`, `/company`) for crawlability.
- ✅ **Responsive Design**: Fully mobile-friendly with Tailwind’s utility-first breakpoints.
- ✅ **Fast Load Times**: Vite ensures fast builds, lazy loading, and code splitting.
- ✅ **Accessibility**: Text contrasts, alt tags, and keyboard-friendly navigation included.

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/funngro-clone.git
   cd funngro-clone
📁 Project Structure
css
Copy
Edit
src/
  assets/         → Images and icons
  components/     → Navbar, Hero, Footer, etc.
  pages/          → Teen.js, Company.js
  App.jsx         → Main routing
  main.jsx        → App bootstrap
public/
  index.html      → SEO meta setup
