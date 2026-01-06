"use client";

import styled from "styled-components";
import HeaderVariant from "@/components/HeaderVariant";
import FooterVariant from "@/components/FooterVariant";
import CardVariant from "@/components/CardVariant";
import ButtonVariant from "@/components/ButtonVariant";
import SidebarVariant from "@/components/SidebarVariant";
import NavbarVariant from "@/components/NavbarVariant";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Home, Package, Users, Settings, Sparkles, Zap, Star } from "lucide-react";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;

  .dark & {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  }
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px 40px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 16px 24px;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(0, 150, 136, 0.1), rgba(38, 166, 154, 0.05));
  border-radius: 24px;
  margin: 32px 0 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  h1 {
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(135deg, #009688, #00796b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    animation: fadeInUp 0.6s ease;
  }

  p {
    font-size: 18px;
    color: #546e7a;
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.6;
    animation: fadeInUp 0.8s ease;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
    
    h1 {
      font-size: 32px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #263238;
  margin: 48px 0 24px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #009688, #26a69a);
    margin: 12px auto 0;
    border-radius: 2px;
  }
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
  animation: fadeIn 0.8s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const ComponentShowcase = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 150, 136, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 150, 136, 0.15);
    border-color: #009688;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #009688;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;

    h3 {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 480px) {
    gap: 12px;
    
    button {
      flex: 1 1 100%;
      min-width: 0;
    }
  }
`;

const LayoutSection = styled.section`
  margin-bottom: 48px;
`;

const FullWidthSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 48px;
  padding: 0 24px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const FullWidthShowcase = styled.div`
  margin-bottom: 32px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #009688;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;

    h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;

    h3 {
      font-size: 15px;
    }
  }
