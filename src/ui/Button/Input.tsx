export const Input = ({ label, id, ...rest}) => {
  return (
    <div className="flex gap-4">
      <label htmlFor={id} className="text-gray-50 text-xl w-15 text-center">
        {label}
      </label>
      <input id={id} className="bg-white" {...rest}></input>
    </div>
  );
};
