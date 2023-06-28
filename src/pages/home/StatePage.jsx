import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();
    console.log(location.search); // Query params sent
    return (
        <div>
            <h1>State: {location.state.online ? 'The user is Online' : 'The user is Offline' }</h1>
        </div>
    );
}

export default StatePage;
