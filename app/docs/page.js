"use client";

import styled from "styled-components";
import { useState } from "react";
import ComponentDoc from "@/components/ComponentDoc";
import CodeBlock from "@/components/CodeBlock";
import HeaderVariant from "@/components/HeaderVariant";
import CardVariant from "@/components/CardVariant";
import ButtonVariant from "@/components/ButtonVariant";
import SidebarVariant from "@/components/SidebarVariant";
import FooterVariant from "@/components/FooterVariant";
import NavbarVariant from "@/components/NavbarVariant";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Home, Package, Users, Settings } from "lucide-react";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  .dark & {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  }
`;

const Header = styled.header`
  background: linear-gradient(135deg, #009688, #00796b);
  color: white;
  padding: 48px 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  position: relative;

  .dark & {
    background: linear-gradient(135deg, #00796b, #00695c);
  }
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

const DarkModeToggleWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateX(-4px);
  }
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

  .dark & {
    background: #2d3748;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #009688;
  margin-bottom: 16px;

  .dark & {
    color: #4db6ac;
  }
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

  .dark & {
    background: ${(p) => (p.$active ? "#00695c" : "transparent")};
    color: ${(p) => (p.$active ? "#4db6ac" : "#cbd5e0")};

    &:hover {
      background: #00695c;
      color: #4db6ac;
    }
  }
`;

const Content = styled.main`
  flex: 1;
  min-width: 0;
`;

const InstallationSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;

  .dark & {
    background: #2d3748;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #009688;
  margin-bottom: 32px;
  border-bottom: 3px solid #009688;
  padding-bottom: 16px;

  .dark & {
    color: #4db6ac;
    border-bottom-color: #4db6ac;
  }
`;

const InstallationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Step = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  background: linear-gradient(135deg, #009688, #26a69a);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #263238;
    margin-bottom: 12px;

    .dark & {
      color: #f7fafc;
    }
  }

  p {
    color: #546e7a;
    margin-bottom: 16px;
    line-height: 1.6;

    .dark & {
      color: #cbd5e0;
    }
  }

  code {
    background: #f5f5f5;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: #009688;

    .dark & {
      background: #1a202c;
      color: #4db6ac;
    }
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  border-left: 4px solid #009688;
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 16px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #00796b;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #00695c;
      margin-bottom: 8px;
      padding-left: 24px;
      position: relative;

      &:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #009688;
        font-weight: 700;
      }

      code {
        background: rgba(255, 255, 255, 0.7);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Fira Code', monospace;
        font-size: 13px;
        color: #00796b;
      }
    }
  }
`;


export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("installation");

  const sections = [
    { id: "installation", label: "Installation" },
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
        <BackButtonWrapper>
          <BackButton onClick={() => window.location.href = '/'}>
            ← Back to Home
          </BackButton>
        </BackButtonWrapper>
        <DarkModeToggleWrapper>
          <DarkModeToggle />
        </DarkModeToggleWrapper>
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
          {activeSection === "installation" && (
            <InstallationSection>
              <SectionTitle>📦 Installation Guide</SectionTitle>
              <InstallationContent>
                <Step>
                  <StepNumber>1</StepNumber>
                  <StepContent>
                    <h3>Install Package</h3>
                    <CodeBlock
                      code={`npm install styled-thiff styled-components`}
                      title="Terminal"
                    />
                    <p>Install icon library (pilih salah satu atau keduanya):</p>
                    <CodeBlock
                      code={`# Option 1: Lucide React (Recommended)
npm install lucide-react

# Option 2: React Icons
npm install react-icons

# Option 3: Both
npm install lucide-react react-icons`}
                      title="Terminal"
                    />
                  </StepContent>
                </Step>

                <Step>
                  <StepNumber>2</StepNumber>
                  <StepContent>
                    <h3>Configure Next.js</h3>
                    <p>Tambahkan konfigurasi styled-components dan transpilePackages di <code>next.config.js</code>:</p>
                    <CodeBlock
                      code={`/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  transpilePackages: ['styled-thiff']
}

