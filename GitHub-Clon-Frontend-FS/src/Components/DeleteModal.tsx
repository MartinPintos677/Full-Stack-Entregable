// ConfirmModal.tsx
import React from 'react'
import '../Css/DeleteModal.css'

interface ConfirmModalProps {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onCancel,
  onConfirm
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="fs-4">¿Estás seguro que deseas eliminar la búsqueda?</p>
        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
