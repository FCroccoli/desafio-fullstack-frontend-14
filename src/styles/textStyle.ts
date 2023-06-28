import styled from "styled-components";

export const Title1 = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: var(--grey-4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;

export const Title2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;

export const Title3 = styled.p`
  font-weight: 700;
  font-size: 14;
  line-height: 24px;
  color: var(--grey-4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: var(--grey-4);
`;

export const HeadlineBold = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: var(--grey-3);
`;

export const HeadlineItalic = styled.span`
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--grey-3);
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: var(--negative);
  position: absolute;
  right: 0;
  top: 0;
`;
