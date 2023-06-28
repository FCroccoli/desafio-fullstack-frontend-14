import { useContext, useEffect } from "react";
import { Modal } from "../../styles/modalStyle";
import { HeadlineBold } from "../../styles/textStyle";
import { LoadingIcon } from "./style";
import { ModalContext } from "../../contexts/modalContext";

export default function LoadingModal() {
  const { toggleLoadingModal, alertLoading, sendAlertLoading } =
    useContext(ModalContext);

  useEffect(() => {
    if (alertLoading) {
      toggleLoadingModal();
      sendAlertLoading();
    }
  }, [alertLoading]);

  return (
    <Modal>
      <LoadingIcon />
      <HeadlineBold>Carregando</HeadlineBold>
    </Modal>
  );
}
