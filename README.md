# KKOSM - Project Documentation

## 1. Project Overview

**"Empowering youth through nature and adventure."**
KKOSM is a modern, responsive web application built to showcase camps, workshops, and community events.

---

## 2. Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
- **Language**: TypeScript

---

## 3. Getting Started (For Developers)

### Prerequisites

- Node.js (v18 or higher recommended)
- NPM or PNPM

### Installation

1.  Navigate to the project directory:
    ```bash
    cd kkosm
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 4. Folder Structure (Simplified)

```
src/
├── app/                  # Pages and Routing
│   ├── page.tsx          # Homepage
│   ├── about-us/         # About Us Page
│   ├── events/           # Events Page
│   └── news-and-media/   # News Page
├── components/           # UI Blocks and Sections
│   ├── global/           # Header, Footer
│   ├── pages/            # Page-specific content (Edit text here)
│   └── ui/               # Reusable buttons, cards, etc.
public/
└── images/               # All image assets
```

---

## 5. How to Update Content (Client Guide)

### Updates Images

Images are stored in `public/images/`.

1.  **Find the image path**: Right-click the image on the site -> "Open Image in New Tab" to see the URL (e.g., `/images/homepage/heroSection/hero.webp`).
2.  **Replace**: Overwrite the file in the project folder with your new image. **Keep the filename exactly the same.**
    > **Tip**: Use [Squoosh](https://squoosh.app/) to compress images to **WebP** format before uploading.

### Updating Text

Text content is located inside `src/components/pages/`. To change text, find the corresponding file:

| Page         | Section          | File Location                                |
| :----------- | :--------------- | :------------------------------------------- |
| **Home**     | Hero / Intro     | `src/components/pages/home/HomeHero.tsx`     |
|              | About Us Section | `src/components/pages/home/HomeAboutUs.tsx`  |
|              | News Section     | `src/components/pages/home/NewsAndMedia.tsx` |
| **About Us** | Hero             | `src/components/pages/about/AboutHero.tsx`   |
|              | Our Story        | `src/components/pages/about/OurStory.tsx`    |
|              | Programs         | `src/components/pages/about/Programs.tsx`    |
| **Events**   | All Sections     | `src/components/pages/events/`               |
| **News**     | All Sections     | `src/components/pages/news-and-media/`       |

**How to Edit:**

1.  Open the file in a code editor (like VS Code or Cursor).
2.  Use `Ctrl+F` (Command+F) to search for the specific text you want to change.
3.  Edit the text between the tags (e.g., `<p>Change this text</p>`).
4.  Save the file.
