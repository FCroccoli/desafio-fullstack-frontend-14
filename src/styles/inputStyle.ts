import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  background: var(--grey-2);
  border: 2px solid var(--grey-2);
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: var(--grey-1);
  outline: none;
  &:focus {
    border: 2px solid var(--grey-0);
    color: var(--grey-0);
  }
  &:valid {
    color: var(--grey-0);
  }
`;

export const PasswordInput = styled(Input)`
  padding-right: 36px;
`;

export const LabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Select = styled.select`
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  background: var(--grey-2);
  border: 2px solid var(--grey-2);
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: var(--grey-1);
  outline: none;
  &:focus {
    border: 2px solid var(--grey-0);
    color: var(--grey-0);
  }
  &:valid {
    color: var(--grey-0);
  }
`;
