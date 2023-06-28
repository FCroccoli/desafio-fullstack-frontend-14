import { useContext } from "react";
import {
  ContactCard,
  ContactDescriptionWrapper,
  ContactInfoWrapper,
  ContactName,
  ContactNameWrapper,
  ContactsDisplay,
  ContactsHeader,
} from "./style";
import { DisplayButton } from "../../styles/buttonStyle";
import { HeadlineBold, HeadlineItalic, Title2 } from "../../styles/textStyle";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { FaEdit, FaPlus } from "react-icons/fa";
import AddContactModal from "../AddContactModal";
import EditContactModal from "../EditContactModal";
import LoadingModal from "../LoadingModal";

export default function Contacts() {
  const {
    displayAddModal,
    toggleAddModal,
    displayLoadingModal,
    displayEditModal,
    toggleEditModal,
  } = useContext(ModalContext);

  const { isLoading, contacts } = useContext(UserContext);

  return (
    <>
      <ContactsHeader>
        <Title2>Contatos</Title2>
        <DisplayButton
          onClick={() => {
            toggleAddModal();
          }}
        >
          <FaPlus />
        </DisplayButton>
      </ContactsHeader>
      {isLoading ? (
        <HeadlineBold>Carregando</HeadlineBold>
      ) : !isLoading && contacts.length < 1 ? (
        <Title2>Nenhum contato cadastrado</Title2>
      ) : (
        <ContactsDisplay>
          {contacts &&
            contacts!.map((contact) => (
              <ContactCard key={contact.id}>
                <ContactInfoWrapper>
                  <ContactNameWrapper>
                    <ContactName>{`Nome: ${contact.first_name} ${contact.last_name}`}</ContactName>
                  </ContactNameWrapper>
                  <ContactDescriptionWrapper>
                    <HeadlineItalic>{`Telephone: ${contact.phone}`}</HeadlineItalic>
                    <HeadlineItalic>{`Email: ${contact.email}`}</HeadlineItalic>
                  </ContactDescriptionWrapper>
                </ContactInfoWrapper>
                <DisplayButton
                  onClick={() => {
                    toggleEditModal(contact);
                  }}
                >
                  <FaEdit />
                </DisplayButton>
              </ContactCard>
            ))}
        </ContactsDisplay>
      )}
      {displayAddModal && <AddContactModal />}
      {displayEditModal && <EditContactModal />}
      {displayLoadingModal && <LoadingModal />}
    </>
  );
}
