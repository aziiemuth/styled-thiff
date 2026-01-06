"use client";

import styled from "styled-components";
import { Search, Bell, User, Menu, ShoppingCart, Heart } from "lucide-react";

const Navbar = styled.nav`
  background: ${(p) =>
    p.variant === "gradient"
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : p.variant === "dark"
      ? "#1a202c"
      : p.variant === "transparent"
      ? "rgba(255, 255, 255, 0.1)"
      : "#009688"};
  color: #fff;
  padding: ${(p) => (p.variant === "gradient" ? "16px 32px" : "12px 24px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(p) =>
    p.variant === "dark"
      ? "3px solid #667eea"
      : p.variant === "transparent"
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "2px solid #00796b"};
  box-shadow: ${(p) =>
    p.variant === "gradient"
      ? "0 4px 16px rgba(102, 126, 234, 0.3)"
      : p.variant === "dark"
      ? "0 4px 12px rgba(0, 0, 0, 0.5)"
      : p.variant === "transparent"
      ? "0 8px 32px rgba(31, 38, 135, 0.15)"
      : "0 3px 8px rgba(0, 0, 0, 0.08)"};
  backdrop-filter: ${(p) => (p.variant === "transparent" ? "blur(10px)" : "none")};
  border-radius: ${(p) => (p.variant === "gradient" ? "12px" : "0")};
  margin: ${(p) => (p.variant === "gradient" ? "0 0 16px 0" : "0")};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(p) =>
      p.variant === "gradient"
        ? "0 6px 20px rgba(102, 126, 234, 0.4)"
        : p.variant === "dark"
        ? "0 6px 16px rgba(0, 0, 0, 0.6)"
        : p.variant === "transparent"
        ? "0 8px 32px rgba(31, 38, 135, 0.25)"
        : "0 4px 10px rgba(0, 0, 0, 0.12)"};
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: ${(p) => (p.variant === "gradient" ? "20px" : "18px")};
  font-weight: ${(p) => (p.variant === "gradient" ? "700" : "600")};
  text-shadow: ${(p) =>
    p.variant === "gradient" || p.variant === "dark"
      ? "0 2px 4px rgba(0, 0, 0, 0.2)"
      : "none"};
  flex: 1;
  text-align: ${(p) => (p.variant === "default" ? "center" : "left")};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.variant === "gradient" ? "16px" : "12px")};
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.variant === "gradient" ? "16px" : "12px")};
`;

const NavButton = styled.button`
  background: ${(p) =>
    p.variant === "gradient"
      ? "rgba(255, 255, 255, 0.2)"
      : p.variant === "dark"
      ? "#667eea"
      : p.variant === "transparent"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(255, 255, 255, 0.2)"};
  color: #fff;
  border: ${(p) =>
    p.variant === "transparent" ? "1px solid rgba(255, 255, 255, 0.3)" : "none"};
  padding: ${(p) => (p.variant === "gradient" ? "10px 20px" : "8px 16px")};
  border-radius: ${(p) => (p.variant === "gradient" ? "8px" : "6px")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  backdrop-filter: ${(p) => (p.variant === "transparent" ? "blur(5px)" : "none")};

  &:hover {
    background: ${(p) =>
      p.variant === "gradient"
        ? "rgba(255, 255, 255, 0.3)"
        : p.variant === "dark"
        ? "#7c3aed"
        : p.variant === "transparent"
        ? "rgba(255, 255, 255, 0.25)"
        : "rgba(255, 255, 255, 0.3)"};
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SearchBar = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(5px);

  input {
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    font-size: 14px;
    width: 200px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8px;

    input {
      width: 100%;
    }
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  background: #f5576c;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
`;

export default function NavbarVariant({
  variant = "default",
  title = "Yuk Styling",
  leftContent,
  rightContent,
  showSearch = false,
  searchPlaceholder = "Search...",
  showIcons = false,
  notificationCount = 0,
}) {
  // Gradient variant with search and icons
  if (variant === "gradient") {
    return (
      <Navbar variant={variant}>
        <LeftContent variant={variant}>
          <IconButton>
            <Menu />
          </IconButton>
          <Title variant={variant}>{title}</Title>
        </LeftContent>
        {showSearch && (
          <SearchBar>
            <Search />
            <input type="text" placeholder={searchPlaceholder} />
          </SearchBar>
        )}
        <RightContent variant={variant}>
          {showIcons && (
            <>
              <IconButton>
                <Heart />
              </IconButton>
              <IconButton>
                <ShoppingCart />
              </IconButton>
              <IconButton>
                <Bell />
                {notificationCount > 0 && <Badge>{notificationCount}</Badge>}
              </IconButton>
            </>
          )}
          <NavButton variant={variant}>
            <User size={18} />
            Profile
          </NavButton>
        </RightContent>
      </Navbar>
    );
  }

  // Dark variant with modern layout
  if (variant === "dark") {
    return (
      <Navbar variant={variant}>
        <LeftContent variant={variant}>
          <Title variant={variant}>{title}</Title>
        </LeftContent>
        <RightContent variant={variant}>
          {showIcons && (
            <>
              <IconButton>
                <Bell />
                {notificationCount > 0 && <Badge>{notificationCount}</Badge>}
              </IconButton>
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </>
          )}
          <NavButton variant={variant}>Sign In</NavButton>
          <NavButton variant={variant}>Get Started</NavButton>
        </RightContent>
      </Navbar>
    );
  }

  // Transparent variant with glassmorphism
  if (variant === "transparent") {
    return (
      <Navbar variant={variant}>
        <LeftContent variant={variant}>
          <Title variant={variant}>{title}</Title>
        </LeftContent>
        {showSearch && (
          <SearchBar>
            <Search />
            <input type="text" placeholder={searchPlaceholder} />
          </SearchBar>
        )}
        <RightContent variant={variant}>
          {showIcons && (
            <>
              <IconButton>
                <Heart />
              </IconButton>
              <IconButton>
                <Bell />
                {notificationCount > 0 && <Badge>{notificationCount}</Badge>}
              </IconButton>
            </>
          )}
          <NavButton variant={variant}>
            <User size={18} />
            Account
          </NavButton>
        </RightContent>
      </Navbar>
    );
  }

  // Default variant
  return (
    <Navbar variant={variant}>
      {leftContent && <LeftContent variant={variant}>{leftContent}</LeftContent>}
      <Title variant={variant}>{title}</Title>
      {rightContent && <RightContent variant={variant}>{rightContent}</RightContent>}
    </Navbar>
  );
}