export default nextConfig
`}
                      title="next.config.js"
                    />
                  </StepContent>
                </Step>

                <Step>
                  <StepNumber>3</StepNumber>
                  <StepContent>
                    <h3>Setup Dark Mode (Optional)</h3>
                    <p>Wrap aplikasi Anda dengan ThemeProvider di <code>app/layout.js</code>:</p>
                    <CodeBlock
                      code={`import { ThemeProvider } from "styled-thiff/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
                      title="app/layout.js"
                    />
                  </StepContent>
                </Step>

                <Step>
                  <StepNumber>4</StepNumber>
                  <StepContent>
                    <h3>Start Using Components</h3>
                    <CodeBlock
                      code={`"use client";

import {
  HeaderVariant,
  CardVariant,
  ButtonVariant,
} from "styled-thiff";

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
        content="Get started with styled-thiff"
        badge="NEW"
      />

      <ButtonVariant variant="primary">
        Get Started
      </ButtonVariant>
    </div>
  );
}`}
                      title="app/page.js"
                    />
                  </StepContent>
                </Step>

                <InfoBox>
                  <h4>💡 Tips</h4>
                  <ul>
                    <li>Gunakan <code>&quot;use client&quot;</code> di top file untuk client components</li>
                    <li>Dark mode otomatis tersimpan di localStorage</li>
                    <li>Semua komponen sudah responsive by default</li>
                    <li>Bisa pakai lucide-react atau react-icons untuk icons</li>
                  </ul>
                </InfoBox>
              </InstallationContent>
            </InstallationSection>
          )}

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
                  code: `import HeaderVariant from "styled-thiff/components/HeaderVariant";

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
                  code: `import HeaderVariant from "styled-thiff/components/HeaderVariant";

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
                  code: `import HeaderVariant from "styled-thiff/components/HeaderVariant";

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
              description="Komponen navbar dengan berbagai varian styling, search bar, dan icon buttons untuk navigasi aplikasi."
              props={[
                {
                  name: "variant",
                  type: "string",
                  default: '"default"',
                  description: 'Varian navbar: "default", "gradient", "dark", "transparent"',
                },
                {
                  name: "title",
                  type: "string",
                  default: '"Yuk Styling"',
                  description: "Judul yang ditampilkan di navbar",
                },
                {
                  name: "leftContent",
                  type: "ReactNode",
                  default: "undefined",
                  description: "Konten kustom di sisi kiri (untuk variant default)",
                },
                {
                  name: "rightContent",
                  type: "ReactNode",
                  default: "undefined",
                  description: "Konten kustom di sisi kanan (untuk variant default)",
                },
                {
                  name: "showSearch",
                  type: "boolean",
                  default: "false",
                  description: "Tampilkan search bar (untuk variant gradient & transparent)",
                },
                {
                  name: "searchPlaceholder",
                  type: "string",
                  default: '"Search..."',
                  description: "Placeholder text untuk search bar",
                },
                {
                  name: "showIcons",
                  type: "boolean",
                  default: "false",
                  description: "Tampilkan icon buttons (Heart, Cart, Bell)",
                },
                {
                  name: "notificationCount",
                  type: "number",
                  default: "0",
                  description: "Jumlah notifikasi untuk badge",
                },
              ]}
              examples={[
                {
                  title: "Gradient Navbar",
                  description: "Navbar dengan gradient purple, search bar, dan icons",
                  preview: (
                    <NavbarVariant
                      variant="gradient"
                      title="Premium Store"
                      showSearch={true}
                      searchPlaceholder="Search products..."
                      showIcons={true}
                      notificationCount={3}
                    />
                  ),
                  code: `import NavbarVariant from "styled-thiff/components/NavbarVariant";

export default function MyPage() {
  return (
    <NavbarVariant
      variant="gradient"
      title="Premium Store"
      showSearch={true}
      searchPlaceholder="Search products..."
      showIcons={true}
      notificationCount={3}
    />
  );
}`,
                },
                {
                  title: "Dark Navbar",
                  description: "Navbar dengan dark theme dan modern layout",
                  preview: (
                    <NavbarVariant
                      variant="dark"
                      title="Modern Dashboard"
                      showIcons={true}
                      notificationCount={5}
                    />
                  ),
                  code: `import NavbarVariant from "styled-thiff/components/NavbarVariant";

export default function MyPage() {
  return (
    <NavbarVariant
      variant="dark"
      title="Modern Dashboard"
      showIcons={true}
      notificationCount={5}
    />
  );
}`,
                },
                {
                  title: "Transparent Navbar",
                  description: "Navbar dengan glassmorphism effect",
                  preview: (
                    <NavbarVariant
                      variant="transparent"
                      title="Glass Design"
                      showSearch={true}
                      searchPlaceholder="Find anything..."
                      showIcons={true}
                      notificationCount={2}
                    />
                  ),
                  code: `import NavbarVariant from "styled-thiff/components/NavbarVariant";

