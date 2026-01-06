"use client";

import styled from "styled-components";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleButton = styled.button`
  background: ${(p) => (p.$isDark ? "#374151" : "#f3f4f6")};
  border: 2px solid ${(p) => (p.$isDark ? "#4b5563" : "#e5e7eb")};
  border-radius: 50px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  color: ${(p) => (p.$isDark ? "#fbbf24" : "#f59e0b")};
  font-size: 14px;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} $isDark={isDark} title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      {isDark ? <FiSun /> : <FiMoon />}
      {isDark ? "Light" : "Dark"}
    </ToggleButton>
  );
}
