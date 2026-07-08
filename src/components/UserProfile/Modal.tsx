import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Box = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 350px;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ message, onConfirm, onCancel }: Props) => {
  return (
    <Overlay>
      <Box>
        <p>{message}</p>
        <Actions>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
        </Actions>
      </Box>
    </Overlay>
  );
};

export default Modal;