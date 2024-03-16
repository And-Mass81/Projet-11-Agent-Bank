import React from 'react';
import Account from '../../components/user/account';

const User = () => {
  return (
    <main className="bg-dark-dashBoard">
       {/*------------- modal----------------------- */}
      <div className="modale " aria-hidden="true"> {/* opened*/}
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Edit your user name</h2>
            <a href="#" className="btn-close closemodale" aria-hidden="true">&times;</a>
          </div>
          <div className="modal-body">
            <input type="text" name="u" placeholder="User" size="20" />
          </div>
          <div className="modal-footer">
            <a href="#" className="btn" id="btn_ingresar">Edit</a>
          </div>
        </div>
      </div>
       {/*------------- modal----------------------- */}
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"} />
      <Account title={"Argent Bank Savings "} amount={"$10,928.42"} description={"Available Balance"} />
      <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"} />
    </main>
  );
};

export default User;