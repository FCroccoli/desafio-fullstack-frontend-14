import styled from "styled-components";

export const Modal = styled.section`
  position: absolute;
  top: -60px;
  left: 0;
  width: 100vw;
  height: calc(100% + 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--modal-grey);
  z-index: 3;
`;
