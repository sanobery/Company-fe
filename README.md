This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Prettier Configuration for Code Formatting

This guide explains how to set up **Prettier** using a configuration file instead of relying on IDE extensions. This ensures consistent formatting across all environments, projects, and team members.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Creating Prettier Configuration File](#creating-prettier-configuration-file)
4. [Common Configuration Options](#common-configuration-options)
5. [Using Prettier](#using-prettier)
6. [Adding Prettier Scripts to Package.json](#adding-prettier-scripts-to-packagejson)

---

## Prerequisites

- Node.js installed (v14+ recommended)
- npm or yarn

---

## Installation

Install Prettier as a development dependency:

```bash
# Using npm
npm install --save-dev prettier
```

## Creating Prettier Configuration File

Instead of relying on IDE formatting, create a configuration file in the project root:

.prettierrc (JSON format)

{
"semi": true,
"singleQuote": true,
"trailingComma": "es5",
"tabWidth": 2,
"printWidth": 80,
"endOfLine": "lf"
}

## Using Prettier

Format all files

```bash
npx prettier --write .
npx prettier --check .
```

## Adding Prettier Scripts to package.json

"scripts": {
"format": "prettier --write .",
"format:check": "prettier --check ."
}

Now you can run:

```bash
npm run format
npm run format:check
```

## Husky Implementation

Implementing Husky in a Next.js project is a great way to enforce code quality by running Git hooks like pre-commit or pre-push. Here's how to set it up step by step:

✅ Step-by-Step: Add Husky to Next.js

```bash
npm install husky --save-dev
npx husky install
```

Then add this to your package.json to auto-enable hooks after install:

json
"scripts": {
"prepare": "husky install"
}

## Add a Pre-Commit Hook

```bash
npx husky add .husky/pre-commit "npm run lint"
```

This creates a .husky/pre-commit file that runs npm run lint before every commit.

## Step-by-Step Integration with react-countup

## Install the library

```bash
npm install react-countup
```

## Integrate react-hook-form + zod validation cleanly into your form — so you get full type safety, validation, and nice UX (no refactors later).

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Install a toast library for Notification

The most common and lightweight option is react-hot-toast:

```bash
npm install react-hot-toast
```

# 🧠 Zustand in Next.js (App Router)

Zustand is a lightweight, scalable state management library perfect for Next.js — especially when you want to share client-side state across pages or components without the complexity of Redux.

---

## 📦 Installation

```bash
npm install zustand
```

## QS MODULE

The qs module (short for Query String) is a small but very useful JavaScript library that helps you build and parse complex query strings, especially for APIs like Strapi, which use deeply nested populate structures.

## 📦 Installation

```bash
npm install qs
npm i --save-dev @types/qs
```
