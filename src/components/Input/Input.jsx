/* eslint-disable react/prop-types */
const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  minLength,
  pattern,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      minLength={minLength}
      pattern={pattern}
      required
    />
  );
};

export default Input;
