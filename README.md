# STYLED-THIFF UI Components

Kumpulan komponen UI berbasis Next.js + styled-components yang bisa dipakai ulang dan dikustom lewat props.

## 🚀 Instalasi

```bash
npm install styled-thiff styled-components lucide-react
npm install --save-dev babel-plugin-styled-components
```

**next.config.js**
```js
module.exports = {
  compiler: {
    styledComponents: true,
  },
}
```

## 📁 Struktur

```
components/
  ├── HeaderVariant.jsx
  ├── FooterVariant.jsx
  ├── CardVariant.jsx
  ├── ButtonVariant.jsx
  ├── SidebarVariant.jsx
  └── NavbarVariant.jsx
```

## 💻 Cara Pakai

```jsx
"use client";

import {
  HeaderVariant,
  FooterVariant,
  CardVariant,
  ButtonVariant,
} from "styled-thiff";
import { Home } from "lucide-react";

export default function Page() {
  return (
    <div>
      <HeaderVariant
        variant="flat"
        logo="Toko Saya"
        menuItems={[
          { label: "Beranda", href: "/" },
          { label: "Produk", href: "/produk" },
        ]}
        buttonText="Daftar"
      />

      <CardVariant
        variant="glass"
        title="Promo Spesial"
        content="Diskon 50% hari ini"
        badge="HOT"
      />

      <ButtonVariant variant="primary">
        Beli Sekarang
      </ButtonVariant>
    </div>
  );
}
```

## 📖 Komponen

### HeaderVariant
- **variant**: `flat` | `angled` | `with-search` | `notification`
- **Props**: logo, menuItems, buttonText, searchPlaceholder, profileName, profileImage

### FooterVariant
- **variant**: `simple` | `split` | `social`
- **Props**: copyrightText, socialLinks, links

### CardVariant
- **variant**: `default` | `photo-left` | `overlay` | `rounded` | `glass` | `neon`
- **Props**: title, content, image, badge, neonIcon

### ButtonVariant
- **variant**: `primary` | `outline` | `shadow` | `icon`
- **Props**: children, onClick, icon, iconPosition

### SidebarVariant
- **variant**: `classic` | `minimal` | `floating`
- **Props**: logoText, menuItems `[{id, label, icon}]`, setActiveComponent

### NavbarVariant
- **Props**: title, leftContent, rightContent

## ⚠️ Troubleshooting

- Pastikan pakai `"use client"` di top file
- Install `lucide-react` untuk icon
- Aktifkan `styledComponents: true` di next.config.js

---

MIT License