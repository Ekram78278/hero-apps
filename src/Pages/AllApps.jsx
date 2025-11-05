import { useState } from "react";
import useApps from "../hooks/useAppData";

import Spinner from "../Components/Spinner";
import AppCard from "./AppCard";

const AllApps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((data) => data.title.toLocaleLowerCase().includes(term))
    : apps;

  if (searchedApps.length === 0)
    return (
      <div className="mx-auto flex flex-col justify-center items-center">
        <img src="/App-Error.png" alt="" />
        <p className="text-purple-700 font-bold text-5xl">
          Opsss!! No App Found
        </p>
      </div>
    );

  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-4">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-center max-w-4xl mx-auto px-4 text-gray-500">
          Explore All Apps on the Market Developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-9  justify-between  flex flex-col lg:flex-row items-center gap-y-5">
        <h1 className="font-bold text-2xl">
          {" "}
          <span> ({searchedApps.length}) </span> All Products
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {searchedApps.map((data) => (
          <AppCard key={data.id} data={data}>
            {" "}
          </AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
