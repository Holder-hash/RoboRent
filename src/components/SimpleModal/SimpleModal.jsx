import styles from "./SimpleModal.module.scss";
import { IoMdClose } from "react-icons/io";
import { Transition } from "react-transition-group";
import "./SimpleModalState.scss";

function SimpleModal({ children, isOpen, setConnectTgModal }) {
  function onModalBgClick(event) {
    if (event.target.classList.contains(styles.modalwrapper))
      setConnectTgModal(false);
  }

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`${styles.modalBg} ${styles.modalBg}--${state}`}>
            <div className={styles.modalwrapper} onClick={onModalBgClick}>
              <div className={styles.modalContent}>
                <IoMdClose
                  className={styles.closeBtn}
                  onClick={() => setConnectTgModal(false)}
                />
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}

export default SimpleModal;
