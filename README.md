# 🛍️ Next.js E-Commerce Platform

A high-performance, multi-language E-Commerce application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. This project fetches data from the [Fake Store API](https://fakestoreapi.com/) and features a fully functional cart, product filtering, and internationalization.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%2Fv4-cyan)

## 🚀 Features

### Core Functionality
- **Product Listing:** Grid view with server-side rendering and ISR.
- [cite_start]**Advanced Filtering:** Filter by Category and **Price Range (Min/Max)**[cite: 24].
- [cite_start]**Sorting:** Sort products by Price (Low to High / High to Low)[cite: 25].
- [cite_start]**Product Details:** Dedicated SEO-friendly pages with dynamic metadata[cite: 36].
- [cite_start]**Shopping Cart:** - Global state management with **Redux Toolkit**[cite: 17].
  - Persists data to `localStorage` (Cart doesn't empty on reload).
  - [cite_start]Add, remove, and update quantities[cite: 31].

### Technical Highlights
- [cite_start]**Internationalization (i18n):** Full support for **Turkish (TR)** and **English (EN)** using `next-intl`[cite: 33].
- [cite_start]**Performance:** - **ISR (Incremental Static Regeneration)** for optimal data fetching.
  - [cite_start]`next/image` optimization with LCP priority for hero images[cite: 38].
  - [cite_start]Achieves **90+ Lighthouse scores** in Performance and SEO[cite: 48].
- **UI/UX:**
  - [cite_start]Modern, responsive design with **Tailwind CSS**[cite: 45].
  - [cite_start]Visual feedback using **Toast notifications** (instead of standard alerts)[cite: 46].
  - Sticky Header and Summary box.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (RTK)
- **Internationalization:** next-intl
- **Icons:** Lucide React
- **Notifications:** React Hot Toast