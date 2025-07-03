# Project: README

A modern web application template built with Vite, React, TypeScript, Shadcn UI, and Tailwind CSS. This project serves as a robust starting point for developing fast and stylish landing pages or small to medium-sized web applications.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning](#cloning)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Styling](#styling)
- [Routing](#routing)
- [Linting](#linting)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

This project utilizes a modern and efficient technology stack:

*   **[Vite](https://vitejs.dev/):** Next-generation front-end tooling for fast development and optimized builds.
*   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
*   **[Shadcn UI](https://ui.shadcn.com/):** Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. (Built on Radix UI).
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
*   **[React Router DOM](https://reactrouter.com/):** For client-side routing.
*   **[TanStack Query](https://tanstack.com/query/latest):** Powerful asynchronous state management for data fetching, caching, and synchronization.
*   **[ESLint](https://eslint.org/):** Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript.

## Project Structure

The project follows a standard structure for Vite + React applications:

```
vite_react_shadcn_ts/
├── public/             # Static assets (e.g., favicon.ico, images)
├── src/                # Main source code
│   ├── assets/         # Static assets like images, fonts
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Shadcn UI components
│   │   └── (custom components).tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and libraries
│   ├── pages/          # Page components routed by React Router
│   ├── App.tsx         # Main application component with routing setup
│   ├── main.tsx        # Entry point of the application
│   ├── index.css       # Global styles
│   └── vite-env.d.ts   # Vite environment type definitions
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Specifies intentionally untracked files that Git should ignore
├── index.html          # Main HTML entry point for Vite
├── package.json        # Project metadata, dependencies, and scripts
├── postcss.config.js   # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript compiler options
├── tsconfig.node.json  # TypeScript configuration for Node.js environment (e.g., Vite config)
└── vite.config.ts      # Vite configuration file
```

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have the following installed:

*   Node.js (v18.x or later recommended)
*   npm (v9.x or later), yarn, or bun

### Cloning

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd vite_react_shadcn_ts
```
**Note:** Replace `<repository-url>` with the actual URL of this repository. If you've already cloned it, you can skip this step. The directory name might also differ if you cloned it under a different name.

### Installation

Install the project dependencies. Choose one of the following package managers:

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using bun:
```bash
bun install
```

### Running the Development Server

To start the development server, run:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using bun:
```bash
bun run dev
```

This will typically start the server on `http://localhost:5173` (Vite's default). The console output will confirm the exact address.

## Available Scripts

The `package.json` includes the following scripts:

*   `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
*   `npm run build`: Compiles the TypeScript code and bundles the application for production into the `dist/` folder.
*   `npm run build:dev`: Compiles the TypeScript code and bundles the application for development mode (useful for debugging build issues).
*   `npm run lint`: Lints the codebase using ESLint to check for code quality and style issues.
*   `npm run preview`: Serves the production build from the `dist/` folder locally to preview it.

(Replace `npm run` with `yarn` or `bun run` if you are using those package managers.)

## Styling

*   **Tailwind CSS:** Utility classes are used for most styling. Configuration can be found in `tailwind.config.ts`.
*   **Shadcn UI:** Components are imported from `@/components/ui`. These are customizable and often styled using Tailwind CSS.
*   **Global Styles:** Base styles and custom global CSS can be found in `src/index.css` and potentially `src/App.css`.

## Routing

Client-side routing is handled by **React Router DOM v6**.
Page components are located in the `src/pages/` directory. The main routes are configured in `src/App.tsx`:

*   `/`: Home page (`src/pages/Index.tsx`)
*   `/about`: About page (`src/pages/About.tsx`)
*   `/contact`: Contact page (`src/pages/Contact.tsx`)
*   `/privacy`: Privacy Policy page (`src/pages/Privacy.tsx`)
*   `/terms`: Terms of Service page (`src/pages/Terms.tsx`)
*   `*`: Catch-all route for 404 Not Found pages (`src/pages/NotFound.tsx`)

## Linting

This project uses ESLint for code linting. To run the linter:

```bash
npm run lint
```

This will check for any linting errors or warnings in the codebase. It's recommended to run this before committing changes.

## Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This command will generate a `dist/` directory containing the static assets for your application.

## Deployment

The `dist/` directory (generated by `npm run build`) contains the static files that can be deployed to any static site hosting service, such as:

*   Vercel
*   Netlify
*   GitHub Pages
*   AWS S3
*   Firebase Hosting

Configure your hosting provider to serve the `index.html` file from the root of the `dist/` directory.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.

Please ensure your code adheres to the project's linting rules.

## License

This project is currently not licensed. Please add a license file (e.g., `LICENSE.md`) if you wish to specify terms under which this software can be used, modified, and distributed. Common choices include MIT, Apache 2.0, or GPL.
