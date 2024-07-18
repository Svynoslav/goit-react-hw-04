import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, img }) {
  const {
    description,
    urls: { regular },
  } = img;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.modalOverlay}
    >
      <img className={css.img} src={regular} alt={description} />
      {description !== null &&
        (description.includes("Russia") ? (
          <p className={css.text}>Смерть кацапам ^_^</p>
        ) : (
          <p className={css.text}>{description}</p>
        ))}
    </Modal>
  );
}
