# API Documentation for Limitless Infotech Solutions

This document provides detailed information about the API endpoints available in the Limitless Infotech Solutions application. The API is divided into three main sections: Public API, Admin API, and Authentication API.

## Base URL

All API routes are prefixed with `/api`. For a local development environment, the full base URL would be `http://localhost:3000/api`.

---

## Public API Endpoints

These endpoints are publicly accessible and do not require authentication. They are used to fetch data for the main website.

### Products

#### 1. Get All Products

- **Description**: Retrieves a list of all products.
- **Method**: `GET`
- **URL**: `/api/public/products`
... (content truncated for brevity)

### Contact

#### 1. Submit Contact Form

- **Description**: Submits a message from the contact form.
... (content truncated for brevity)

---

## Admin API Endpoints

These endpoints are protected and require the user to be authenticated with an `ADMIN` role.
... (content truncated for brevity)

### Admin: Products

#### 1. Get All Products (Admin)
... (content truncated for brevity)

#### 2. Create a New Product
... (content truncated for brevity)

---

## Authentication API

These endpoints are automatically handled by **NextAuth.js** and are used for session management and user authentication. You typically do not need to interact with these directly, but rather through the `next-auth/react` client-side hooks (`useSession`, `signIn`, `signOut`).

- **POST `/api/auth/callback/credentials`**:
  - The endpoint used by the `signIn` function when using the `credentials` provider. It processes the login attempt.

- **GET `/api/auth/session`**:
  - Retrieves the current user's session data. The `useSession` hook uses this endpoint.

- **GET `/api/auth/signin`**:
  - Renders the default NextAuth.js sign-in page. In this application, this is overridden by the custom login page at `/admin/login`.

- **POST `/api/auth/signout`**:
  - Handles the sign-out process, clearing the session cookie.

- **GET `/api/auth/error`**:
  - Displays authentication error messages.
