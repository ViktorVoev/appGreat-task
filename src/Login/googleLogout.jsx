import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './googleLogin.css';
import { useNavigate } from 'react-router-dom';

const clientId = '381612599020-d1lqon4l8g8cr3md8e3f1pcs4fdg0ums.apps.googleusercontent.com';

function Logout() {
    const navigate = useNavigate();
    const onSuccess = () => {
        localStorage.clear()
        alert('Logout made successfully');
        navigate('/')
        window.location.reload(true)
    };

        return (
            <div className=''>
                <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onSuccess={onSuccess}
                onLogoutSuccess={onSuccess}
                />
            </div>
        )
}

export default Logout;