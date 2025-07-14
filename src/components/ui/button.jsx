export function Button({ children, className = '', ...props }) {
  return (
    <button
      className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300 w-full mt-auto"
      {...props}
    >
      {children}
    </button>
  );
}

