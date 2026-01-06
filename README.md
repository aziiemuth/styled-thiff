# styled-thiff 🎨

> A beautiful and customizable React component library built with styled-components

[![npm version](https://img.shields.io/npm/v/styled-thiff.svg)](https://www.npmjs.com/package/styled-thiff)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **6 Customizable Components** - Header, Footer, Card, Button, Sidebar, Navbar
- 🎯 **Multiple Variants** - Each component has 2-4 different style variants
- 💅 **Styled Components** - Built with styled-components for easy customization
- 🌓 **Dark Mode Support** - Built-in dark mode with ThemeProvider
- 🎭 **Icon Flexibility** - Works with both lucide-react and react-icons
- 📱 **Responsive Design** - Mobile-friendly out of the box
- 🚀 **Next.js Ready** - Optimized for Next.js projects
- 📚 **Well Documented** - Comprehensive documentation and examples

## 📦 Installation

### Basic Installation

```bash
npm install styled-thiff styled-components
```

### With Icons (Choose One or Both)

```bash
# Option 1: Using Lucide React (Recommended)
npm install lucide-react

# Option 2: Using React Icons
npm install react-icons

# Option 3: Both (Maximum Flexibility)
npm install lucide-react react-icons
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom styled-components
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

### Basic Usage

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

### Using Dark Mode

Wrap your app with `ThemeProvider`:

```jsx
// app/layout.js
import { ThemeProvider } from "styled-thiff/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

Then use the dark mode toggle:

```jsx
import DarkModeToggle from "styled-thiff/components/DarkModeToggle";

export default function Navbar() {
  return (
    <nav>
      <DarkModeToggle />
    </nav>
  );
}
```

### Using with React Icons

```jsx
import { ButtonVariant } from "styled-thiff";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function MyComponent() {
  return (
    <>
      <ButtonVariant
        variant="primary"
        icon={<FaShoppingCart />}
        iconPosition="left"
      >
        Add to Cart
      </ButtonVariant>

      <ButtonVariant variant="outline" icon={<FaHeart />}>
        Favorite
      </ButtonVariant>
    </>
  );
}
```

### Using with Lucide React

```jsx
import { ButtonVariant } from "styled-thiff";
import { ShoppingCart, Heart } from "lucide-react";

export default function MyComponent() {
  return (
    <>
      <ButtonVariant
        variant="primary"
        icon={<ShoppingCart size={18} />}
        iconPosition="left"
      >
        Add to Cart
      </ButtonVariant>

      <ButtonVariant variant="outline" icon={<Heart size={18} />}>
        Favorite
      </ButtonVariant>
    </>
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
// or
import { FaHome, FaCog } from "react-icons/fa";

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

## 🌓 Dark Mode

### Setup

1. Wrap your app with `ThemeProvider`:

```jsx
import { ThemeProvider } from "styled-thiff/components/ThemeProvider";

<ThemeProvider>
  <YourApp />
</ThemeProvider>;
```

2. Use the `useTheme` hook:

```jsx
import { useTheme } from "styled-thiff/components/ThemeProvider";

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{isDark ? "Light Mode" : "Dark Mode"}</button>
  );
}
```

3. Or use the built-in toggle:

```jsx
import DarkModeToggle from "styled-thiff/components/DarkModeToggle";

<DarkModeToggle />;
```

### CSS Variables

The theme uses CSS variables that automatically switch:

```css
:root {
  --bg-primary: #fafafa;
  --bg-secondary: #ffffff;
  --text-primary: #263238;
  --text-secondary: #546e7a;
}

.dark {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --text-primary: #f7fafc;
  --text-secondary: #cbd5e0;
}
```

## 🎭 Icon Libraries

### Lucide React (Recommended)

```bash
npm install lucide-react
```

```jsx
import { Home, Settings, User } from "lucide-react";

<ButtonVariant icon={<Home size={18} />}>Home</ButtonVariant>;
```

### React Icons

```bash
npm install react-icons
```

```jsx
import { FaHome, FaCog, FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

<ButtonVariant icon={<FaHome />}>Home</ButtonVariant>;
```

**Available Icon Sets in react-icons:**

- `fa` - Font Awesome
- `ai` - Ant Design Icons
- `bi` - Bootstrap Icons
- `fi` - Feather Icons
- `md` - Material Design Icons
- `io` - Ionicons
- And many more!

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

## 📝 Complete Installation Example

```bash
# 1. Create Next.js app
npx create-next-app@latest my-app
cd my-app

# 2. Install styled-thiff and dependencies
npm install styled-thiff styled-components lucide-react react-icons

# 3. Configure Next.js (next.config.js)
export default {
  compiler: {
    styledComponents: true,
  },
}

# 4. Wrap with ThemeProvider (app/layout.js)
import { ThemeProvider } from "styled-thiff/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

# 5. Start using components!
import { HeaderVariant, CardVariant, ButtonVariant } from "styled-thiff";
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
