# styled-thiff 🎨

> A beautiful and customizable React component library built with styled-components

[![npm version](https://img.shields.io/npm/v/styled-thiff.svg)](https://www.npmjs.com/package/styled-thiff)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **6 Customizable Components** - Header, Footer, Card, Button, Sidebar, Navbar
- 🎯 **Multiple Variants** - Each component has 2-4 different style variants
- 💅 **Styled Components** - Built with styled-components for easy customization
- 📱 **Responsive Design** - Mobile-friendly out of the box
- 🚀 **Next.js Ready** - Optimized for Next.js projects
- 📚 **Well Documented** - Comprehensive documentation and examples

## 📦 Installation

```bash
npm install styled-thiff styled-components lucide-react
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom styled-components lucide-react
```

### Next.js Configuration

Add this to your `next.config.js` or `next.config.mjs`:

```js
export default {
  compiler: {
    styledComponents: true,
  },
};
```

## 🚀 Quick Start

```jsx
"use client";

import { HeaderVariant, CardVariant, ButtonVariant } from "styled-thiff";

export default function Page() {
  return (
    <div>
      <HeaderVariant
        variant="flat"
        logo="My App"
        menuItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        buttonText="Sign Up"
      />

      <CardVariant
        variant="glass"
        title="Welcome"
        content="Get started with styled-thiff components"
        badge="NEW"
      />

      <ButtonVariant variant="primary">Get Started</ButtonVariant>
    </div>
  );
}
```

## 📖 Components

### HeaderVariant

Multiple header styles for your application.

**Variants**: `flat` | `angled` | `with-search` | `notification`

```jsx
<HeaderVariant
  variant="flat"
  logo="Brand Name"
  menuItems={[{ label: "Home", href: "/" }]}
  buttonText="Sign Up"
  onButtonClick={() => console.log("clicked")}
/>
```

### CardVariant

Versatile card component with various styles.

**Variants**: `default` | `glass` | `neon` | `rounded` | `photo-left` | `overlay`

```jsx
<CardVariant
  variant="glass"
  title="Card Title"
  content="Card description"
  badge="PREMIUM"
/>
```

### ButtonVariant

Customizable buttons with different styles.

**Variants**: `primary` | `outline` | `shadow` | `icon`

```jsx
<ButtonVariant variant="primary" onClick={() => alert("Clicked!")}>
  Click Me
</ButtonVariant>
```

### SidebarVariant

Navigation sidebar with multiple layouts.

**Variants**: `classic` | `minimal` | `floating`

```jsx
import { Home, Settings } from "lucide-react";

<SidebarVariant
  variant="classic"
  logoText="Dashboard"
  menuItems={[
    { id: "home", label: "Home", icon: Home },
    { id: "settings", label: "Settings", icon: Settings },
  ]}
  setActiveComponent={(id) => console.log(id)}
/>;
```

### FooterVariant

Footer component with different layouts.

**Variants**: `simple` | `split` | `social`

```jsx
<FooterVariant
  variant="social"
  copyrightText="© 2025 My Company"
  socialLinks={[
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ]}
/>
```

### NavbarVariant

Simple navbar for top-level navigation.

```jsx
<NavbarVariant
  title="My App"
  leftContent={<button>Menu</button>}
  rightContent={<button>Profile</button>}
/>
```

## 🌐 Live Demo

Check out the live demo and full documentation:
**[https://styled-thiff.vercel.app](https://styled-thiff.vercel.app)**

Interactive documentation with copy-paste code examples:
**[https://styled-thiff.vercel.app/docs](https://styled-thiff.vercel.app/docs)**

## 📚 Documentation

For detailed props and usage examples, visit our [documentation page](https://styled-thiff.vercel.app/docs).

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/aziiemuth/styled-thiff.git

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT © [Athiief](https://github.com/aziiemuth)

## 🔗 Links

- [GitHub Repository](https://github.com/aziiemuth/styled-thiff)
- [NPM Package](https://www.npmjs.com/package/styled-thiff)
- [Live Demo](https://styled-thiff.vercel.app)
- [Documentation](https://styled-thiff.vercel.app/docs)
- [Report Issues](https://github.com/aziiemuth/styled-thiff/issues)

---

Made with ❤️ by Athiief
