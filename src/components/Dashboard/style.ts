import styled from "styled-components";

export const DashboardHeader = styled.div`
  width: 100%;
  height: 130px;
  padding: 35px 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  @media (min-width: 996px) {
    justify-content: space-between;
    padding: 35px 20%;
  }
`;

export const DashboardDisplay = styled.div`
  width: 100%;
  padding: 0 5%;
  height: calc(100% - 130px);
  gap: 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 996px) {
    padding: 0 20%;
  }
`;

export const DashboardDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const DashboardNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Loading = styled.p`
  width: 90%;
  height: 130px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: var(--grey-0);
`;
