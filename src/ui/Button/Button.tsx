export const Button = ({ label, className, ...rest }) => {
  return (
    <button className={`${className}`} {...rest} >
      {label}
    </button>
  );
};
