import Password from './PasswordInput';
import './FormField.css';
 
function PasswordField() {
  return (
    <div className="form-field">
      <label>SENHA</label>
      <Password />
    </div>
  );
}
export default PasswordField;