import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.gif';
import Button from '../../components/Buttons/Button';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - Not Found</title>
            </Helmet>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to="/">
                    <Button>back to home</Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;