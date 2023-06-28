import { useNavigate } from "react-router-dom";
import { ButtonNav } from "../../styles/buttonStyle";

export default function ReturnButton() {
  const navigate = useNavigate();

  return (
    <ButtonNav
      onClick={() => {
        navigate("/");
      }}
    >
      Voltar
    </ButtonNav>
  );
}
