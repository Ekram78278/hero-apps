import { Link, useLoaderData } from "react-router";

import Spinner from "../Components/Spinner";
import useApps from "../hooks/useAppData";
import AppCard from "./AppCard";

const home = () => {
  const appData = useLoaderData();
  const { apps, loading } = useApps();

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  console.log(appData);
  console.log(apps);

  const featuredApp = appData.slice(0, 8);

  return (
    <div>
      <div className="w-full max-w-[1600px] mx-auto min-h-[940px] flex flex-col justify-start items-center pt-4 md:pt-0  gap-6 sm:pt-20 px-4 sm:px-12 lg:px-20 pb-0  sm:gap-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-12 lg:py-16 pb-0 flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="w-full">
            <h3 className="flex flex-col items-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              We Build
              <span className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] bg-clip-text text-transparent">
                Productive Apps
              </span>
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-center max-w-4xl mx-auto px-4 text-gray-400">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.
              <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
          </div>

          <div className="flex justify-between gap-7">
            <Link
              to="https://play.google.com/store/games?hl=en"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            >
              <img src="/google.png" alt="" />
              Google Play
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            >
              <img src="/appStore.png" alt="" />
              App Store
            </Link>
          </div>

          <div className="w-full max-w-5xl">
            <img
              className="w-full h-auto object-contain"
              src="/hero.png"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* Full width gradient - centered properly */}
      {/* <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen lg:h-[410px] h-[600px] bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] -mt-96 sm:-mt-12 lg:-mt-16 flex justify-center text-center items-center px-4 pt-12 sm:pt-20 lg:pt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-12 lg:px-20 h-full">
          <div>
            <h2 className="text-white font-bold text-2xl items-center mx-auto md:text-4xl ml-12 md:ml-[30px]">
              Trusted By Millions, Built For You{" "}
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 space-x-16 mt-14 text-white ">
              <div className="space-y-3">
                <p className="font-sans text-md">Total Downloads</p>
                <h1 className="text-5xl font-extrabold">29.6 M</h1>
                <p>21% More Than Last Month</p>
              </div>
              <div className="space-y-3">
                <p className="font-sans text-md">Total Reviews</p>
                <h1 className="text-5xl font-extrabold">906k</h1>
                <p>46% More Than Last Month</p>
              </div>
              <div className="space-y-3">
                <p className="font-sans text-md">Active Apps</p>
                <h1 className="text-5xl font-extrabold">132+</h1>
                <p>31 More Will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] -mt-[500px] sm:-mt-12 lg:-mt-16">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
    <div className="space-y-8 sm:space-y-12">
      {/* Heading - Responsive */}
      <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Trusted By Millions, Built For You
      </h2>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-white">
        {/* Stat 1 - Total Downloads */}
        <div className="space-y-2 sm:space-y-3 text-center">
          <p className="font-sans text-sm sm:text-base text-gray-200">Total Downloads</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">29.6M</h1>
          <p className="text-xs sm:text-sm text-gray-200">21% More Than Last Month</p>
        </div>

        {/* Stat 2 - Total Reviews */}
        <div className="space-y-2 sm:space-y-3 text-center">
          <p className="font-sans text-sm sm:text-base text-gray-200">Total Reviews</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">906k</h1>
          <p className="text-xs sm:text-sm text-gray-200">46% More Than Last Month</p>
        </div>

        {/* Stat 3 - Active Apps */}
        <div className="space-y-2 sm:space-y-3 text-center sm:col-span-2 lg:col-span-1">
          <p className="font-sans text-sm sm:text-base text-gray-200">Active Apps</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">132+</h1>
          <p className="text-xs sm:text-sm text-gray-200">31 More Will Launch</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="flex flex-col justify-center gap-2 mt-4 items-center">
        <h4 className="text-2xl md:text-4xl font-bold">Trending Apps</h4>
        <p className="text-gray-400 lg:text-md text-sm">
          {" "}
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {featuredApp.map((data) => (
          <AppCard key={data.id} data={data}>
            {" "}
          </AppCard>
        ))}
      </div>

      <Link
        to="/allApps"
        className="btn btn-secondary border-none justify-center bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] ml-40 lg:ml-[720px] mt-3 hover:scale-75 transition ease-in-out"
      >
        Show All
      </Link>
    </div>
  );
};

export default home;
