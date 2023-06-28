import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { Button } from '@mui/material';
import RegisterPage from './RegisterPage';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Button variant='contained' onClick={()=>navigate('/register')}>Go To Register</Button>
        </div>
    );
}

export default LoginPage;
