import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            {error.message}
            <h1> Error !!!! </h1>
        </div>
    );
};

export default ErrorPage;