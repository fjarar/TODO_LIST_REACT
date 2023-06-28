import { Button } from '@mui/material';
import React from 'react';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Register Page</h1>
            <Button variant='contained' onClick={()=>navigate('/login')}>Go To Login</Button>
        </div>
    );
}

export default RegisterPage;