`;


export default function Page() {
  return (
    <PageWrapper>
      {/* Navbar */}
      <NavbarVariant
        title="Design System Showcase"
        leftContent={<button style={{background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px'}}>☰ Menu</button>}
        rightContent={
          <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <DarkModeToggle />
            <button 
              onClick={() => window.location.href = '/docs'}
              style={{background: 'transparent', border: '1px solid white', color: 'white', cursor: 'pointer', fontSize: '14px', padding: '6px 12px', borderRadius: '6px', fontWeight: '600'}}
            >
              📚 Docs
            </button>
          </div>
        }
      />

      <MainContent>
        {/* Hero Section */}
        <HeroSection>
          <h1>✨ Styled Components Showcase</h1>
          <p>
            Jelajahi koleksi komponen UI yang indah dan responsif, dibangun dengan styled-components.
            Setiap komponen memiliki berbagai varian untuk kebutuhan desain Anda.
          </p>
          <ButtonGroup>
            <ButtonVariant variant="primary" onClick={() => window.location.href = '/docs'}>
              📚 Lihat Dokumentasi
            </ButtonVariant>
            <ButtonVariant variant="outline" onClick={() => alert("Mulai Eksplorasi!")}>
              Mulai Eksplorasi
            </ButtonVariant>
          </ButtonGroup>
        </HeroSection>
      </MainContent>

      {/* Headers Section - Full Width */}
      <FullWidthSection>
        <SectionTitle>Header Variants</SectionTitle>
        
        <FullWidthShowcase>
          <h3><Sparkles size={20} /> Flat Header</h3>
          <HeaderVariant
            variant="flat"
            logo="Brand Studio"
            menuItems={[
              { label: "Beranda", href: "#" },
              { label: "Produk", href: "#" },
              { label: "Tentang", href: "#" },
            ]}
            buttonText="Daftar Gratis"
            onButtonClick={() => alert("Header button clicked!")}
          />
        </FullWidthShowcase>

        <FullWidthShowcase>
          <h3><Zap size={20} /> Angled Header</h3>
          <HeaderVariant
            variant="angled"
            logo="Creative Hub"
            menuItems={[
              { label: "Home", href: "#" },
              { label: "Portfolio", href: "#" },
              { label: "Contact", href: "#" },
            ]}
            buttonText="Get Started"
            onButtonClick={() => alert("Angled header clicked!")}
          />
        </FullWidthShowcase>

        <FullWidthShowcase>
          <h3><Star size={20} /> Search Header</h3>
          <HeaderVariant
            variant="with-search"
            logo="Shop Online"
            searchPlaceholder="Cari produk..."
          />
        </FullWidthShowcase>
      </FullWidthSection>

      <MainContent>

        {/* Cards Section */}
        <LayoutSection>
          <SectionTitle>Card Variants</SectionTitle>
          <ComponentGrid>
            <ComponentShowcase>
              <h3>🎨 Glass Card</h3>
              <CardVariant
                variant="glass"
                title="Premium Feature"
                content="Nikmati pengalaman premium dengan fitur eksklusif yang dirancang khusus untuk Anda."
                badge="PREMIUM"
              />
            </ComponentShowcase>

            <ComponentShowcase>
              <h3>💎 Neon Card</h3>
              <CardVariant
                variant="neon"
                title="Futuristic Design"
                content="Desain modern dengan efek neon yang memukau dan eye-catching."
                neonIcon="🚀"
              />
            </ComponentShowcase>

            <ComponentShowcase>
              <h3>🎯 Rounded Card</h3>
              <CardVariant
                variant="rounded"
                title="Smooth Corners"
                content="Desain dengan sudut membulat yang memberikan kesan lembut dan modern."
              />
            </ComponentShowcase>

            <ComponentShowcase>
              <h3>📸 Photo Card</h3>
              <CardVariant
                variant="photo-left"
                title="Product Showcase"
                content="Tampilkan produk Anda dengan gaya yang menarik dan profesional. Perfect untuk e-commerce!"
                image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
              />
            </ComponentShowcase>

            <ComponentShowcase>
              <h3>✨ Pulse Card</h3>
              <CardVariant
                variant="pulse"
                title="Animated Magic"
                content="Kartu dengan animasi pulse yang menarik perhatian. Perfect untuk highlight fitur penting!"
              />
            </ComponentShowcase>
          </ComponentGrid>
        </LayoutSection>

        {/* Buttons Section */}
        <LayoutSection>
          <SectionTitle>Button Variants</SectionTitle>
          <ComponentShowcase>
            <h3>🎯 Button Styles</h3>
            <ButtonGroup>
              <ButtonVariant 
                variant="primary" 
                onClick={() => alert("Primary button!")}
              >
                Primary Button
              </ButtonVariant>
              
              <ButtonVariant 
                variant="outline" 
                onClick={() => alert("Outline button!")}
              >
                Outline Button
              </ButtonVariant>
              
              <ButtonVariant 
                variant="shadow" 
                onClick={() => alert("Shadow button!")}
              >
                Shadow Button
              </ButtonVariant>
              
              <ButtonVariant 
                variant="icon" 
                onClick={() => alert("Icon button!")}
              >
                Add to Cart
              </ButtonVariant>
              
              <ButtonVariant 
                variant="bounce" 
                onClick={() => alert("Bounce button!")}
              >
                Animated Button
              </ButtonVariant>
            </ButtonGroup>
          </ComponentShowcase>
        </LayoutSection>

        {/* Sidebar Section */}
        <LayoutSection>
          <SectionTitle>Sidebar Variants</SectionTitle>
          <ComponentGrid>
            <ComponentShowcase>
              <h3>📱 Classic Sidebar</h3>
              <SidebarVariant
                variant="classic"
                logoText="Dashboard"
                menuItems={[
                  { id: "home", label: "Beranda", icon: Home },
                  { id: "products", label: "Produk", icon: Package },
                  { id: "users", label: "Pengguna", icon: Users },
                  { id: "settings", label: "Pengaturan", icon: Settings },
                ]}
                setActiveComponent={(active) => console.log("Classic Active:", active)}
              />
            </ComponentShowcase>

            <ComponentShowcase>
              <h3>🎯 Minimal Sidebar</h3>
              <SidebarVariant
                variant="minimal"
                logoText="App"
                menuItems={[
                  { id: "home", label: "Home", icon: Home },
                  { id: "products", label: "Products", icon: Package },
                  { id: "users", label: "Users", icon: Users },
                  { id: "settings", label: "Settings", icon: Settings },
                ]}
                setActiveComponent={(active) => console.log("Minimal Active:", active)}
              />
            </ComponentShowcase>


          </ComponentGrid>
        </LayoutSection>
      </MainContent>


      {/* Footer Section - Full Width */}
      <FullWidthSection>
        <SectionTitle>Footer Variants</SectionTitle>
        
        <FullWidthShowcase>
          <h3>📄 Simple Footer</h3>
          <FooterVariant
            variant="simple"
            copyrightText="© 2025 Simple Design. All rights reserved."
          />
        </FullWidthShowcase>

        <FullWidthShowcase>
          <h3>🔗 Split Footer</h3>
          <FooterVariant
            variant="split"
            copyrightText="© 2025 Split Layout Inc."
            links={[
              { label: "About Us", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms", href: "#" },
            ]}
          />
        </FullWidthShowcase>

        <FullWidthShowcase>
          <h3>🌐 Social Footer</h3>
          <FooterVariant
            variant="social"
            copyrightText="© 2025 Styled Components Showcase. Dibuat dengan ❤️"
            socialLinks={[
              { label: "Instagram", href: "#" },
              { label: "Facebook", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "#" },
            ]}
          />
        </FullWidthShowcase>
      </FullWidthSection>
    </PageWrapper>
  );
}
