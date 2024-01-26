/* eslint-disable react/prop-types */
import style from "./InputText.module.css";

const InputText = ({
  label,
  type,
  placeholder,
  isRequired,
  inputId,
  changeValue,
  value,
}) => {
  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        onChange={(event) => changeValue(event.target.value)}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        id={inputId}
        value={value}
        className={`${style.input_box}`}
      />
    </div>
  );
};

export default InputText;
