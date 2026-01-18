"use client";

import styled from "styled-components";
import { ArrowRight, ShoppingCart, Heart, Check, Sparkles, Zap } from "lucide-react"; // Added Sparkles and Zap imports

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => (p.$hasIcon ? "8px" : "0")};
  padding: ${(p) =>
    p.$variant === "primary"
      ? "12px 28px"
      : p.$variant === "outline"
      ? "10px 24px"
      : p.$variant === "shadow"
      ? "14px 30px"
      : p.$variant === "bounce"
      ? "14px 32px"
      : "10px 20px"};
  font-size: ${(p) => (p.$variant === "shadow" || p.$variant === "bounce" ? "16px" : "15px")};
  font-weight: 600;
  border-radius: ${(p) => (p.$variant === "icon" ? "50px" : p.$variant === "bounce" ? "12px" : "8px")};
  border: ${(p) =>
    p.$variant === "outline" ? "2px solid #009688" : "none"};
  background: ${(p) =>
    p.$variant === "primary"
      ? "linear-gradient(135deg, #009688, #00796b)"
      : p.$variant === "outline"
      ? "transparent"
      : p.$variant === "shadow"
      ? "#009688"
      : p.$variant === "bounce"
      ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      : "#26a69a"};
  color: ${(p) => (p.$variant === "outline" ? "#009688" : "#fff")};
  box-shadow: ${(p) =>
    p.$variant === "shadow"
      ? "0 6px 20px rgba(0, 150, 136, 0.4)"
      : p.$variant === "bounce"
      ? "0 8px 24px rgba(245, 87, 108, 0.4)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${(p) => (p.$variant === "bounce" ? "buttonBounce 1.5s ease-in-out infinite" : "none")};

  @keyframes buttonBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  &:hover {
    transform: ${(p) => (p.$variant === "bounce" ? "scale(1.05)" : "translateY(-2px)")};
    box-shadow: ${(p) =>
      p.$variant === "shadow"
        ? "0 10px 30px rgba(0, 150, 136, 0.6)"
        : p.$variant === "bounce"
        ? "0 12px 32px rgba(245, 87, 108, 0.6), 0 0 20px rgba(240, 147, 251, 0.4)"
        : "0 4px 12px rgba(0, 150, 136, 0.3)"};
    background: ${(p) =>
      p.$variant === "outline"
        ? "#e0f2f1"
        : p.$variant === "primary"
        ? "linear-gradient(135deg, #00796b, #00695c)"
        : p.$variant === "bounce"
        ? "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
        : "#00897b"};
    animation: ${(p) => (p.$variant === "bounce" ? "none" : "initial")};
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
    bounce: <Heart size={18} />,
  };

  // The instruction's displayIcon logic was incomplete/incorrect for non-icon variants.
  // Reverting to a more robust default icon logic based on the original intent,
  // but using the new defaultIcons object.
  const displayIcon = icon || defaultIcons[variant];

  return (
    <ButtonStyled $variant={variant} $hasIcon={!!displayIcon} onClick={onClick}>
      {iconPosition === "left" && displayIcon}
      {children}
      {iconPosition === "right" && displayIcon}
    </ButtonStyled>
  );
}
