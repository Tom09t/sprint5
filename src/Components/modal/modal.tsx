import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div id="nuevoIngrediente" className="container">
      <div className="modalCM_RubroI">
      <div className="tituloRubroI">
                <h2>Crear / Modificar Rubro Ingrediente</h2>
            </div>
        
            <div className="seccionRubroI">
                <div className="inputsRubroI">
                <b>Nombre</b>
                <input type="text" placeholder="Ej: Embutido"/>
                <b>Estado Alta/Baja</b>
                <input type="text" placeholder="Alta/Baja"/>
                </div>
        
                <div className="inputsRubroI">
                <b>Rubro Padre</b>
                <input type="text" placeholder="Ej: Embutido"/>
                </div>
            </div>
        
            <div className="botonesRubroI">
                <div className="button1" onClick={onClose}><button>Volver</button></div>
                <div className="button2"><button>Guardar</button></div>
            </div>
      </div>
    </div>
  );
};

export default Modal;


