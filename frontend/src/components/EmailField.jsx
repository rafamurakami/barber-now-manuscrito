import Email from './Emailinput';
import './FormField.css';
 
function EmailField() {
  return (
    <div className="form-field">
      <label>Email</label>
      <Email />
    </div>
  );
}
export default EmailField;