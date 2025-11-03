
import useApps from "../hooks/useAppData";

import AppCard from "./AppCard";

const AllApps = () => {
  const { apps, loading, error } = useApps();

 

  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-4">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-center max-w-4xl mx-auto px-4 text-gray-500">
          Explore All Apps on the Market Developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-9">
        <h1 className="font-bold text-2xl"> <span> ({apps.length}) </span> All Products</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        {
            apps.map( data => (<AppCard key={data.id} data={data}> </AppCard>))
        }

  

      </div>
    </div>
  );
};

export default AllApps;
