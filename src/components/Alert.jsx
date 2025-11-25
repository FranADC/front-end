import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import "./Alert.css";

export default function Alert({ isOpen, setIsOpen, title, text, href }) {
  return (
    <>
      <Dialog className="dialog" open={isOpen} onClose={() => {}}>
        <div className="divAlertGeneral">
          <DialogPanel className="divAlertContenedor">
            <DialogTitle className="tituloAlert">{title}</DialogTitle>
            <Description className="descripcion">{text}</Description>
            <button onClick={() => (window.location.href = href)}>
              Aceptar
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
