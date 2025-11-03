import React from 'react';
import useApps from '../hooks/useAppData';
import { Link, useParams } from 'react-router';
import { formatCompact } from '../utils/formatters';
import RatingsChart from '../Components/RatingsChart';


const AppInfo = () => {

    const {id} = useParams();
    const {apps, loading} = useApps();
    const app = apps.find(p => String(p.id) ===id )
    
    // Loading
      
    if( loading) {
        return <div>Loading app....</div>
    }

    
    const {title, image,companyName, ratingAvg,downloads, reviews, ratings,size} = app

 
    return (
       <div>
            
            <div className='max-w-7xl mx-auto p-4 flex flex-col md:flex-row justify-between'>
                
                <img src={image} alt={title} className="w-full md:w-1/3 rounded-lg shadow-lg" />
                
                <div className='w-full md:w-2/3 md:pl-8'>
                    <div>
                        <h2 className='text-3xl font-bold mt-4 md:mt-0'>{title}</h2>
                        <p className='text-gray-400 mt-3'> Developed by: <span className='text-purple-600 font-semibold'>{companyName}</span></p>
                    <div className='border-[0.2px] border-gray-300 mt-8'></div>
                    </div>
                    {/* stickers */}
                    <div className=' flex gap-20'>
                        {/* how many downloads */}
                        <div className='flex flex-col justify-center items-start gap-1 lg:mt-16 mt-3'>
                            <img src='/public/icon-downloads.png' className='w-[30px] h-[30px]' alt="" />
                            <p className='font-semibold'>Downloads</p>
                            <h1 className='text-4xl font-bold'>{formatCompact(downloads)}</h1>
                        </div>

                        {/* how many ratings */}
                         <div className='flex flex-col justify-center items-start gap-1 lg:mt-16 mt-3'>
                            <img src='/public/icon-ratings.png' className='w-[30px] h-[30px]' alt="" />
                            <p className='font-semibold'>Average Ratings</p>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>

                        {/* No of Reviews */}
                        
                           <div className='flex flex-col justify-center items-start gap-1 lg:mt-16 mt-3'>
                            <img src='/public/icon-review.png' className='w-[30px] h-[30px]' alt="" />
                            <p className='font-semibold'>Total Reviews</p>
                            <h1 className='text-4xl font-bold'>{formatCompact(reviews)}</h1>
                        </div>

                       


                    </div>
                        {/* Install Now Button */}
                     <div>
                            <Link className='btn mt-6 bg-green-300 rounded-md hover:scale-105 transition'>Install Now ({size}MB)</Link>
                        </div>
                
                </div>
                    

                
                

            </div>
            <div className='border-[0.2px] border-gray-300 mt-8'></div>

            {/*  graph Chart */}


                <div className='mt-5'>
                    <h1 className='font-bold text-3xl'>Ratings</h1>
                    <RatingsChart ratings={ratings}></RatingsChart>
                </div>
        </div>
    );
};

export default AppInfo;