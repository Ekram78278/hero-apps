import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-between mt-48">
      <img src="/error-404.png" className="lg:w-[500px] lg:h-[500px]" alt="" />
      <h1 className="font-bold text-blue-800 text-4xl">
        Oopssss, page not found !!
      </h1>
      <p className="text-gray-400 text-md">{error.message}</p>
      <Link className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white mt-10 hover:scale-105 transition ease-in-out ">
        {" "}
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
