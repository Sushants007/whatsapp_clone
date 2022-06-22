import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
const [{},dispatch]=useStateValue();

const signIn= () =>{
  auth.signInWithPopup(provider).then((result)=>
    {
      dispatch(
        {
          type: actionTypes.SET_USER,
          user: result.user,
        }
      )})
      .catch((error) =>alert(error.message));
};

  return (
    <div className='login'>
        <div className="login_container">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
            alt=""
            />
            <div className='login_text'>
                <h1>Sign in to whatsapp</h1>
            </div>
            <Button type="Submit" onClick={signIn}>
              Sign in with Google
            </Button>
        </div>

    </div>
  );
}

export default Login