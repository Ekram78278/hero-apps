const Spinner = () => {
  return (
    <div className="flex justify-center items-center p-8 lg:w-[1400px] lg:h-[1400px]">
      <img
        src="/logo.png"
        className="w-12 h-12 text-blue-500 animate-spin"
        alt=""
      />
      <h1 className="font-bold text-4xl"> Loading ....</h1>
    </div>
  );
};

export default Spinner;
