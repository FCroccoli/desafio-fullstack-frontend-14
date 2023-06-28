import styled from "styled-components";
import { FaCircleNotch } from "react-icons/fa";

export const LoadingIcon = styled(FaCircleNotch)`
  animation: loadingAnimation 3s linear 0s infinite;
  font-size: 40px;
  color: var(--grey-0);
`;
