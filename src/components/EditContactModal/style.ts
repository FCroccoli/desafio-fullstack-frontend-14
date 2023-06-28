import styled from "styled-components";

export const EditContactHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  background: var(--grey-2);
  border-radius: 4px 4px 0px 0px;
`;

export const EditContactWrapper = styled.div`
  width: 95%;
  background: var(--grey-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  @media (min-width: 996px) {
    width: 25%;
  }
`;

export const EditContactForm = styled.form`
  width: 90%;
  padding-top: 20px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
