import { useContext } from "react";
import Contacts from "../Contacts";
import {
  DashboardHeader,
  DashboardDisplay,
  DashboardWrapper,
  Loading,
  DashboardDescriptionWrapper,
  DashboardNameWrapper,
} from "./style";
import { DisplayButton } from "../../styles/buttonStyle";
import { Title1, HeadlineItalic } from "../../styles/textStyle";
import { UserContext } from "../../contexts/userContext";
import { ModalContext } from "../../contexts/modalContext";
import { FaEdit } from "react-icons/fa";
import LoadingModal from "../LoadingModal";
import EditUserModal from "../EditUserModal";

export default function Dashboard() {
  const { user, isLoading } = useContext(UserContext);

  const { toggleUserModal, displayUserEditModal, displayLoadingModal } =
    useContext(ModalContext);

  return (
    <>
      <DashboardWrapper>
        {isLoading ? (
          <Loading>Carregando</Loading>
        ) : (
          <DashboardHeader>
            <DashboardNameWrapper>
              <Title1>{`Nome: ${user.first_name} ${user.last_name}`}</Title1>
              <DisplayButton
                onClick={() => {
                  toggleUserModal(user);
                }}
              >
                <FaEdit />
              </DisplayButton>
            </DashboardNameWrapper>
            <DashboardDescriptionWrapper>
              <HeadlineItalic>{`Telefone: ${user.phone}`}</HeadlineItalic>
              <HeadlineItalic>{`Email: ${user.email}`}</HeadlineItalic>
            </DashboardDescriptionWrapper>
          </DashboardHeader>
        )}
        <DashboardDisplay>
          <Contacts />
        </DashboardDisplay>
      </DashboardWrapper>
      {displayUserEditModal && <EditUserModal />}
      {displayLoadingModal && <LoadingModal />}
    </>
  );
}
