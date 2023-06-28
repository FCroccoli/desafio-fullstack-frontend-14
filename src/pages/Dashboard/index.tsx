import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LogoutButton from "../../components/LogoutButton";
import Dashboard from "../../components/Dashboard";
import { UserContext } from "../../contexts/userContext";

export default function DashboardPage() {
  const { isLoggedIn, isLoading } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    <>
      <Header solo={false} children={<LogoutButton />}></Header>
      <Dashboard></Dashboard>
    </>
  );
}
