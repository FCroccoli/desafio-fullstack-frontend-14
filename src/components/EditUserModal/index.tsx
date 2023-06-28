import { useContext } from "react";
import { Modal } from "../../styles/modalStyle";
import { Input, LabelWrapper } from "../../styles/inputStyle";
import { CloseButton, PrimaryButton } from "../../styles/buttonStyle";
import { ErrorMessage, Label, Title2 } from "../../styles/textStyle";
import { EditUserForm, EditUserWrapper, EditUserHeader } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { iUser } from "../../interfaces/user";
import { useNavigate } from "react-router-dom";

export default function EditUserModal() {
  const {
    toggleUserModal,
    toggleLoadingModal,
    sendAlertLoading,
    userInfo,
    setInfoName,
    setInfoLastName,
    setInfoTelephone,
    setInfoEmail,
    clearInfo,
  } = useContext(ModalContext);

  const { setNewUser } = useContext(UserContext);

  const editUserSchema = yup.object().shape({
    first_name: yup.string().required("Campo obrigatório"),
    last_name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Insira um e-mail válido"),
    phone: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(editUserSchema),
  });

  async function submitUser(data: iUser) {
    toggleLoadingModal();
    await Api.editUser(data)
      .then(() => {
        setNewUser(data);
        toggleUserModal();
        sendAlertLoading();
      })
      .catch(() => {
        notifyError();
        sendAlertLoading();
      });
  }

  const navigate = useNavigate();

  async function deleteUser() {
    toggleLoadingModal();
    await Api.deleteUser();
    toggleUserModal();
    navigate("");
    sendAlertLoading();
  }

  const notifyError = () =>
    toast.error("Ação invalida, tente novamente", {
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
    <Modal
      onClick={(event: React.MouseEvent) => {
        if (
          event.target instanceof Element &&
          event.target.tagName === "SECTION"
        ) {
          toggleUserModal();
          clearInfo();
        }
      }}
    >
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
      <EditUserWrapper>
        <EditUserHeader>
          <Title2>Editar Usuário</Title2>
          <CloseButton
            onClick={() => {
              toggleUserModal();
              clearInfo();
            }}
          >
            X
          </CloseButton>
        </EditUserHeader>
        <EditUserForm onSubmit={handleSubmit(submitUser)}>
          <LabelWrapper>
            <Label htmlFor="first_name">Nome</Label>
            <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
            <Input
              type="text"
              id="first_name"
              {...register("first_name")}
              placeholder="Digite o nome"
              onChange={(event) => {
                setInfoName(event.target.value);
              }}
              value={userInfo.first_name}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label htmlFor="last_name">Sobrenome</Label>
            <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
            <Input
              type="text"
              id="last_name"
              {...register("last_name")}
              placeholder="Digite o sobrenome"
              onChange={(event) => {
                setInfoLastName(event.target.value);
              }}
              value={userInfo.last_name}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label htmlFor="email">E-mail</Label>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Digite o email"
              onChange={(event) => {
                setInfoEmail(event.target.value);
              }}
              value={userInfo.email}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label htmlFor="phone">Telefone</Label>
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            <Input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Digite o telefone"
              onChange={(event) => {
                setInfoTelephone(event.target.value);
              }}
              value={userInfo.phone}
            />
          </LabelWrapper>
          <PrimaryButton>Editar Usuario</PrimaryButton>
          <PrimaryButton
            onClick={(event) => {
              event.preventDefault();
              deleteUser();
            }}
          >
            Excluir
          </PrimaryButton>
        </EditUserForm>
      </EditUserWrapper>
    </Modal>
  );
}
