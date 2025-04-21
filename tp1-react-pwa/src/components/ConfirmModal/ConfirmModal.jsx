import './ConfirmModal.css';

const ConfirmModal = ({ mensaje, onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{mensaje}</p>
        <div className="modal-buttons">
          <button className="confirm" onClick={onConfirmar}>Sí</button>
          <button className="cancel" onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
