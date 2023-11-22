import React from 'react';

interface ButtonProps {
  onOpenModal: () => void;
}

const Button: React.FC<ButtonProps> = ({ onOpenModal }) => {
  return (
    <div>
      <button className="btn-nuevo" onClick={onOpenModal}>
        Nuevo
      </button>
    </div>
  );
};

export default Button;