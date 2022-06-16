import {useState} from 'react';
import '../RegisterPage/Register.css'
import google from '../../../img/form/google.gif'
const Form = ({title, handleClick,signInWithGoogle}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    return (
        <div className='register-block'>
            <div className='block-name mb-1'>I don't have an account</div>
            <div className='reg-text'>email*</div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className='reg-text'>Password*</div>
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <div className='reg-text'>Login*</div>
            <input
                type="displayName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => handleClick(email, pass,name)}
                className='reg-button'
            >
                {title}
            </button>
            <button
                onClick={signInWithGoogle}
                className='reg-button mar-top'
            >
                <div className='google-grid'>
                    <div>Google</div>
                    <img src={google} alt='' className='google-img'/>
                </div>
            </button>
        </div>
    )
}

export {Form}