export default function MyPage() {
  return (
    <NavbarVariant
      variant="transparent"
      title="Glass Design"
      showSearch={true}
      searchPlaceholder="Find anything..."
      showIcons={true}
      notificationCount={2}
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
                  description: 'Varian card: "default", "glass", "neon", "rounded", "photo-left", "overlay", "pulse"',
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
                  code: `import CardVariant from "styled-thiff/components/CardVariant";

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
                  code: `import CardVariant from "styled-thiff/components/CardVariant";

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
                  code: `import CardVariant from "styled-thiff/components/CardVariant";

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
                {
                  title: "Pulse Card",
                  description: "Card dengan animasi pulse yang menarik perhatian",
                  preview: (
                    <div style={{ maxWidth: "400px" }}>
                      <CardVariant
                        variant="pulse"
                        title="Animated Magic"
                        content="Kartu dengan animasi pulse yang menarik perhatian. Perfect untuk highlight fitur penting!"
                      />
                    </div>
                  ),
                  code: `import CardVariant from "styled-thiff/components/CardVariant";

export default function MyPage() {
  return (
    <CardVariant
      variant="pulse"
      title="Animated Magic"
      content="Kartu dengan animasi pulse yang menarik perhatian."
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
                  description: 'Varian button: "primary", "outline", "shadow", "icon", "bounce"',
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
                  code: `import ButtonVariant from "styled-thiff/components/ButtonVariant";

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
                  code: `import ButtonVariant from "styled-thiff/components/ButtonVariant";

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
                  code: `import ButtonVariant from "styled-thiff/components/ButtonVariant";

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
                  code: `import ButtonVariant from "styled-thiff/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant variant="icon">
      Add to Cart
    </ButtonVariant>
  );
}`,
                },
                {
                  title: "Bounce Button",
                  description: "Button dengan animasi bouncing yang eye-catching",
                  preview: (
                    <ButtonVariant variant="bounce" onClick={() => alert("Bounced!")}>
                      Animated Button
                    </ButtonVariant>
                  ),
                  code: `import ButtonVariant from "styled-thiff/components/ButtonVariant";

export default function MyPage() {
  return (
    <ButtonVariant 
      variant="bounce" 
      onClick={() => alert("Bounced!")}
    >
      Animated Button
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
                  description: 'Varian sidebar: "classic", "minimal", "floating", "dark", "gradient", "compact"',
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
                  code: `import SidebarVariant from "styled-thiff/components/SidebarVariant";
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
                  code: `import SidebarVariant from "styled-thiff/components/SidebarVariant";
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
                {
                  title: "Dark Sidebar",
                  description: "Sidebar dengan dark theme dan gradient background",
                  preview: (
                    <div style={{ maxWidth: "270px" }}>
                      <SidebarVariant
                        variant="dark"
                        logoText="Dark Panel"
                        menuItems={[
                          { id: "home", label: "Home", icon: Home },
                          { id: "products", label: "Products", icon: Package },
                          { id: "users", label: "Users", icon: Users },
                          { id: "settings", label: "Settings", icon: Settings },
                        ]}
                      />
                    </div>
                  ),
                  code: `import SidebarVariant from "styled-thiff/components/SidebarVariant";
import { Home, Package, Users, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <SidebarVariant
      variant="dark"
      logoText="Dark Panel"
      menuItems={[
        { id: "home", label: "Home", icon: Home },
        { id: "products", label: "Products", icon: Package },
        { id: "users", label: "Users", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
      ]}
    />
  );
}`,
                },
                {
                  title: "Gradient Sidebar",
                  description: "Sidebar dengan gradient purple yang menarik",
                  preview: (
                    <div style={{ maxWidth: "260px" }}>
                      <SidebarVariant
                        variant="gradient"
                        logoText="Gradient UI"
                        menuItems={[
                          { id: "home", label: "Home", icon: Home },
                          { id: "products", label: "Products", icon: Package },
                          { id: "users", label: "Users", icon: Users },
                          { id: "settings", label: "Settings", icon: Settings },
                        ]}
                      />
                    </div>
                  ),
                  code: `import SidebarVariant from "styled-thiff/components/SidebarVariant";
import { Home, Package, Users, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <SidebarVariant
      variant="gradient"
      logoText="Gradient UI"
      menuItems={[
        { id: "home", label: "Home", icon: Home },
        { id: "products", label: "Products", icon: Package },
        { id: "users", label: "Users", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
      ]}
    />
  );
}`,
                },
                {
                  title: "Compact Sidebar",
                  description: "Sidebar compact dengan ukuran lebih kecil",
                  preview: (
                    <div style={{ maxWidth: "210px" }}>
                      <SidebarVariant
                        variant="compact"
                        logoText="Compact"
                        menuItems={[
                          { id: "home", label: "Home", icon: Home },
                          { id: "products", label: "Products", icon: Package },
                          { id: "users", label: "Users", icon: Users },
                          { id: "settings", label: "Settings", icon: Settings },
                        ]}
                      />
                    </div>
                  ),
                  code: `import SidebarVariant from "styled-thiff/components/SidebarVariant";
import { Home, Package, Users, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <SidebarVariant
      variant="compact"
      logoText="Compact"
      menuItems={[
        { id: "home", label: "Home", icon: Home },
        { id: "products", label: "Products", icon: Package },
        { id: "users", label: "Users", icon: Users },
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
                  code: `import FooterVariant from "styled-thiff/components/FooterVariant";

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
                  code: `import FooterVariant from "styled-thiff/components/FooterVariant";

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
                  code: `import FooterVariant from "styled-thiff/components/FooterVariant";

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
