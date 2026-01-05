"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import { Home, Layout, Settings, Info } from "lucide-react";

const SidebarWrapper = styled.div`
  ${(p) =>
    p.variant === "classic" &&
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
    p.variant === "minimal" &&
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
    p.variant === "floating" &&
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
  font-size: ${(p) => (p.variant === "minimal" ? "0" : "20px")};
  color: #009688;
  text-align: center;
  margin-bottom: ${(p) => (p.variant === "minimal" ? "0" : "12px")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.variant === "minimal" ? "0" : "10px")};
  justify-content: ${(p) => (p.variant === "minimal" ? "center" : "flex-start")};
  background: ${(p) => (p.$active ? "#009688" : "transparent")};
  color: ${(p) => (p.$active ? "#fff" : "#263238")};
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  padding: ${(p) =>
    p.variant === "minimal" ? "10px" : p.variant === "floating" ? "12px" : "10px 14px"};
  width: 100%;
  transition: all 0.25s ease;
  cursor: pointer;

  svg {
    color: ${(p) => (p.$active ? "#fff" : "#009688")};
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${(p) => (p.$active ? "#00796b" : "rgba(0,137,123,0.1)")};
    color: ${(p) => (p.$active ? "#fff" : "#00796b")};
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
    <SidebarWrapper variant={variant}>
      <Logo variant={variant}>
        {variant === "minimal" ? "" : variant === "floating" ? "UI Box" : logoText}
      </Logo>
      <Nav>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavButton
              key={item.id}
              variant={variant}
              $active={active === item.id}
              onClick={() => setActive(item.id)}
            >
              <IconComponent size={20} />
              {variant !== "minimal" && item.label}
            </NavButton>
          );
        })}
      </Nav>
    </SidebarWrapper>
  );
}
