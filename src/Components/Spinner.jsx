import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center p-8'>
            <img src="/public/logo.png" className='w-12 h-12 text-blue-500 animate-spin' alt="" />
        </div>
    );
};

export default Spinner;