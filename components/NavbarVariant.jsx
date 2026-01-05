"use client";

import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #009688;
  color: #fff;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #00796b;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default function NavbarVariant({
  title = "Yuk Styling",
  leftContent,
  rightContent,
}) {
  return (
    <Navbar>
      {leftContent && <LeftContent>{leftContent}</LeftContent>}
      <Title>{title}</Title>
      {rightContent && <RightContent>{rightContent}</RightContent>}
    </Navbar>
  );
}
