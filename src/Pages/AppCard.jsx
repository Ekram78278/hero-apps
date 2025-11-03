import React from 'react';
import { Link } from 'react-router';

const AppCard = ({data}) => {
    return (
       <div>
 <Link to={`/appInfo/${data.id}`}>
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition ease-in-out">
    <img
      src={data.image}
      alt={data.title}
      className="w-full h-[316px] object-cover rounded-md"
    />

    <h3 className="text-md mt-3 font-semibold text-gray-800 text-center">
      {data.title}
    </h3>

    <div className="flex justify-between items-center w-full mt-3 px-2">
      {/* Downloads */}
      <div className="flex items-center gap-2 bg-green-100 rounded-md px-2 py-1">
        <img
          src="/icon-downloads.png"
          alt="Downloads"
          className="w-4 h-4"
        />
        <p className="text-green-800 font-semibold text-sm">9M</p>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-2 py-1">
        <img
          src="/icon-ratings.png"
          alt="Ratings"
          className="w-4 h-4"
        />
        <p className="text-yellow-800 font-semibold text-sm">5</p>
      </div>
    </div>
  </div>
 
 </Link>
</div>

    );
};

export default AppCard;