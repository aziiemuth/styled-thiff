"use client";

import styled from "styled-components";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CodeBlockWrapper = styled.div`
  position: relative;
  margin: 16px 0;
  border-radius: 12px;
  overflow: hidden;
  background: #1e293b;
  border: 1px solid #334155;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
`;

const CodeTitle = styled.span`
  color: #94a3b8;
  font-size: 14px;
  font-weight: 600;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(p) => (p.$copied ? "#10b981" : "#3b82f6")};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => (p.$copied ? "#059669" : "#2563eb")};
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #e2e8f0;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1e293b;
  }

  &::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
`;

export default function CodeBlock({ code, title = "Code", language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <CodeBlockWrapper>
      <CodeHeader>
        <CodeTitle>{title}</CodeTitle>
        <CopyButton onClick={handleCopy} $copied={copied}>
          {copied ? (
            <>
              <Check /> Copied!
            </>
          ) : (
            <>
              <Copy /> Copy Code
            </>
          )}
        </CopyButton>
      </CodeHeader>
      <CodeContent>{code}</CodeContent>
    </CodeBlockWrapper>
  );
}
