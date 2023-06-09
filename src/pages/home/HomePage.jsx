import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();
    const navigate = (path) => {
        history(path)
    }

    const goBack = () =>{
        history(-1)
    }

    const goForward = () => {
        history(+1)
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>Go To Profile</button>
            <button onClick={ goBack }>Go Back</button>
            <button onClick={ goForward }>Go Forward</button>
        </div>
    );
}

export default HomePage;
