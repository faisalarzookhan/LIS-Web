# Limitless Infotech Solutions - Website & Admin Panel

This repository contains the source code for the official website and admin control system for Limitless Infotech Solutions. The project is built with Next.js and features a dynamic, multi-page website and a powerful admin dashboard for content management.

## Features

- **Dynamic Public Website**: A modern, responsive website showcasing the company's services, products, portfolio, and testimonials.
- **Admin Dashboard**: A secure, role-based admin panel for managing all site content, including pages, products, portfolio entries, and user reviews.
- **Authentication**: Secure admin login powered by NextAuth.js with a credentials-based strategy.
- **Interactive UI**: A polished user interface with animations and transitions powered by Framer Motion.
- **Analytics**: An admin dashboard with data visualizations using Chart.js to display key site metrics.
- **Database Integration**: Full integration with a PostgreSQL database via the Prisma ORM.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [React Query](https://tanstack.com/query/latest)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **UI Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Chart.js](https://www.chartjs.org/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or later)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/) running locally or a connection string to a hosted instance.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/limitless-infotech.git
cd limitless-infotech
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```
Now, open the `.env` file and update the variables:

- `DATABASE_URL`: Your PostgreSQL connection string.
- `NEXTAUTH_SECRET`: A strong, random string used to hash tokens. You can generate one with `openssl rand -hex 32`.
- `NEXTAUTH_URL`: The full URL of your development site (e.g., `http://localhost:3000`).

### 4. Set up the database

Run the Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```
This will sync your database with the schema defined in `prisma/schema.prisma`.

### 5. Run the development server

```bash
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.
- `npm run test`: Runs the test suite using Jest.

## Admin Access

To access the admin dashboard, navigate to `/admin/login`. Use the following credentials (for development purposes):
- **Email**: `admin@limitless.com`
- **Password**: `password`
