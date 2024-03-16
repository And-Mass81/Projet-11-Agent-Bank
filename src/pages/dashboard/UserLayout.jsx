import React from 'react';
import User from './User';
import Uheader from '../../components/user/Uheader';
import Footer from '../../components/footer';

const UserLayout = () => {
    return (
        <div>
            <Uheader/> 
              <User/> 
            <Footer/>
        </div>
    );
};

export default UserLayout;