import { useContext } from "react";
import { Modal } from "../../styles/modalStyle";
import {
  EditContactForm,
  EditContactWrapper,
  EditContactHeader,
} from "./style";
import { Input, LabelWrapper } from "../../styles/inputStyle";
import { CloseButton, PrimaryButton } from "../../styles/buttonStyle";
import { ErrorMessage, Label, Title2 } from "../../styles/textStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { iContactRegister } from "../../interfaces/contact";

export default function EditContactModal() {
  const {
    toggleEditModal,
    toggleLoadingModal,
    sendAlertLoading,
    selectedContact,
    setContactName,
    setContactLastName,
    setContactTelephone,
    setContactEmail,
    clearContact,
  } = useContext(ModalContext);

  const { updateContact, removeContact } = useContext(UserContext);

  const editContactSchema = yup.object().shape({
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
    resolver: yupResolver(editContactSchema),
  });

  async function submitContact(data: iContactRegister) {
    toggleLoadingModal();
    await Api.editContact(data, selectedContact.id!)
      .then((res) => {
        updateContact(res);
        toggleEditModal();
        sendAlertLoading();
      })
      .catch(() => {
        notifyError();
        sendAlertLoading();
      });
  }

  async function deleteContact() {
    toggleLoadingModal();
    await Api.deleteContact(selectedContact.id!);
    removeContact(selectedContact);
    toggleEditModal();
    sendAlertLoading();
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
          toggleEditModal();
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
      <EditContactWrapper>
        <EditContactHeader>
          <Title2>Editar Contato</Title2>
          <CloseButton
            onClick={() => {
              toggleEditModal();
              clearContact();
            }}
          >
            X
          </CloseButton>
        </EditContactHeader>
        <EditContactForm onSubmit={handleSubmit(submitContact)}>
          <LabelWrapper>
            <Label htmlFor="first_name">Nome</Label>
            <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
            <Input
              type="text"
              id="first_name"
              {...register("first_name")}
              placeholder="Digite o nome"
              onChange={(event) => {
                setContactName(event.target.value);
              }}
              value={selectedContact.first_name}
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
                setContactLastName(event.target.value);
              }}
              value={selectedContact.last_name}
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
                setContactEmail(event.target.value);
              }}
              value={selectedContact.email}
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
                setContactTelephone(event.target.value);
              }}
              value={selectedContact.phone}
            />
          </LabelWrapper>
          <PrimaryButton>Editar Contato</PrimaryButton>
          <PrimaryButton
            onClick={(event) => {
              event.preventDefault();
              deleteContact();
            }}
          >
            Excluir
          </PrimaryButton>
        </EditContactForm>
      </EditContactWrapper>
    </Modal>
  );
}
