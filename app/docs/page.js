"use client";

import styled from "styled-components";
import { useState } from "react";
import ComponentDoc from "@/components/ComponentDoc";
import HeaderVariant from "@/components/HeaderVariant";
import CardVariant from "@/components/CardVariant";
import ButtonVariant from "@/components/ButtonVariant";
import SidebarVariant from "@/components/SidebarVariant";
import FooterVariant from "@/components/FooterVariant";
import NavbarVariant from "@/components/NavbarVariant";
import { Home, Package, Users, Settings } from "lucide-react";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Header = styled.header`
  background: linear-gradient(135deg, #009688, #00796b);
  color: white;
  padding: 48px 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  display: flex;
  gap: 32px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.nav`
  width: 250px;
  flex-shrink: 0;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const SidebarSticky = styled.div`
  position: sticky;
  top: 24px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #009688;
  margin-bottom: 16px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 8px;
`;

const NavLink = styled.button`
  width: 100%;
  text-align: left;
  background: ${(p) => (p.$active ? "#e0f2f1" : "transparent")};
  color: ${(p) => (p.$active ? "#009688" : "#546e7a")};
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  font-weight: ${(p) => (p.$active ? "600" : "500")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0f2f1;
    color: #009688;
  }
`;

const Content = styled.main`
  flex: 1;
  min-width: 0;
`;

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("header");

  const sections = [
    { id: "header", label: "Header" },
    { id: "navbar", label: "Navbar" },
    { id: "card", label: "Card" },
    { id: "button", label: "Button" },
    { id: "sidebar", label: "Sidebar" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <PageWrapper>
      <Header>
        <Title>📚 Component Documentation</Title>
        <Subtitle>
          Panduan lengkap penggunaan komponen design system dengan contoh kode yang siap digunakan
        </Subtitle>
      </Header>

      <Container>
        <Sidebar>
          <SidebarSticky>
            <SidebarTitle>Components</SidebarTitle>
            <NavList>
              {sections.map((section) => (
                <NavItem key={section.id}>
                  <NavLink
                    $active={activeSection === section.id}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </SidebarSticky>
        </Sidebar>

        <Content>
          {activeSection === "header" && (
            <ComponentDoc
              title="HeaderVariant"
              description="Komponen header yang fleksibel dengan berbagai varian untuk kebutuhan navigasi aplikasi Anda."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"flat"',
                  description: 'Varian header: "flat", "angled", "with-search", "notification"',
                },
                {
                  name: "logo",
                  type: "string",
                  default: '"Athiief Studio"',
                  description: "Teks logo yang ditampilkan di header",
                },
                {
                  name: "menuItems",
                  type: "array",
                  default: "[]",
                  description: "Array objek menu dengan properti label dan href",
                },
                {
                  name: "buttonText",
                  type: "string",
                  default: '"Sign Up"',
                  description: "Teks untuk tombol CTA di header",
                },
                {
                  name: "onButtonClick",
                  type: "function",
                  default: "undefined",
                  description: "Fungsi callback ketika tombol diklik",
                },
                {
                  name: "searchPlaceholder",
                  type: "string",
                  default: '"Search products..."',
                  description: "Placeholder untuk search bar (variant with-search)",
                },
              ]}
              examples={[
                {
                  title: "Flat Header",
                  description: "Header dengan background solid dan tombol CTA",
                  preview: (
                    <HeaderVariant
                      variant="flat"
                      logo="Brand Studio"
                      menuItems={[
                        { label: "Home", href: "#" },
                        { label: "Products", href: "#" },
                        { label: "About", href: "#" },
                      ]}
                      buttonText="Get Started"
                      onButtonClick={() => alert("Button clicked!")}
                    />
                  ),
                  code: `import HeaderVariant from "@/components/HeaderVariant";

export default function MyPage() {
  return (
    <HeaderVariant
      variant="flat"
      logo="Brand Studio"
      menuItems={[
        { label: "Home", href: "#" },
        { label: "Products", href: "#" },
        { label: "About", href: "#" },
      ]}
      buttonText="Get Started"
      onButtonClick={() => alert("Button clicked!")}
    />
  );
}`,
                },
                {
                  title: "Angled Header",
                  description: "Header dengan gradient background dan sudut melengkung",
                  preview: (
                    <HeaderVariant
                      variant="angled"
                      logo="Creative Hub"
                      menuItems={[
                        { label: "Portfolio", href: "#" },
                        { label: "Services", href: "#" },
                        { label: "Contact", href: "#" },
                      ]}
                      buttonText="Hire Us"
                    />
                  ),
                  code: `import HeaderVariant from "@/components/HeaderVariant";

export default function MyPage() {
  return (
    <HeaderVariant
      variant="angled"
      logo="Creative Hub"
      menuItems={[
        { label: "Portfolio", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contact", href: "#" },
      ]}
      buttonText="Hire Us"
    />
  );
}`,
                },
                {
                  title: "Search Header",
                  description: "Header dengan search bar dan icon utilities",
                  preview: (
                    <HeaderVariant
                      variant="with-search"
                      logo="Shop Online"
                      searchPlaceholder="Cari produk..."
                    />
                  ),
                  code: `import HeaderVariant from "@/components/HeaderVariant";

export default function MyPage() {
  return (
    <HeaderVariant
      variant="with-search"
      logo="Shop Online"
      searchPlaceholder="Cari produk..."
    />
  );
}`,
                },
              ]}
            />
          )}

          {activeSection === "navbar" && (
            <ComponentDoc
              title="NavbarVariant"
              description="Komponen navbar sederhana untuk navigasi top-level dengan area kiri dan kanan yang dapat dikustomisasi."
              props={[
                {
                  name: "title",
                  type: "string",
                  default: '"Yuk Styling"',
                  description: "Judul yang ditampilkan di tengah navbar",
                },
                {
                  name: "leftContent",
                  type: "ReactNode",
                  default: "undefined",
                  description: "Konten yang ditampilkan di sisi kiri navbar",
                },
                {
                  name: "rightContent",
                  type: "ReactNode",
                  default: "undefined",
                  description: "Konten yang ditampilkan di sisi kanan navbar",
                },
              ]}
              examples={[
                {
                  title: "Basic Navbar",
                  description: "Navbar dengan title dan button di kiri dan kanan",
                  preview: (
                    <NavbarVariant
                      title="My Dashboard"
                      leftContent={<button style={{background: 'transparent', border: 'none', color: 'white', cursor: 'pointer'}}>☰ Menu</button>}
                      rightContent={<button style={{background: 'transparent', border: 'none', color: 'white', cursor: 'pointer'}}>🔔 Notifications</button>}
                    />
                  ),
                  code: `import NavbarVariant from "@/components/NavbarVariant";

export default function MyPage() {
  return (
    <NavbarVariant
      title="My Dashboard"
      leftContent={<button>☰ Menu</button>}
      rightContent={<button>🔔 Notifications</button>}
    />
  );
}`,
                },
              ]}
            />
          )}

          {activeSection === "card" && (
            <ComponentDoc
              title="CardVariant"
              description="Komponen card yang versatile dengan berbagai varian styling untuk menampilkan konten."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"default"',
                  description: 'Varian card: "default", "glass", "neon", "rounded", "photo-left", "overlay"',
                },
                {
                  name: "title",
                  type: "string",
                  default: '"Card Title"',
                  description: "Judul card",
                },
                {
                  name: "content",
                  type: "string",
                  default: '"Card content..."',
                  description: "Konten/deskripsi card",
                },
                {
                  name: "image",
                  type: "string",
                  default: "undefined",
                  description: "URL gambar untuk card",
                },
                {
                  name: "badge",
                  type: "string",
                  default: '"Premium"',
                  description: "Teks badge untuk variant glass",
                },
                {
                  name: "neonIcon",
                  type: "string",
                  default: '"✨"',
                  description: "Icon untuk variant neon",
                },
              ]}
              examples={[
                {
                  title: "Glass Card",
                  description: "Card dengan efek glassmorphism dan badge",
                  preview: (
                    <div style={{ maxWidth: "400px" }}>
                      <CardVariant
                        variant="glass"
                        title="Premium Feature"
                        content="Nikmati pengalaman premium dengan fitur eksklusif."
                        badge="PREMIUM"
                      />
                    </div>
                  ),
                  code: `import CardVariant from "@/components/CardVariant";

export default function MyPage() {
  return (
    <CardVariant
      variant="glass"
      title="Premium Feature"
      content="Nikmati pengalaman premium dengan fitur eksklusif."
      badge="PREMIUM"
    />
  );
}`,
                },
                {
                  title: "Neon Card",
                  description: "Card dengan efek neon yang futuristik",
                  preview: (
                    <div style={{ maxWidth: "400px" }}>
                      <CardVariant
                        variant="neon"
                        title="Futuristic Design"
                        content="Desain modern dengan efek neon yang memukau."
                        neonIcon="🚀"
                      />
                    </div>
                  ),
                  code: `import CardVariant from "@/components/CardVariant";

export default function MyPage() {
  return (
    <CardVariant
      variant="neon"
      title="Futuristic Design"
      content="Desain modern dengan efek neon yang memukau."
      neonIcon="🚀"
    />
  );
}`,
                },
                {
                  title: "Photo Card",
                  description: "Card dengan gambar di sisi kiri",
                  preview: (
                    <div style={{ maxWidth: "500px" }}>
                      <CardVariant
                        variant="photo-left"
                        title="Product Showcase"
                        content="Tampilkan produk dengan gaya profesional."
                        image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
                      />
                    </div>
                  ),
                  code: `import CardVariant from "@/components/CardVariant";

export default function MyPage() {
  return (
    <CardVariant
      variant="photo-left"
      title="Product Showcase"
      content="Tampilkan produk dengan gaya profesional."
      image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    />
  );
}`,
                },
              ]}
            />
          )}

          {activeSection === "button" && (
            <ComponentDoc
              title="ButtonVariant"
              description="Komponen button dengan berbagai varian styling dan dukungan icon."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"primary"',
                  description: 'Varian button: "primary", "outline", "shadow", "icon"',
                },
                {
                  name: "children",
                  type: "ReactNode",
                  required: true,
                  description: "Konten/teks button",
                },
                {
                  name: "onClick",
                  type: "function",
                  default: "undefined",
                  description: "Fungsi callback ketika button diklik",
                },
                {
                  name: "icon",
                  type: "ReactNode",
                  default: "undefined",
                  description: "Custom icon untuk button",
                },
                {
                  name: "iconPosition",
                  type: "string",
                  default: '"right"',
                  description: 'Posisi icon: "left" atau "right"',
                },
              ]}
              examples={[
                {
                  title: "Primary Button",
                  description: "Button utama dengan gradient background",
                  preview: (
                    <ButtonVariant variant="primary" onClick={() => alert("Clicked!")}>
                      Click Me
                    </ButtonVariant>
                  ),
                  code: `import ButtonVariant from "@/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant 
      variant="primary" 
      onClick={() => alert("Clicked!")}
    >
      Click Me
    </ButtonVariant>
  );
}`,
                },
                {
                  title: "Outline Button",
                  description: "Button dengan border dan background transparan",
                  preview: (
                    <ButtonVariant variant="outline">
                      Learn More
                    </ButtonVariant>
                  ),
                  code: `import ButtonVariant from "@/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant variant="outline">
      Learn More
    </ButtonVariant>
  );
}`,
                },
                {
                  title: "Shadow Button",
                  description: "Button dengan shadow yang prominent",
                  preview: (
                    <ButtonVariant variant="shadow">
                      Get Started
                    </ButtonVariant>
                  ),
                  code: `import ButtonVariant from "@/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant variant="shadow">
      Get Started
    </ButtonVariant>
  );
}`,
                },
                {
                  title: "Icon Button",
                  description: "Button dengan icon",
                  preview: (
                    <ButtonVariant variant="icon">
                      Add to Cart
                    </ButtonVariant>
                  ),
                  code: `import ButtonVariant from "@/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant variant="icon">
      Add to Cart
    </ButtonVariant>
  );
}`,
                },
              ]}
            />
          )}

          {activeSection === "sidebar" && (
            <ComponentDoc
              title="SidebarVariant"
              description="Komponen sidebar navigasi dengan berbagai varian layout."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"classic"',
                  description: 'Varian sidebar: "classic", "minimal", "floating"',
                },
                {
                  name: "logoText",
                  type: "string",
                  default: '"UI Panel"',
                  description: "Teks logo di bagian atas sidebar",
                },
                {
                  name: "menuItems",
                  type: "array",
                  required: true,
                  description: "Array objek menu dengan properti id, label, dan icon",
                },
                {
                  name: "setActiveComponent",
                  type: "function",
                  default: "undefined",
                  description: "Callback ketika menu item dipilih",
                },
              ]}
              examples={[
                {
                  title: "Classic Sidebar",
                  description: "Sidebar dengan label lengkap",
                  preview: (
                    <div style={{ maxWidth: "250px" }}>
                      <SidebarVariant
                        variant="classic"
                        logoText="Dashboard"
                        menuItems={[
                          { id: "home", label: "Home", icon: Home },
                          { id: "products", label: "Products", icon: Package },
                          { id: "users", label: "Users", icon: Users },
                          { id: "settings", label: "Settings", icon: Settings },
                        ]}
                        setActiveComponent={(active) => console.log(active)}
                      />
                    </div>
                  ),
                  code: `import SidebarVariant from "@/components/SidebarVariant";
import { Home, Package, Users, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <SidebarVariant
      variant="classic"
      logoText="Dashboard"
      menuItems={[
        { id: "home", label: "Home", icon: Home },
        { id: "products", label: "Products", icon: Package },
        { id: "users", label: "Users", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
      ]}
      setActiveComponent={(active) => console.log(active)}
    />
  );
}`,
                },
                {
                  title: "Minimal Sidebar",
                  description: "Sidebar compact dengan icon saja",
                  preview: (
                    <div style={{ maxWidth: "100px" }}>
                      <SidebarVariant
                        variant="minimal"
                        menuItems={[
                          { id: "home", label: "Home", icon: Home },
                          { id: "products", label: "Products", icon: Package },
                          { id: "settings", label: "Settings", icon: Settings },
                        ]}
                      />
                    </div>
                  ),
                  code: `import SidebarVariant from "@/components/SidebarVariant";
import { Home, Package, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <SidebarVariant
      variant="minimal"
      menuItems={[
        { id: "home", label: "Home", icon: Home },
        { id: "products", label: "Products", icon: Package },
        { id: "settings", label: "Settings", icon: Settings },
      ]}
    />
  );
}`,
                },
              ]}
            />
          )}

          {activeSection === "footer" && (
            <ComponentDoc
              title="FooterVariant"
              description="Komponen footer dengan berbagai layout untuk bagian bawah halaman."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"simple"',
                  description: 'Varian footer: "simple", "split", "social"',
                },
                {
                  name: "copyrightText",
                  type: "string",
                  default: '"© 2025..."',
                  description: "Teks copyright",
                },
                {
                  name: "socialLinks",
                  type: "array",
                  default: "[]",
                  description: "Array objek social links dengan properti label dan href",
                },
                {
                  name: "links",
                  type: "array",
                  default: "[]",
                  description: "Array objek links dengan properti label dan href",
                },
              ]}
              examples={[
                {
                  title: "Simple Footer",
                  description: "Footer minimalis dengan copyright saja",
                  preview: (
                    <FooterVariant
                      variant="simple"
                      copyrightText="© 2025 My Company. All rights reserved."
                    />
                  ),
                  code: `import FooterVariant from "@/components/FooterVariant";

export default function MyPage() {
  return (
    <FooterVariant
      variant="simple"
      copyrightText="© 2025 My Company. All rights reserved."
    />
  );
}`,
                },
                {
                  title: "Split Footer",
                  description: "Footer dengan copyright dan links",
                  preview: (
                    <FooterVariant
                      variant="split"
                      copyrightText="© 2025 My Company"
                      links={[
                        { label: "About", href: "#" },
                        { label: "Contact", href: "#" },
                        { label: "Privacy", href: "#" },
                      ]}
                    />
                  ),
                  code: `import FooterVariant from "@/components/FooterVariant";

export default function MyPage() {
  return (
    <FooterVariant
      variant="split"
      copyrightText="© 2025 My Company"
      links={[
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy", href: "#" },
      ]}
    />
  );
}`,
                },
                {
                  title: "Social Footer",
                  description: "Footer dengan social media links",
                  preview: (
                    <FooterVariant
                      variant="social"
                      copyrightText="© 2025 My Company"
                      socialLinks={[
                        { label: "Instagram", href: "#" },
                        { label: "Facebook", href: "#" },
                        { label: "Twitter", href: "#" },
                      ]}
                    />
                  ),
                  code: `import FooterVariant from "@/components/FooterVariant";

export default function MyPage() {
  return (
    <FooterVariant
      variant="social"
      copyrightText="© 2025 My Company"
      socialLinks={[
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
      ]}
    />
  );
}`,
                },
              ]}
            />
          )}
        </Content>
      </Container>
    </PageWrapper>
  );
}
