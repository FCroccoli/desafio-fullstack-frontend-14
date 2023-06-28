import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { LoginWrapper, LoginForm, VisibleIcon, InvisibleIcon } from "./style";
import {
  ErrorMessage,
  HeadlineBold,
  Label,
  Title1,
} from "../../styles/textStyle";
import { Input, PasswordInput, LabelWrapper } from "../../styles/inputStyle";
import { PrimaryButton } from "../../styles/buttonStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { iLoginUser } from "../../interfaces/user";

export default function Login() {
  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(loginSchema),
  });

  async function loginSubmit(data: iLoginUser) {
    try {
      const loginRes = await Api.login(data);
      console.log(loginRes);
      if (loginRes) {
        localStorage.setItem("@token", loginRes.data.token);
        Api.headers.Authorization = `Bearer ${loginRes.data.token}`;
        login();
        navigate(`home`);
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  }

  function togglePassword() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const notifyError = () =>
    toast.error("Usuario ou senha invalidos!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <LoginWrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Title1>Login</Title1>
      <LoginForm onSubmit={handleSubmit(loginSubmit)}>
        <LabelWrapper>
          <Label htmlFor="email">E-mail</Label>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="password">Senha</Label>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <PasswordInput
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
          {!isPasswordVisible ? (
            <VisibleIcon onClick={() => togglePassword()} />
          ) : (
            <InvisibleIcon onClick={() => togglePassword()} />
          )}
        </LabelWrapper>
        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </LoginForm>
      <HeadlineBold>Ainda não é cadastrado?</HeadlineBold>
      <PrimaryButton
        onClick={() => {
          navigate("register");
        }}
      >
        Cadastrar
      </PrimaryButton>
    </LoginWrapper>
  );
}
