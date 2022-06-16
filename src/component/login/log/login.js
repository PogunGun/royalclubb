import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from "./form";
import {setUser} from '../../../redux/slice/UserSlice'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/account')
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="Log in"
            handleClick={handleLogin}
        />
    )
}

export {Login}