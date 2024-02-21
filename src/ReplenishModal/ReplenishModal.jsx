import "./ReplenishModal.scss";
import { IoMdClose } from "react-icons/io";
import { Transition } from "react-transition-group";

function ReplenishModal({ children, isOpen, setReplenishModal, className }) {
  function onModalBgClick(event) {
    if (event.target.classList.contains("modalwrapper"))
      setReplenishModal(false);
  }

  return (
    <Transition in={isOpen} timeout={350} unmountOnExit={true}>
      {(state) => (
        <div className={`modalBg modalBg--${state}`}>
          <div className="modalwrapper" onClick={onModalBgClick}>
            <div className={`modalContent ${className}`}>
              <IoMdClose
                className="closeBtn"
                onClick={() => setReplenishModal(false)}
              />
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}

export default ReplenishModal;
