import ReactDOM from 'react-dom';
import '../assets/css/Modal.css';

export default function Modal({ children, handleCloseModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  ), document.body)
}
