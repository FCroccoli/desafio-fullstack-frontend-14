import styled from "styled-components";

interface iHeaderProps {
  solo: boolean;
}

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${(props: iHeaderProps) =>
    props.solo ? "center" : "space-between"};
  align-items: center;
  background-color: var(--grey-0);
  z-index: 2;
  @media (min-width: 996px) {
    padding: 20px 20%;
  }
`;

export const HeaderLogo = styled.p`
  font-size: 25px;
  font-weight: 700;
  line-height: 22px;
  color: var(--primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;
