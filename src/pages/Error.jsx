import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='errorWrap'>
            <div className='textError'>
            <h3>404 Not Found</h3>
            <p>The page you are looking for not avaible!</p>
            < Link to="/" className='linkError'>Go to Home</Link>
            <div className='errorAni'>  
            </div>
            </div>
        </div>
    );
};

export default Error;