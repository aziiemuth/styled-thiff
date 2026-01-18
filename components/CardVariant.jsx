"use client";

import styled from "styled-components";

const Card = styled.div`
  background: ${(p) =>
    p.$variant === "glass"
      ? "rgba(255, 255, 255, 0.7)"
      : p.$variant === "neon"
      ? "#1a1a2e"
      : p.$variant === "pulse"
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "var(--bg-secondary, #fff)"};
  border-radius: ${(p) =>
    p.$variant === "photo-left"
      ? "10px"
      : p.$variant === "overlay"
      ? "16px"
      : p.$variant === "rounded"
      ? "50px"
      : p.$variant === "glass"
      ? "20px"
      : p.$variant === "neon"
      ? "15px"
      : p.$variant === "pulse"
      ? "16px"
      : "12px"};
  box-shadow: ${(p) =>
    p.$variant === "glass"
      ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      : p.$variant === "neon"
      ? "0 0 20px rgba(138, 43, 226, 0.5)"
      : p.$variant === "pulse"
      ? "0 8px 24px rgba(102, 126, 234, 0.4)"
      : "0 3px 8px rgba(0, 0, 0, 0.08)"};
  border: ${(p) =>
    p.$variant === "glass"
      ? "1.5px solid rgba(255, 255, 255, 0.18)"
      : p.$variant === "neon"
      ? "2px solid #8a2be2"
      : p.$variant === "pulse"
      ? "2px solid rgba(255, 255, 255, 0.3)"
      : "1.5px solid #e0e0e0"};
  outline: ${(p) =>
    p.$variant === "glass"
      ? "1px solid rgba(138, 43, 226, 0.3)"
      : p.$variant === "neon"
      ? "1px solid rgba(138, 43, 226, 0.5)"
      : p.$variant === "pulse"
      ? "1px solid rgba(102, 126, 234, 0.5)"
      : "1px solid rgba(0, 0, 0, 0.05)"};
  overflow: hidden;
  display: ${(p) => (p.$variant === "photo-left" ? "flex" : "block")};
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: ${(p) => (p.$variant === "glass" ? "blur(10px)" : "none")};
  animation: ${(p) => (p.$variant === "pulse" ? "cardPulse 2s ease-in-out infinite" : "none")};

  @keyframes cardPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    }
    50% {
      transform: scale(1.02);
      box-shadow: 0 12px 32px rgba(102, 126, 234, 0.6), 0 0 20px rgba(118, 75, 162, 0.4);
    }
  }

  &:hover {
    outline-color: ${(p) =>
      p.$variant === "glass"
        ? "#8a2be2"
        : p.$variant === "neon"
        ? "#ff00ff"
        : p.$variant === "pulse"
        ? "rgba(255, 255, 255, 0.8)"
        : "#009688"};
    transform: ${(p) => (p.$variant === "pulse" ? "scale(1.05)" : "translateY(-4px)")};
    box-shadow: ${(p) =>
      p.$variant === "glass"
        ? "0 12px 40px 0 rgba(138, 43, 226, 0.5)"
        : p.$variant === "neon"
        ? "0 0 30px rgba(255, 0, 255, 0.8), 0 0 60px rgba(138, 43, 226, 0.6)"
        : p.$variant === "pulse"
        ? "0 16px 40px rgba(102, 126, 234, 0.7), 0 0 30px rgba(118, 75, 162, 0.5)"
        : "0 6px 12px rgba(0, 137, 123, 0.15)"};
    animation: ${(p) => (p.$variant === "pulse" ? "none" : "initial")};
  }

  img {
    width: ${(p) => (p.$variant === "photo-left" ? "40%" : "100%")};
    height: ${(p) => (p.$variant === "overlay" ? "200px" : "180px")};
    object-fit: cover;
  }

  .content {
    padding: ${(p) => (p.$variant === "glass" || p.$variant === "neon" || p.$variant === "pulse" ? "24px" : "16px")};
    color: ${(p) => (p.$variant === "neon" || p.$variant === "pulse" ? "#fff" : "inherit")};
  }

  .overlay-text {
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    flex-direction: ${(p) => (p.$variant === "photo-left" ? "column" : "row")};

    img {
      width: ${(p) => (p.$variant === "photo-left" ? "100%" : "100%")};
      height: ${(p) => (p.$variant === "overlay" ? "180px" : "160px")};
    }

    .content {
      padding: ${(p) => (p.$variant === "glass" || p.$variant === "neon" ? "20px" : "14px")};
    }

    .overlay-text {
      font-size: 16px;
      bottom: 12px;
      left: 12px;
    }
  }

  @media (max-width: 480px) {
    border-radius: ${(p) =>
      p.$variant === "rounded" ? "30px" : p.$variant === "glass" ? "16px" : "10px"};

    img {
      height: ${(p) => (p.$variant === "overlay" ? "160px" : "140px")};
    }

    .content {
      padding: ${(p) => (p.$variant === "glass" || p.$variant === "neon" ? "16px" : "12px")};
    }

    .overlay-text {
      font-size: 15px;
    }
  }

  h3 {
    font-size: ${(p) => (p.$variant === "glass" || p.$variant === "neon" || p.$variant === "pulse" ? "20px" : "18px")};
    font-weight: 700;
    margin: 0 0 12px 0;
    color: ${(p) =>
      p.$variant === "glass"
        ? "#4a148c"
        : p.$variant === "neon"
        ? "#ff00ff"
        : p.$variant === "pulse"
        ? "#fff"
        : "var(--text-primary, #1e293b)"};
    text-shadow: ${(p) =>
      p.$variant === "neon" 
        ? "0 0 10px rgba(255, 0, 255, 0.7)" 
        : p.$variant === "pulse"
        ? "0 2px 8px rgba(0, 0, 0, 0.3)"
        : "none"};
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${(p) =>
      p.$variant === "glass"
        ? "#5e35b1"
        : p.$variant === "neon"
        ? "#b794f4"
        : p.$variant === "pulse"
        ? "rgba(255, 255, 255, 0.9)"
        : "var(--text-secondary, #546e7a)"};
    margin: 0;
  }
`;

const GlassBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
`;

const NeonAccent = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8a2be2, #ff00ff, #8a2be2);
  position: absolute;
  top: 0;
  left: 0;
  animation: neonPulse 2s ease-in-out infinite;

  @keyframes neonPulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
`;

const NeonIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8a2be2, #ff00ff);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.6);
`;

export default function CardVariant({
  variant = "default",
  title = "Card Title",
  content = "Card content goes here. You can customize this text.",
  image,
  badge = "Premium",
  neonIcon = "✨",
}) {
  if (variant === "photo-left") {
    return (
      <Card $variant={variant}>
        {image && <img src={image} alt={title} />}
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    );
  }

  if (variant === "overlay") {
    return (
      <Card $variant={variant}>
        {image && <img src={image} alt={title} />}
        <div className="overlay-text">{content}</div>
      </Card>
    );
  }

  if (variant === "rounded") {
    return (
      <Card $variant={variant}>
        {image && <img src={image} alt={title} />}
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    );
  }

  if (variant === "glass") {
    return (
      <Card $variant={variant}>
        <GlassBadge>{badge}</GlassBadge>
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    );
  }

  if (variant === "neon") {
    return (
      <Card $variant={variant}>
        <NeonAccent />
        <div className="content">
          <NeonIcon>{neonIcon}</NeonIcon>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    );
  }

  if (variant === "pulse") {
    return (
      <Card $variant={variant}>
        <div className="content">
          <NeonIcon>✨</NeonIcon>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card $variant={variant}>
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
        {image && <img src={image} alt={title} />}
      </div>
    </Card>
  );
}
