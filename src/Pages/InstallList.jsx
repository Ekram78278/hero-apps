import React from 'react';
import useApps from '../hooks/useAppData';
import Spinner from '../Components/Spinner';

const InstallList = () => {
     const { loading, error} = useApps()


     if (loading) {
        return <div>
        <Spinner></Spinner>
        </div>
     }


    return (
        <div>
            <h1>This is install List</h1>
        </div>
    );
};

export default InstallList;