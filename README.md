<div align="center">

<img src="public/logo.svg" alt="InOrbit Logo" width="150" height="150" />

# InOrbit Frontend

A modern React TypeScript frontend application powered by Vite and TailwindCSS.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.11-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/RadixUI-Latest-161618.svg)](https://www.radix-ui.com/)
[![React Query](https://img.shields.io/badge/React_Query-5.64.2-FF4154.svg)](https://tanstack.com/query/latest)

---

## 📖 Table of Contents

| [⚡ Tech Stack](#⚡-tech-stack) | [🛠 Development Tools](#🛠-development-tools) | [🚀 Features](#🚀-features) |
|--------------------------------|-----------------------------------------------|----------------------------|
| [📦 Prerequisites](#📦-prerequisites) | [🛠️ Setup](#🛠️-setup) | [📱 Components](#📱-components) |
| [🏗️ Project Structure](#🏗️-project-structure) | [🧪 Running Tests](#🧪-running-tests) | [📚 Documentation](#📚-documentation) |
| [🛡️ License](#🛡️-license) | [🤝 Contributing](#🤝-contributing) | [🔧 Environment Variables](#🔧-environment-variables) |

---

### ⚡ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

---

### 🛠 Development Tools

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Orval](https://img.shields.io/badge/Orval-API_Client_Generator-3178C6?style=for-the-badge)

---
</div>

## 🚀 Features

- **Modern React**: Built with React 19.0.0 and latest functional components
- **Type Safety**: Full TypeScript support (v5.7.3)
- **Fast Development**: Powered by Vite 6.0.11 with hot module replacement
- **Responsive Design**: Mobile-first approach using TailwindCSS 3.4
- **Developer Experience**: Configured with Biome for consistent code style
- **API Client Management**:
  - Orval for type-safe API client generation
  - Dynamic API base URL configuration
  - Custom HTTP client implementation
- **Form Management**:
  - React Hook Form for state management
  - Zod for robust form validation
- **Data Fetching**:
  - TanStack Query (React Query v5.64.2) for efficient API integration
  - Automatic caching and background updates
- **UI Components**:
  - Radix UI primitives for accessible components
  - Goal creation dialog with form validation
  - Weekly summary display
  - Pending goals tracking
  - Toast notifications with Sonner
- **Cookie Management**:
  - Universal Cookie for handling browser cookies
- **Utility-First CSS**:
  - TailwindCSS for styling
  - Tailwind merge and variants for advanced styling
- **Date Handling**:
  - Day.js for date formatting in Portuguese
- **Authentication**:
  - GitHub authentication callback support
- **Streaming**:
  - Turbo Stream integration for real-time functionality

---

## 📦 Prerequisites

- Node.js (Latest LTS version)
- Yarn package manager
- Modern web browser

---

## 🛠️ Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pocket-front.git
cd pocket-front
```

2. Install dependencies:

```bash
yarn install
```

3. Set up your environment variables:

```bash
cp .env.example .env
```

4. Start the development server with Orval:

```bash
yarn dev
```

---

## 🏗️ Project Structure

```
pocket-front/
├── public/          # Static assets
├── src/
│   ├── assets/      # Project assets
│   ├── components/  # Reusable React components
│   │   ├── ui/      # UI components
│   │   ├── weekly-summary/
│   │   └── pending-goals/
│   ├── http/        # API client and HTTP utilities
│   │   ├── client.ts
│   │   └── generated/
│   ├── pages/       # Application pages
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── tests/           # Test files (planned)
├── orval.config.ts  # API client configuration
├── biome.json       # Code style configuration
└── vite.config.ts   # Build configuration
```

---

## 📱 Components

- Goal Creation Dialog
- Weekly Summary
- Pending Goals Display
- Progress Indicators
- Authentication Callback Handler

---

## 🧪 Running Tests

```bash
yarn test  # To be implemented
```

---

## 📚 Documentation

- Component documentation (Future Storybook integration)
- API client documentation via Orval

---

## 🛡️ License

MIT License

---

## 🤝 Contributing

1. Fork the Project
2. Create Feature Branch
3. Commit Changes
4. Push to Branch
5. Open Pull Request

---

## 🔧 Environment Variables

```env
VITE_API_URL=http://localhost:3333
VITE_ENV=development
```

---

<div align="center">
Made with ❤️ by Rafael Dias Zendron
</div>

<div align="center">
<img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">

### Built with 💜 by Rafael Zendron

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-dias-zendron-528290132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rafaumeu)

</div>
