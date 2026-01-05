"use client";

import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(p) =>
    p.variant === "split"
      ? "space-between"
      : p.variant === "social"
      ? "center"
      : "center"};
  flex-direction: ${(p) => (p.variant === "social" ? "column" : "row")};
  background: ${(p) =>
    p.variant === "split"
      ? "#f9fbfc"
      : p.variant === "social"
      ? "#00695c"
      : "#ffffff"};
  color: ${(p) => (p.variant === "social" ? "#fff" : "#1e293b")};
  padding: 30px 60px;
  border-radius: 16px;
  border: 1.5px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    outline-color: #009688;
    transform: translateY(-3px);
  }

  .social-icons {
    display: flex;
    gap: 18px;
    margin-top: 10px;
  }

  .links {
    display: flex;
    gap: 18px;
  }

  a {
    color: ${(p) => (p.variant === "social" ? "#b2dfdb" : "#00796b")};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${(p) => (p.variant === "social" ? "#fff" : "#004d40")};
    }
  }
`;

export default function FooterVariant({
  variant = "simple",
  copyrightText = "© 2025 Athiief Studio. All rights reserved.",
  socialLinks = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  links = [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
  ],
}) {
  return (
    <Footer variant={variant}>
      {variant === "simple" && <p>{copyrightText}</p>}

      {variant === "split" && (
        <>
          <p>{copyrightText}</p>
          <div className="links">
            {links.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}

      {variant === "social" && (
        <>
          <p>{copyrightText}</p>
          <div className="social-icons">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </Footer>
  );
}
