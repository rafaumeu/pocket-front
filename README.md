<div align="center">

<img src="public/logo.svg" alt="InOrbit Logo" width="150" height="150" />

# InOrbit Frontend

A modern React TypeScript frontend application powered by Vite and TailwindCSS.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-Latest-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/RadixUI-Latest-161618.svg)](https://www.radix-ui.com/)

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

---
</div>

## 🚀 Features

- **Modern React**: Built with the latest React features including hooks and functional components
- **Type Safety**: Full TypeScript support for enhanced development experience
- **Fast Development**: Powered by Vite for lightning-fast hot module replacement
- **Responsive Design**: Mobile-first approach using TailwindCSS
- **Developer Experience**: Configured with Biome for consistent code style
- **Form Management**:
  - React Hook Form for form state management
  - Zod for robust form validation
- **Data Fetching**:
  - TanStack Query (React Query) for efficient API integration
  - Automatic caching and background updates
- **UI Components**:
  - Radix UI primitives for accessible components
  - Dialog for goal creation with form validation
  - Progress indicators
  - Radio group for frequency selection
  - Weekly summary display with dayjs formatting
  - Pending goals tracking
- **Utility-First CSS**:
  - TailwindCSS for styling
  - tailwind-merge for class merging
  - tailwind-variants for component variants
- **Date Handling**:
  - Day.js integration for date formatting in Portuguese
- **Component Library**: Custom component library for consistent UI/UX
- **API Integration**: Implemented with React Query
- **Authentication**: (To be implemented)
- **Testing**: (To be implemented)

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

4. Start the development server:

```bash
yarn dev
```

---

## 🏗️ Project Structure

```
pocket-front/
├── public/          # Static assets
├── src/
│   ├── assets/      # Project assets (images, fonts, etc.)
│   ├── components/  # Reusable React components
│   │   ├── ui/     # UI components using Radix primitives
│   │   ├── Summary/ # Weekly summary component
│   │   └── PendingGoals/ # Pending goals component
│   ├── styles/      # Global styles and Tailwind configurations
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global CSS file
├── tests/           # Test files
├── biome.json       # Biome configuration
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

---

## 📱 Components

Currently implemented components:

- Goal Creation Dialog
  - Form validation with Zod
  - Activity input field with React Hook Form
  - Weekly frequency selection with Radio Group
  - Save and close functionality
- Weekly Summary
  - Date formatting in Portuguese
  - List of goals by day
  - Summary statistics
- Pending Goals Display
  - Dynamic goal tracking
  - Status indicators
- Progress Indicators
- Radio Group Selections

---

## 🧪 Running Tests

```bash
yarn test
```

---

## 📚 Documentation

Component documentation and usage examples will be available using Storybook (to be implemented).

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🔧 Environment Variables

```env
VITE_API_URL=http://localhost:3000
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
