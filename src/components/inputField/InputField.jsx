import "./InputField.scss";

const InputField = ({ type, placeholder, className, sendOTP }) => {
  return (
    <div className="input-field">
      <input
        className={className}
        placeholder={placeholder}
        type={type}
      ></input>
      {sendOTP && <div className="sendOTP">sendOTP</div>}
    </div>
  );
};

export default InputField;
