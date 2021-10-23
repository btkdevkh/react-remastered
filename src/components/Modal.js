import ReactDOM from 'react-dom';
import '../assets/css/Modal.css';

export default function Modal({ children, handleCloseModal, isSalesModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div 
        className="modal"
        // Inline & Dynamic Styles
        style={{ 
          textAlign: 'center', 
          borderRadius: '5px',
          border: "2px solid",
          borderColor: isSalesModal ? "#333" : "#ff0000"
        }}>
        {children}
        <button
          onClick={handleCloseModal}
          // Conditional CSS Classe
          className={isSalesModal ? "saleBtn" : ""}>
          Close
        </button>
      </div>
    </div>
  ), document.body)
}
