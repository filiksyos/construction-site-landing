# BuildRight Construction - Landing Page MVP

🏗️ A modern, responsive construction company landing page built with Next.js 15, featuring dark mode support, smooth animations, and analytics integration.

## ✨ Features

- 🌓 **Dark Mode Support** - Automatic theme switching based on system preferences
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ✨ **Smooth Animations** - Framer Motion powered transitions and effects
- 📊 **Analytics Integration** - Vercel Analytics for tracking user engagement
- 🎨 **Modern UI** - Construction-themed design with orange/amber color scheme
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/filiksyos/construction-site-landing.git
cd construction-site-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Analytics
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Projects.tsx        # Featured projects
│   ├── Features.tsx        # Why choose us section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
primary: {
  DEFAULT: '#F97316', // Orange-500
  light: '#FB923C',   // Orange-400
  dark: '#EA580C',    // Orange-600
}
```

### Content

Update the content in each component file:
- `components/Hero.tsx` - Main headline and intro
- `components/Services.tsx` - Service offerings
- `components/Projects.tsx` - Project portfolio
- `components/Features.tsx` - Company advantages
- `components/CTA.tsx` - Contact information

## 🛠️ Built With

- [Next.js 15.1.3](https://nextjs.org/) - React framework
- [React 19.0.0](https://react.dev/) - UI library
- [TypeScript 5](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Styling
- [Framer Motion 12.4.3](https://www.framer.com/motion/) - Animations
- [Lucide React 0.475.0](https://lucide.dev/) - Icons
- [Vercel Analytics 1.4.1](https://vercel.com/analytics) - Analytics

## 📊 Analytics

This project includes Vercel Analytics integration. To enable:

1. Deploy to Vercel
2. Analytics will automatically start tracking visitors
3. View analytics in your Vercel dashboard

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filiksyos/construction-site-landing)

Or deploy manually:

```bash
npm run build
npm run start
```

## 📝 License

This project is based on [launch-mvp-stripe-nextjs-supabase](https://github.com/shenseanchen/launch-mvp-stripe-nextjs-supabase) template.

## 🙏 Acknowledgments

- Design inspired by modern construction industry websites
- Icons from Lucide and React Icons
- Built with the amazing Next.js framework

---

Made with 🏗️ by BuildRight Construction
