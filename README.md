# 🛒 বাজার দর — Bazar Dor

**Bazar Dor** is a responsive full-stack market price tracking web application built with **Next.js**, **React**, **TypeScript**, **MongoDB**, and **Better Auth**.

The application allows users to browse daily prices of essential products, explore products by category, compare market-wise prices, view price changes, create an account, sign in with multiple authentication methods, and manage their profile.

---

## ✨ Features

### 🏠 Responsive Home Page

The homepage provides an overview of the latest market prices.

It includes:

- Hero section
- Current Bengali date
- Product price marquee
- Products with increased prices
- Products with decreased prices
- All products section
- Responsive product cards
- Mobile, tablet, and desktop support

---

### 🛍️ Product Categories

Users can browse products by category.

Available categories include:

- চাল
- ডাল
- তেল
- সবজি
- মাছ
- মাংস
- ডিম-দুধ
- মসলা

Each category page displays:

- Category name and icon
- Total product count
- Category-specific products
- Sorting options
- Responsive product grid

Example route:

```text
/category/chal
```

---

### 🔃 Product Sorting

Products on category pages can be sorted by:

- Default order
- Price: Low to High
- Price: High to Low
- Bengali product name

---

### 📦 Product Details

Every product has a dedicated details page.

The page includes:

- Product name
- Product category
- Product unit
- Current price
- Price change percentage
- Previous price comparison
- Lowest market price
- Highest market price
- Current price summary
- Market-wise price table
- Market average price

Example route:

```text
/products/1
```

---

### 📊 Market-wise Price Comparison

Users can compare prices from different markets.

The market table displays:

- Market name
- Division
- Minimum price
- Maximum price
- Average price

Average price is calculated from the minimum and maximum price of each market.

---

### 📢 Product Price Marquee

A scrolling marquee displays product prices and price changes across the website.

It shows:

- Product name
- Current price
- Product unit
- Price increase
- Price decrease
- Unchanged prices

The marquee is implemented using **react-marquee-text**.

---

### 🔐 Authentication

Authentication is implemented using **Better Auth**.

Users can authenticate using:

- Email and password
- Google OAuth
- GitHub OAuth

Authentication features include:

- Account creation
- Email/password sign in
- Google sign in
- GitHub sign in
- Session management
- Sign out
- Authentication feedback using toast notifications

---

### 🗄️ MongoDB Integration

**MongoDB** is used as the database layer for authentication and persistent user data.

Better Auth is connected to MongoDB using the MongoDB adapter.

---

### 👤 Logged-in User Menu

After signing in, the navbar displays a custom user profile menu.

It includes:

- User avatar
- User name
- User email
- Profile link
- Sign-out option

OAuth profile images are displayed using Next.js `Image`.

---

### 👤 Profile Page

Authenticated users have access to a protected profile page.

The profile page displays:

- User avatar
- Name
- Email address
- Sign-out button
- Profile information
- Profile update functionality

The profile update form remains hidden until the user chooses to edit their information.

After successfully updating the profile, the application shows a success notification.

---

### 🛡️ Protected Route

The profile page is protected using **Next.js Proxy**.

Unauthenticated users trying to access:

```text
/profile
```

are redirected to:

```text
/signin
```

---

### 🔔 Toast Notifications

The application uses **React Hot Toast** for user feedback.

Notifications are shown for actions such as:

- Successful account creation
- Successful sign in
- Authentication errors
- Successful profile update
- Sign out
- Form validation errors

---

### 📱 Responsive Navigation

The navbar is responsive across different screen sizes.

#### Mobile

Mobile devices use a dropdown navigation menu containing:

- Product categories
- Sign In
- Sign Up
- Logged-in user information
- Profile link
- Sign-out option

#### Tablet & Desktop

Larger screens display:

- Website logo
- Bengali current date
- Category navigation
- Authentication buttons
- Logged-in user profile dropdown

---

### 📅 Bengali Current Date

The website displays the current date using the Bengali locale.

Example implementation:

```ts
new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
  timeZone: "Asia/Dhaka",
});
```

---

### 💀 Skeleton Loading UI

The application includes a custom skeleton loading screen.

The loading interface follows the structure of the actual homepage, including:

- Hero skeleton
- Section heading skeletons
- Product card skeletons
- Responsive layouts

---

### 🚫 Custom 404 Page

A custom `not-found` page handles invalid URLs and unavailable products or categories.

Invalid dynamic routes automatically display the custom 404 page.

Examples:

```text
/category/invalid-category
```

```text
/products/999999
```

---

### 📱 Fully Responsive Design

Bazar Dor is designed to work across:

- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop displays

Responsive behavior is implemented for:

- Navbar
- Mobile menu
- User dropdown
- Hero section
- Product cards
- Category pages
- Product details
- Market price table
- Authentication forms
- Profile page
- Footer
- Loading interface

---

# 🛠️ Technologies Used

## Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**

## Authentication

- **Better Auth**
- Email/password authentication
- Google OAuth
- GitHub OAuth

## Database

- **MongoDB**
- Better Auth MongoDB Adapter

