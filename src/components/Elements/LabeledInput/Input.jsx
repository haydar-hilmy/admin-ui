const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    variant = "bg-special-mainBg border border-gray-03",
    register,
  } = props;

  return (
    <input
      type={type}
      className={`${variant} py-2 ps-4 text-sm rounded-md border-2 border-gray-300  w-full text-gray-01 focus:border-black focus:outline-none focus:ring-0`}
      placeholder={placeholder}
      name={name}
      id={name}
      {...register} // Teruskan langsung tanpa pembungkus tambahan
    />
  );
};

export default Input;
