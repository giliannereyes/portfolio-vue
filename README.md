# Portfolio (Vue)

A personal portfolio website built with **Vue 3** and **Tailwind CSS**, designed with a layered architecture and reusable component structure for scalability and maintainability.

---

## Overview

This project showcases selected work, technical skills, and background.

---

## Tech Stack

- **Vue 3** (Vite)
- **Tailwind CSS v4**
- **JavaScript (ES Modules)**

---

## Architecture

The project follows a layered structure inspired by feature-based design principles:

```
src/
  app/        # Application entry point and global styles
  pages/      # Page-level composition
  widgets/    # Section-level UI blocks
  entities/   # Domain content and data models
  shared/     # Reusable UI components and utilities
```

This separation ensures:

- Clear responsibility boundaries  
- Reusable UI components  
- Scalable project growth  
- Improved readability and maintainability  

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The application will be available locally via Vite’s development server.

---

## Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment (Vercel)

The project is configured for deployment on Vercel with the following settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## License

This project is intended for personal portfolio use.