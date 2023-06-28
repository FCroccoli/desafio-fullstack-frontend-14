import styled from "styled-components";
import { Title3 } from "../../styles/textStyle";

export const ContactsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsDisplay = styled.ul`
  padding: 23px 8px;
  background: var(--grey-3);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 4px;
  @media (min-width: 996px) {
    padding: 23px 26px;
  }
`;

export const ContactCard = styled.li`
  background: var(--grey-0);
  width: 45%;
  padding: 13px 22px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: var(--grey-1);
  }
`;

export const ContactNameWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContactDescriptionWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfoWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled(Title3)`
  width: 100%;
`;
