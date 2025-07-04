# Portfolio

A personal portfolio website built with [Next.js](https://nextjs.org), React, and Tailwind CSS. Showcases projects, services, skills, and contact information.

## Features

- Responsive design with Tailwind CSS
- Animated transitions using [motion](https://motion.dev/)
- Project and service showcase
- Contact form with Web3Forms integration
- Custom assets and icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/maximusrax/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Main application pages and components
- `assets/` - Images and icons
- `public/` - Static files (e.g., resume PDF)
- `tailwind.config.mjs` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `next.config.mjs` - Next.js configuration

## Customization

- Update your personal information, projects, and services in [`assets/assets.js`](assets/assets.js).
- Replace images in the `assets/` folder as needed.
- Update the contact form access key in [`app/components/Contact.jsx`](app/components/Contact.jsx).

## Deployment

You can deploy this project on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is licensed under the MIT License.