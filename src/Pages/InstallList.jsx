import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import useApps from "../hooks/useAppData";
import { formatCompact } from "../utils/formatters";

const InstallList = () => {
  const [installList, setIsInstalledList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const { loading } = useApps();

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installList"));

    if (savedList) {
      setIsInstalledList(savedList);
    }
  }, []);

  //   handle sorting

  const sortedItem = () => {
    if (sortOrder === "size-asc") {
      return [...installList].sort((a, b) => a.size - b.size);
    }
    if (sortOrder === "size-desc") {
      return [...installList].sort((a, b) => b.size - a.size);
    } else {
      return installList;
    }
  };

  const handleRemove = (id) => {
    const savedList = JSON.parse(localStorage.getItem("installList"));
    let updatedList = savedList.filter((A) => A.id !== id);

    setIsInstalledList(updatedList);
    localStorage.setItem("installList", JSON.stringify(updatedList));
  };

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  if (!installList.length) return <p className=" text-4xl flex justify-center items-center">No Apps Available ... </p>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="w-full min-h-[106px] flex flex-col justify-center items-center mb-8 ">
        <h1 className="font-bold text-4xl text-gray-600">
          Your Installed Apps
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-center max-w-4xl mx-auto px-4 text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-full flex flex-col  gap-4">
        <div className="flex justify-between">
          <div>
            <h1 className="lg:text-2xl text-xl items-center font-semibold text-gray-600">
              <span> ({sortedItem().length})Apps Found</span>
            </h1>
          </div>
          {/* sorting dropdown menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSortOrder("size-desc")}>
                <a>High to Low</a>
              </li>
              <li onClick={() => setSortOrder("size-asc")}>
                <a>Low to High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          {sortedItem().map((A) => (
            <div className="p-[16px] space-x-4 space-y-7 ">
              <div className="flex items-center justify-between bg-gray-100 w-full p-3 px-4 rounded-xl shadow-sm hover:scale-105 transition ease-in-out">
                <div className="flex flex-row space-x-7 items-center">
                  <img
                    src={A.image}
                    className="w-[80px] h-[80px] rounded-2xl"
                    alt=""
                  />

                  <div className="space-y-3">
                    <h1 className="font-sans text-2xl font-semibold items-start">
                      {A.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 bg-green-50 rounded-lg">
                        <img
                          src="/icon-downloads.png"
                          alt="Downloads"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <p className="text-green-800 font-semibold text-xs sm:text-sm">
                          {formatCompact(A.downloads)}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 bg-yellow-50 rounded-lg">
                        <img
                          src="/icon-ratings.png"
                          alt="Ratings"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <p className="text-yellow-800 font-semibold text-xs sm:text-sm">
                          {A.ratingAvg}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 bg-blue-50 rounded-lg">
                        <p className="text-blue-800 font-semibold text-xs sm:text-sm">
                          {A.size} MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-end flex flex-row ">
                  <button
                    onClick={() => handleRemove(A.id)}
                    className="btn btn-error"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallList;
