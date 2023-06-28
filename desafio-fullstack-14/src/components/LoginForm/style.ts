import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const LoginWrapper = styled.div`
  width: 90%;
  background: var(--grey-1);
  padding: 32px 18px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 26px;
  border-radius: 8px;
  @media (min-width: 996px) {
    width: 26%;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const VisibleIcon = styled(FaEye)`
  color: var(--grey-3);
  position: absolute;
  bottom: 10px;
  right: 12px;
  cursor: pointer;
`;

export const InvisibleIcon = styled(FaEyeSlash)`
  color: var(--grey-3);
  position: absolute;
  bottom: 10px;
  right: 12px;
  cursor: pointer;
`;