## UI & Utilities

- **React Icons**
- **React Hot Toast**
- **React Marquee Text**
- **Next.js Image**
- **Next.js Font**

## Deployment & Version Control

- **Vercel**
- **Git**
- **GitHub**

---

# 🧠 Next.js Concepts Used

This project demonstrates several important Next.js concepts:

- App Router
- Server Components
- Client Components
- Dynamic routes
- Dynamic route parameters
- Server-side API fetching
- `loading.tsx`
- `not-found.tsx`
- `notFound()`
- Next.js Proxy
- Protected routes
- `next/image`
- `next/link`
- `next/font`
- `useRouter`
- `usePathname`
- Responsive layouts
- Authentication integration
- Database integration

---

# ⚛️ React Concepts Used

The project uses several React concepts, including:

- Reusable components
- Props
- Interfaces
- Conditional rendering
- Event handlers
- Form handling
- `FormData`
- `Object.fromEntries()`
- `useState`
- Authentication session state
- Component composition
- Array filtering
- Array sorting
- Array mapping

---

# 🌐 API

Bazar Dor uses the Programming Hero Bazar Dor API.

### Base URL

```text
https://openapi.programming-hero.com/api/bazardor
```

---

## All Categories

```text
GET /api/bazardor/categories
```

Example:

```text
https://openapi.programming-hero.com/api/bazardor/categories
```

---

## Single Category

```text
GET /api/bazardor/categories/[category]
```

Example:

```text
https://openapi.programming-hero.com/api/bazardor/categories/chal
```

---

## All Products

```text
GET /api/bazardor/products
```

Example:

```text
https://openapi.programming-hero.com/api/bazardor/products
```

---

## Filter Products by Category

```text
GET /api/bazardor/products?category=[category]
```

Example:

```text
https://openapi.programming-hero.com/api/bazardor/products?category=chal
```

---

## Single Product

```text
GET /api/bazardor/products/[id]
```

Example:

```text
https://openapi.programming-hero.com/api/bazardor/products/1
```

---

# 📂 Project Structure

A simplified representation of the project:

```text
src/
│
├── app/
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts
│   │
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx
│   │
│   ├── products/
│   │   └── [productId]/
│   │       └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── signin/
│   │   └── page.tsx
│   │
│   ├── signup/
│   │   └── page.tsx
│   │
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── CurrentDate.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── NavHeader.tsx
│   ├── PriceMarquee.tsx
│   ├── ProductCard.tsx
│   ├── CategoryProducts.tsx
│   └── UserMenu.tsx
│
├── lib/
│   ├── auth.ts
│   └── auth-client.ts
│
└── proxy.ts
```

The exact structure may contain additional project files.

---

# 🔗 Application Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/category/[categoryId]` | Category products |
| `/products/[productId]` | Product details |
| `/signin` | User sign in |
| `/signup` | User registration |
| `/profile` | Protected user profile |

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

---

## 2. Enter the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Never commit real environment variables, API secrets, or OAuth credentials to GitHub.

---

## 5. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🔑 OAuth Callback URLs

For local development:

### Google

```text
http://localhost:3000/api/auth/callback/google
```

### GitHub

```text
http://localhost:3000/api/auth/callback/github
```

When deploying the application, replace `localhost:3000` with the production domain in the Google and GitHub OAuth settings.

---

# 📦 Production Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

# ☁️ Deployment

The application can be deployed using **Vercel**.

Before deployment, make sure to configure all required environment variables in the Vercel project settings.

Also update:

```env
BETTER_AUTH_URL=https://your-production-domain.com
```

and configure the production Google and GitHub OAuth callback URLs.

---

# 🎯 Learning Objectives

This project was created to practice and strengthen knowledge of:

1. Next.js App Router
2. React component architecture
3. Server Components
4. Client Components
5. Dynamic routing
6. API data fetching
7. Product filtering
8. Product sorting
9. Responsive web design
10. Better Auth
11. Email/password authentication
12. Google OAuth
13. GitHub OAuth
14. MongoDB integration
15. Protected routes using Proxy
16. Session handling
17. Form handling
18. User profile management
19. Toast notifications
20. Loading states
21. Custom 404 handling
22. Production deployment

---

# 🔮 Possible Future Improvements

Possible improvements include:

- 🔍 Product search
- ⭐ Favorite products
- 📈 Historical price charts
- 📊 Weekly/monthly price comparison
- 🔔 Price change notifications
- 🌙 Dark mode
- 📍 Market filtering by location
- 🛒 Personal shopping list
- 📱 PWA support
- ♿ Additional accessibility improvements

---

# 👨‍💻 Developer

**Shirsendu Biswas**

Full-Stack Web Development Learner & WordPress Developer

---

# 📄 Disclaimer

Bazar Dor is an educational web development project.

Product prices and market information displayed in the application are provided by the external API and are intended for learning and demonstration purposes.

Actual market prices may vary depending on location, market conditions, availability, and time.

---

# ⭐ Support

If you like the project, consider giving the repository a ⭐ on GitHub.