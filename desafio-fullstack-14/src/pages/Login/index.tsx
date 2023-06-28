import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import Login from "../../components/LoginForm";
import Header from "../../components/Header";

export default function LoginPage() {
  const { isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn ? navigate("home") : null;
  });

  return (
    <>
      <Header solo={true}></Header>
      <Login></Login>
    </>
  );
}
