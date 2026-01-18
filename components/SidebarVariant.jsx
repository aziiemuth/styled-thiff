"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import { Home, Layout, Settings, Info } from "lucide-react";

const SidebarWrapper = styled.div`
  ${(p) =>
    p.$variant === "classic" &&
    `
    width: 240px;
    background: #f9fbfc;
    border-right: 2px solid #e0e0e0;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}

  ${(p) =>
    p.$variant === "minimal" &&
    `
    width: 80px;
    background: #ffffff;
    border-right: 1px solid #e0e0e0;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  `}

  ${(p) =>
    p.$variant === "floating" &&
    `
    width: 200px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    margin: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: fixed;
    left: 20px;
    top: 80px;
  `}

  ${(p) =>
    p.$variant === "dark" &&
    `
    width: 260px;
    background: linear-gradient(180deg, #1a202c 0%, #2d3748 100%);
    border-right: 3px solid #667eea;
    padding: 28px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 4px 0 16px rgba(0, 0, 0, 0.3);
  `}

  ${(p) =>
    p.$variant === "gradient" &&
    `
    width: 250px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 28px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  `}

  ${(p) =>
    p.$variant === "compact" &&
    `
    width: 200px;
    background: #ffffff;
    border-right: 2px solid #009688;
    padding: 20px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 2px 0 8px rgba(0, 150, 136, 0.1);
  `}

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin: 0;
    border-right: none;
    border-bottom: 2px solid #e0e0e0;
  }
`;

const Logo = styled.h3`
  font-weight: 700;
  font-size: ${(p) => (p.$variant === "minimal" ? "0" : p.$variant === "compact" ? "18px" : "20px")};
  color: ${(p) =>
    p.$variant === "dark"
      ? "#fff"
      : p.$variant === "gradient"
      ? "#fff"
      : "#009688"};
  text-align: center;
  margin-bottom: ${(p) => (p.$variant === "minimal" ? "0" : p.$variant === "compact" ? "8px" : "12px")};
  transition: all 0.3s ease;
  text-shadow: ${(p) =>
    p.$variant === "dark" || p.$variant === "gradient"
      ? "0 2px 4px rgba(0, 0, 0, 0.3)"
      : "none"};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.$variant === "compact" ? "8px" : "12px")};

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.$variant === "minimal" ? "0" : p.$variant === "compact" ? "8px" : "10px")};
  justify-content: ${(p) => (p.$variant === "minimal" ? "center" : "flex-start")};
  background: ${(p) =>
    p.$active
      ? p.$variant === "dark"
        ? "#667eea"
        : p.$variant === "gradient"
        ? "rgba(255, 255, 255, 0.25)"
        : p.$variant === "compact"
        ? "#009688"
        : "#009688"
      : "transparent"};
  color: ${(p) =>
    p.$active
      ? "#fff"
      : p.$variant === "dark"
      ? "#cbd5e0"
      : p.$variant === "gradient"
      ? "#fff"
      : "#263238"};
  border: ${(p) =>
    p.$variant === "gradient" && p.$active
      ? "1px solid rgba(255, 255, 255, 0.4)"
      : "none"};
  border-radius: ${(p) => (p.$variant === "compact" ? "8px" : "10px")};
  font-weight: 600;
  font-size: ${(p) => (p.$variant === "compact" ? "14px" : "15px")};
  padding: ${(p) =>
    p.$variant === "minimal"
      ? "10px"
      : p.$variant === "floating"
      ? "12px"
      : p.$variant === "compact"
      ? "8px 12px"
      : p.$variant === "dark" || p.$variant === "gradient"
      ? "12px 16px"
      : "10px 14px"};
  width: 100%;;
  transition: all 0.25s ease;
  cursor: pointer;
  backdrop-filter: ${(p) =>
    p.$variant === "gradient" && p.$active ? "blur(5px)" : "none"};

  svg {
    color: ${(p) =>
      p.$active
        ? "#fff"
        : p.$variant === "dark"
        ? "#667eea"
        : p.$variant === "gradient"
        ? "rgba(255, 255, 255, 0.9)"
        : "#009688"};
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${(p) =>
      p.$active
        ? p.$variant === "dark"
          ? "#7c3aed"
          : p.$variant === "gradient"
          ? "rgba(255, 255, 255, 0.35)"
          : p.$variant === "compact"
          ? "#00796b"
          : "#00796b"
        : p.$variant === "dark"
        ? "rgba(102, 126, 234, 0.2)"
        : p.$variant === "gradient"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0,137,123,0.1)"};
    color: ${(p) =>
      p.$active
        ? "#fff"
        : p.$variant === "dark"
        ? "#fff"
        : p.$variant === "gradient"
        ? "#fff"
        : "#00796b"};
    transform: ${(p) =>
      p.$variant === "gradient" || p.$variant === "dark"
        ? "translateX(4px)"
        : "none"};
  }
`;

export default function SidebarVariant({
  setActiveComponent,
  variant = "classic",
  logoText = "UI Panel",
  menuItems = [
    { id: "header", label: "Header", icon: Home },
    { id: "footer", label: "Footer", icon: Layout },
    { id: "button", label: "Button", icon: Settings },
    { id: "card", label: "Card", icon: Info },
  ],
}) {
  const [active, setActive] = useState(menuItems[0]?.id || "header");

  useEffect(() => {
    if (typeof setActiveComponent === "function") {
      setActiveComponent(active);
    }
  }, [active, setActiveComponent]);

  return (
    <SidebarWrapper $variant={variant}>
      <Logo $variant={variant}>
        {variant === "minimal"
          ? ""
          : variant === "floating"
          ? "UI Box"
          : variant === "dark"
          ? "Dark Panel"
          : variant === "gradient"
          ? "Gradient UI"
          : variant === "compact"
          ? "Compact"
          : logoText}
      </Logo>
      <Nav $variant={variant}>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavButton
              key={item.id}
              $variant={variant}
              $active={active === item.id}
              onClick={() => setActive(item.id)}
            >
              <IconComponent size={variant === "compact" ? 18 : 20} />
              {variant !== "minimal" && item.label}
            </NavButton>
          );
        })}
      </Nav>
    </SidebarWrapper>
  );
}
