import styled from "styled-components";

interface iHeaderProps {
  solo: boolean;
}

export const StyledHeader = styled.header<iHeaderProps>`
  height: 60px;
  width: 100%;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--grey-4);
  box-shadow: 0px 0px 5px var(--grey-4);
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => {
    return props.solo ? "center" : "space-between";
  }};
  align-items: center;
  background-color: var(--grey-1);
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
