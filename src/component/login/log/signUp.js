import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {Form} from './form';
import {setUser} from '../../../redux/slice/UserSlice';
import {NavLink} from "react-router-dom";
import '../RegisterPage/Register.css'
const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const provider= new GoogleAuthProvider();

     const signInWithGoogle = ()=>{
         const auth = getAuth();
        signInWithPopup(auth,provider).then(({user})=>{

            dispatch(setUser({
                email: user.email,
                token: user.accessToken,

            }));


            const name=user.displayName;
            const profilePic=user.photoURL;
            const email=user.email;

            localStorage.setItem("name",name);
            localStorage.setItem("profilePic",profilePic);
            localStorage.setItem("email",email);


        navigate('/account')

        }).catch((err=>{
            console.log(err);
        }))
    };

    const handleRegister = (email, password,name) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password,name)
            .then(({user}) => {

                dispatch(setUser({

                    email: user.email,
                    id: user.uid,
                    name:name,
                }));
                const profilePic=user.photoURL;
                const email=user.email;
                const login =name;

                localStorage.setItem("name",login);
                localStorage.setItem("profilePic",profilePic);
                localStorage.setItem("email",email);

                navigate('/account')
            })
            .catch(console.error)
    }


    return (
        <div className='grid-reg'>
            <div>
                <Form
                title="Создать Аккаунт"
                handleClick={handleRegister}
                signInWithGoogle={signInWithGoogle}
            />
            </div>

            <div className='sign-block-margin'>
                <div className='block-name mb-1'>У мене є Аккант</div>
                <NavLink to='/login' className='reg-button'>Войти</NavLink>
                <div className='mini-text'>
                    <h4 className='name-2'>Чому варто зареєструватись?</h4>
                    <div>Ви користуєтеся привілеями (VIP Розпродаж, shopping night)</div>
                    <div>Приєднуйтесь до ANSWEAR.Club та купуйте дешевше!</div>
                    <div>Швидкі покупки завдяки вже збереженим особистим даним.</div>
                </div>

            </div>
        </div>

    )
}

export {SignUp}