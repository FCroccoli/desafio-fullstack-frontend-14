import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { ButtonNav } from "../../styles/buttonStyle";

export default function LogoutButton() {
  const navigate = useNavigate();

  const { logout } = useContext(UserContext);

  return (
    <ButtonNav
      onClick={() => {
        localStorage.clear();
        logout();
        navigate("/");
      }}
    >
      Sair
    </ButtonNav>
  );
}
