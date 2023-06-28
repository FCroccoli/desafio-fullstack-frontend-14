import ReturnButton from "../../components/ReturnButton";
import Header from "../../components/Header";
import Register from "../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Header solo={false} children={<ReturnButton />}></Header>
      <Register></Register>
    </>
  );
}
