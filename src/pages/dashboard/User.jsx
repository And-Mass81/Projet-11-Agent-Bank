import React from 'react';
import { useEffect,useState } from 'react';
import { userDataService } from '../../_services/user.data.service';
import Account from '../../components/user/account';

const User = () => {
  const [openModal,setOpenModal] = useState(false); 
  const toggleForm =()=>{ setOpenModal(!openModal)}
  const [userData,setUserData] = useState([])

  useEffect(() => {
    userDataService.getUserProfile()
      .then(res => {
        console.log(res.data)
        setUserData(res.data.body)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="bg-dark-dashBoard">
      <div className="header">
        <h1>Welcome back<br />{userData.userName}</h1>
        <button className="edit-button" onClick={toggleForm} >Edit Name</button>

        <div className={`modal-dialog ${openModal ? 'modal-dialog-open' : ''}`}>
          <div className="modal-header">
            <h2>Edit user info</h2>
            <div>
              <label className='label-user'>Username:</label>
              <input type="text" name="u" placeholder="new username" className='input-user' size="20" />
            </div>
            <a href="#" className="btn-close closemodale" onClick={() => setOpenModal()}>&times;</a>
          </div>
          <div className="modal-body">
            <div>
              <label className='label-user'>First name:</label>
              <input type="text" name="u" placeholder={userData.firstName} className='input-user' size="20" disabled  />
            </div>
            <div>
              <label className='label-user'>Last name:</label>
              <input type="text" name="u" placeholder={userData.lastName} className='input-user' size="20" disabled />
            </div>
          </div>
          <div className="modal-footer">
            <span href="" className="btn" id="btn_ingresar">Save</span>
            <span href="" className="btn" onClick={() => setOpenModal()} id="btn_ingresar">Close</span>
          </div>
        </div>
        
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"} />
      <Account title={"Argent Bank Savings "} amount={"$10,928.42"} description={"Available Balance"} />
      <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"} />
    </main>
  );
};

export default User;