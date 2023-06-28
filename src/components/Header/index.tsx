import { HeaderLogo, StyledHeader } from "./style";

export interface iHeaderProps {
  children?: React.ReactNode;
  solo: boolean;
}

export default function Header({ children, solo }: iHeaderProps) {
  return (
    <StyledHeader solo={solo}>
      <HeaderLogo>Kontacts</HeaderLogo>
      {children}
    </StyledHeader>
  );
}
