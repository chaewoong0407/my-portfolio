import styled from "styled-components";

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition:
    0.6s opacity,
    0.2s visibility;
`;

export const GNBContainer = styled.div<{ open: boolean }>`
  position: absolute;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 500px;
  height: 100%;
  padding: 60px 30px;
  background-color: #fff;
  transition: 0.4s right;
`;
