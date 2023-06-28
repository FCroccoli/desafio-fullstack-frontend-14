import { useContext } from "react";
import { Input, LabelWrapper } from "../../styles/inputStyle";
import { CloseButton, PrimaryButton } from "../../styles/buttonStyle";
import { ErrorMessage, Label, Title2 } from "../../styles/textStyle";
import { Modal } from "../../styles/modalStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddContactForm, AddContactHeader, AddContactWrapper } from "./style";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { Api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iContactRegister } from "../../interfaces/contact";

export default function AddContactModal() {
  const { toggleAddModal, toggleLoadingModal, sendAlertLoading } =
    useContext(ModalContext);

  const { addContact } = useContext(UserContext);

  const newContactSchema = yup.object().shape({
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
  } = useForm<iContactRegister>({
    resolver: yupResolver(newContactSchema),
  });

  async function submitContact(data: iContactRegister) {
    toggleLoadingModal();
    await Api.postNewContact(data)
      .then((res) => {
        addContact(res);
        toggleAddModal();
        sendAlertLoading();
      })
      .catch(() => {
        notifyError();
        sendAlertLoading();
      });
  }

  const notifyError = () =>
    toast.error("Ação inválida, tente novamente", {
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
          toggleAddModal();
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
      <AddContactWrapper>
        <AddContactHeader>
          <Title2>Cadastrar Contato</Title2>
          <CloseButton
            onClick={() => {
              toggleAddModal();
            }}
          >
            X
          </CloseButton>
        </AddContactHeader>
        <AddContactForm onSubmit={handleSubmit(submitContact)}>
          <LabelWrapper>
            <Label htmlFor="first_name">Nome</Label>
            <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
            <Input
              type="text"
              id="first_name"
              {...register("first_name")}
              placeholder="Digite o nome"
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
            />
          </LabelWrapper>
          <PrimaryButton>Adicionar Contato</PrimaryButton>
        </AddContactForm>
      </AddContactWrapper>
    </Modal>
  );
}
