import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/LoginForm";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/userContext";

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
