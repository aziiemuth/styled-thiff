"use client";

import styled from "styled-components";
import { Search, Bell, Menu } from "lucide-react";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(p) =>
    p.variant === "angled"
      ? "space-between"
      : p.variant === "with-search"
      ? "space-between"
      : p.variant === "notification"
      ? "space-between"
      : "space-around"};
  background: ${(p) =>
    p.variant === "angled"
      ? "linear-gradient(135deg, #0288d1, #26c6da)"
      : p.variant === "with-search"
      ? "#ffffff"
      : p.variant === "notification"
      ? "#f9fbfc"
      : "#009688"};
  color: ${(p) => (p.variant === "flat" ? "#fff" : "#1e293b")};
  padding: ${(p) =>
    p.variant === "angled"
      ? "30px 50px"
      : p.variant === "flat"
      ? "26px 40px"
      : p.variant === "with-search"
      ? "20px 36px"
      : "22px 40px"};
  border-radius: ${(p) =>
    p.variant === "angled"
      ? "0 0 30px 30px"
      : p.variant === "flat"
      ? "12px"
      : p.variant === "notification"
      ? "20px"
      : "14px"};
  border: 1.5px solid #e0e0e0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: ${(p) =>
    p.variant === "flat"
      ? "22px"
      : p.variant === "angled"
      ? "24px"
      : p.variant === "notification"
      ? "20px"
      : "23px"};
  color: ${(p) =>
    p.variant === "flat"
      ? "#ffffff"
      : p.variant === "angled"
      ? "#ffffff"
      : "#00796b"};
  margin: 0;
  opacity: 1;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 22px;

  a {
    color: ${(p) => (p.variant === "angled" ? "#e0f7fa" : p.variant === "flat" ? "#ffffff" : "#37474f")};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
    opacity: 1;

    &:hover {
      color: ${(p) => (p.variant === "angled" ? "#ffffff" : p.variant === "flat" ? "#e0f2f1" : "#009688")};
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }
`;

const SearchBar = styled.input`
  background: #f5f7f8;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 14px;
  width: ${(p) => (p.variant === "with-search" ? "260px" : "220px")};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #009688;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const IconArea = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  svg {
    color: #546e7a;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  svg:hover {
    color: #009688;
    transform: scale(1.1);
  }
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #009688;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    color: #37474f;
  }
`;

const Button = styled.button`
  background: ${(p) => (p.variant === "flat" ? "#ffffff" : "#009688")};
  color: ${(p) => (p.variant === "flat" ? "#009688" : "#ffffff")};
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  opacity: 1;

  &:hover {
    background: ${(p) => (p.variant === "flat" ? "#f5f5f5" : "#00796b")};
    transform: translateY(-2px);
  }
`;

export default function HeaderVariant({
  variant = "flat",
  logo = "Athiief Studio",
  menuItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Docs", href: "#" },
  ],
  buttonText = "Sign Up",
  searchPlaceholder = "Search products...",
  profileName = "John Doe",
  profileImage = "https://i.pravatar.cc/150?img=3",
  onButtonClick,
}) {
  return (
    <HeaderWrapper variant={variant}>
      {variant === "flat" && (
        <>
          <Logo variant={variant}>{logo}</Logo>
          <NavMenu variant={variant}>
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href}>
                {item.label}
              </a>
            ))}
          </NavMenu>
          <Button variant={variant} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </>
      )}

      {variant === "angled" && (
        <>
          <Logo variant={variant}>{logo}</Logo>
          <NavMenu variant={variant}>
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href}>
                {item.label}
              </a>
            ))}
          </NavMenu>
          <Button variant={variant} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </>
      )}

      {variant === "with-search" && (
        <>
          <Logo variant={variant}>{logo}</Logo>
          <SearchBar placeholder={searchPlaceholder} variant={variant} />
          <IconArea>
            <Search size={22} />
            <Bell size={22} />
            <Menu size={22} />
          </IconArea>
        </>
      )}

      {variant === "notification" && (
        <>
          <Logo variant={variant}>{logo}</Logo>
          <NavMenu variant={variant}>
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href}>
                {item.label}
              </a>
            ))}
          </NavMenu>
          <ProfileArea>
            <img src={profileImage} alt={profileName} />
            <span>{profileName}</span>
          </ProfileArea>
        </>
      )}
    </HeaderWrapper>
  );
}
