"use client";

import styled from "styled-components";
import { ArrowRight, ShoppingCart, Heart, Check, Sparkles, Zap } from "lucide-react"; // Added Sparkles and Zap imports

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => (p.$hasIcon ? "8px" : "0")};
  padding: ${(p) =>
    p.variant === "primary"
      ? "12px 28px"
      : p.variant === "outline"
      ? "10px 24px"
      : p.variant === "shadow"
      ? "14px 30px"
      : "10px 20px"};
  font-size: ${(p) => (p.variant === "shadow" ? "16px" : "15px")};
  font-weight: 600;
  border-radius: ${(p) => (p.variant === "icon" ? "50px" : "8px")};
  border: ${(p) =>
    p.variant === "outline" ? "2px solid #009688" : "none"};
  background: ${(p) =>
    p.variant === "primary"
      ? "linear-gradient(135deg, #009688, #00796b)"
      : p.variant === "outline"
      ? "transparent"
      : p.variant === "shadow"
      ? "#009688"
      : "#26a69a"};
  color: ${(p) => (p.variant === "outline" ? "#009688" : "#fff")};
  box-shadow: ${(p) =>
    p.variant === "shadow"
      ? "0 6px 20px rgba(0, 150, 136, 0.4)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(p) =>
      p.variant === "shadow"
        ? "0 10px 30px rgba(0, 150, 136, 0.6)"
        : "0 4px 12px rgba(0, 150, 136, 0.3)"};
    background: ${(p) =>
      p.variant === "outline"
        ? "#e0f2f1"
        : p.variant === "primary"
        ? "linear-gradient(135deg, #00796b, #00695c)"
        : "#00897b"};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default function ButtonVariant({
  variant = "primary",
  children,
  onClick,
  icon,
  iconPosition = "right",
}) {
  const defaultIcons = {
    primary: <Sparkles size={18} />, // Added size prop for consistency
    outline: <ArrowRight size={18} />,
    shadow: <Zap size={20} />, // Added size prop for consistency
    icon: <ShoppingCart size={18} />,
  };

  // The instruction's displayIcon logic was incomplete/incorrect for non-icon variants.
  // Reverting to a more robust default icon logic based on the original intent,
  // but using the new defaultIcons object.
  const displayIcon = icon || defaultIcons[variant];

  return (
    <ButtonStyled variant={variant} $hasIcon={!!displayIcon} onClick={onClick}>
      {iconPosition === "left" && displayIcon}
      {children}
      {iconPosition === "right" && displayIcon}
    </ButtonStyled>
  );
}
