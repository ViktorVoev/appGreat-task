import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './googleLogin.css'
import { useNavigate } from 'react-router-dom';
import { refreshTokenSetup } from '../services/refreshToken';

const clientId = '381612599020-d1lqon4l8g8cr3md8e3f1pcs4fdg0ums.apps.googleusercontent.com';

function Login() {
    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log('[Login success] currentUser:', res.profileObj);
        refreshTokenSetup(res);
        localStorage.setItem('name', res.profileObj.name)
        navigate('/cards')
        window.location.reload(true)
    };
        const onFailure = (res) => {
            console.log('[Login failed] res:', res);
        };


        return (
            <div className='googleLogin'>
                <GoogleLogin
                className='googleLoginBtn'
                clientId={clientId}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Login
                    </button>
        )}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                prompt="select_account"
                />
            </div>
        )
}

export default Login;