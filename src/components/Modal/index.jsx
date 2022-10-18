import { Modal, ModalContainer } from "../../styles/modal";
import { TechForm } from "../FormTech";

export function ModalWindow() {
  return (
    <Modal>
      <ModalContainer>
        <TechForm />
      </ModalContainer>
    </Modal>
  );
}
