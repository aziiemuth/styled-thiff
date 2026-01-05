"use client";

import styled from "styled-components";
import { ArrowRight, ShoppingCart, Heart, Check } from "lucide-react";

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => (p.hasIcon ? "8px" : "0")};
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
  outline: none;
`;

const ButtonStyled = styled(ButtonBase)`
  ${(p) =>
    p.variant === "primary" &&
    `
    background: linear-gradient(135deg, #009688, #26a69a);
    color: #fff;
    padding: 12px 26px;
    border-radius: 10px;
    font-size: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    &:hover { transform: translateY(-3px); opacity: 0.9; }
  `}

  ${(p) =>
    p.variant === "outline" &&
    `
    background: transparent;
    color: #009688;
    border: 2px solid #009688;
    border-radius: 30px;
    padding: 10px 22px;
    font-size: 14px;
    &:hover { background:#009688; color:#fff; transform:scale(1.05); }
  `}

  ${(p) =>
    p.variant === "shadow" &&
    `
    background: #00796b;
    color: #fff;
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    text-transform: uppercase;
    &:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.25); transform: translateY(-4px); }
  `}

  ${(p) =>
    p.variant === "icon" &&
    `
    background: #f1f5f9;
    color: #37474f;
    border-radius: 50px;
    padding: 10px 18px;
    border: 1.5px solid #cfd8dc;
    font-size: 14px;
    &:hover { background:#e0f2f1; border-color:#009688; color:#009688; }
  `}
`;

export default function ButtonVariant({
  variant = "primary",
  children,
  onClick,
  icon,
  iconPosition = "right",
}) {
  const getDefaultIcon = () => {
    switch (variant) {
      case "primary":
        return <ArrowRight size={18} />;
      case "outline":
        return <Heart size={18} />;
      case "shadow":
        return <Check size={20} />;
      case "icon":
        return <ShoppingCart size={18} />;
      default:
        return null;
    }
  };

  const displayIcon = icon || getDefaultIcon();

  return (
    <ButtonStyled variant={variant} hasIcon={!!displayIcon} onClick={onClick}>
      {iconPosition === "left" && displayIcon}
      {children}
      {iconPosition === "right" && displayIcon}
    </ButtonStyled>
  );
}
