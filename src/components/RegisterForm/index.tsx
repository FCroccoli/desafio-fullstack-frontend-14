import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { RegisterForm, RegisterWrapper } from "./style";
import { ErrorMessage, Label, Title1 } from "../../styles/textStyle";
import { Input, LabelWrapper } from "../../styles/inputStyle";
import { PrimaryButton } from "../../styles/buttonStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { iUserRegister } from "../../interfaces/user";

export default function Register() {
  const loginSchema = yup.object().shape({
    first_name: yup.string().required("Campo obrigatório"),
    last_name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Insira um e-mail válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Senha precisa ter ao menos 8 caracteres")
      .matches(/(\d)/, "Senha precisa ter ao menos um numero")
      .matches(/([a-z])/, "Senha precisa ter ao menos uma letra")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Senha precisa ter ao menos um simbolo"
      ),
    passwordCheck: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), ""], "Senhas precisam ser iguais"),
    phone: yup.string().required("Campo obrigatório"),
  });

  const {
    setRegisterName,
    setRegisterLastName,
    setRegisterPassword,
    setRegisterPasswordCheck,
    setRegisterEmail,
    setRegisterTelephone,
    clearRegister,
    userRegister,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(loginSchema),
  });

  async function registerSubmit(data: iUserRegister) {
    try {
      const newUser = await Api.register(data);
      if (newUser) {
        notifySuccess();
        clearRegister();
        navigate("");
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  }

  const notifySuccess = () =>
    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyError = () =>
    toast.error("Algo de errado aconteceu, tente novamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <RegisterWrapper>
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
      <Title1>Crie sua conta</Title1>
      <RegisterForm onSubmit={handleSubmit(registerSubmit)}>
        <LabelWrapper>
          <Label htmlFor="first_name">Nome</Label>
          <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
          <Input
            type="text"
            id="first_name"
            {...register("first_name")}
            placeholder="Digite seu nome"
            value={userRegister.first_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterName(event.target.value)
            }
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="last_name">Sobrenome</Label>
          <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
          <Input
            type="text"
            id="last_name"
            {...register("last_name")}
            placeholder="Digite seu sobrenome"
            value={userRegister.last_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterLastName(event.target.value)
            }
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="email">E-mail</Label>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
            value={userRegister.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterEmail(event.target.value)
            }
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="telephone">Telefone</Label>
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          <Input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="Digite seu telefone"
            value={userRegister.phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterTelephone(event.target.value)
            }
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="password">Senha</Label>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
            value={userRegister.password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterPassword(event.target.value)
            }
          />
        </LabelWrapper>
        <LabelWrapper>
          <Label htmlFor="passwordCheck">Confirmar senha</Label>
          <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>
          <Input
            type="password"
            id="passwordCheck"
            {...register("passwordCheck")}
            placeholder="Confirme sua senha"
            value={userRegister.passwordCheck}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterPasswordCheck(event.target.value)
            }
          />
        </LabelWrapper>
        <PrimaryButton>Enviar</PrimaryButton>
      </RegisterForm>
    </RegisterWrapper>
  );
}
