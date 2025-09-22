import { useNavigate } from 'react-router-dom';
import './EditarButton.css';

function EditarButton({ usuarioId }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editar-usuario/${usuarioId}`);
  };

  return (
    <button 
      className="edit-btn"
      onClick={handleEdit}
      title="Editar usuário"
    >
      ✏️ Editar
    </button>
  );
}

export default EditarButton;