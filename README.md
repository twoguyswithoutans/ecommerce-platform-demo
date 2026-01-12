# 🛍️ Next.js E-Commerce Platform

A high-performance, multi-language E-Commerce application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. This project fetches data from the [Fake Store API](https://fakestoreapi.com/) and features a fully functional cart, product filtering, and internationalization.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%2Fv4-cyan)

## 🚀 Features

### Core Functionality
- **Product Listing:** Grid view with server-side rendering and ISR.
- **Advanced Filtering:** Filter by Category and **Price Range (Min/Max)**.
- **Sorting:** Sort products by Price (Low to High / High to Low).
- **Product Details:** Dedicated SEO-friendly pages with dynamic metadata.
- **Shopping Cart:** - Global state management with **Redux Toolkit**.
  - Persists data to `localStorage` (Cart doesn't empty on reload).
  - Add, remove, and update quantities.

### Technical Highlights
- **Internationalization (i18n):** Full support for **Turkish (TR)** and **English (EN)** using `next-intl`[cite: 33].
- **Performance:** - **ISR (Incremental Static Regeneration)** for optimal data fetching.
  - `next/image` optimization with LCP priority for hero images.
  - Achieves **90+ Lighthouse scores** in Performance and SEO.
- **UI/UX:**
  - Modern, responsive design with **Tailwind CSS**.
  - Visual feedback using **Toast notifications** (instead of standard alerts).
  - Sticky Header and Summary box.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (RTK)
- **Internationalization:** next-intl
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
