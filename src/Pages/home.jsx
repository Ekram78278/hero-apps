const home = () => {
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
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              <img src="/google.png" alt="" />
              Google Play
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              <img src="/appStore.png" alt="" />
              App Store
            </button>
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
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[410px] bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] -mt-96 sm:-mt-12 lg:-mt-16 flex justify-center text-center items-center px-4 pt-12 sm:pt-20 lg:pt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-12 lg:px-20 h-full">
          <div>
            <h2 className="text-white font-bold text-2xl md:text-4xl ml-12 md:ml-[30px]">
              Trusted By Millions, Built For You{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
