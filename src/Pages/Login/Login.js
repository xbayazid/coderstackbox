import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import './Login.css';
import Logo from '../../components/Logo';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, loader } = useContext(AuthContext);
    const { providerLogin, githubProviderLogin } = useContext(AuthContext);
    const { loginUserEmail, setLoginUserEmail } = useState('');
    const googleAuthProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubSignin = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                toast.success('User Login Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className='min-h-[80vh] flex items-center justify-center'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - Login</title>
            </Helmet>
            <div className='flex md:flex-row flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center glassmorphism md:h-[480px] h-[280px] md:p-10 p-5 md:rounded-tl-xl md:rounded-bl-xl'>
                    <Logo/>
                    <p className='mb-5 text-white description'> Login using social media to get quick access </p>
                    <form onSubmit={handleSubmit}>
                    <div className='text-center p-3 text-white font-semibold rounded-md bg-gradient-to-r from-accent to-secondary'>
                                    <button className='uppercase w-full' onClick={handleGoogleSignIn}>Login with Google</button>
                                </div>
                                <div className='text-center p-3 text-white font-semibold rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' >
                                    <button className='uppercase w-full' onClick={handleGithubSignin}>Login with GitHub</button>
                                </div> 
                    </form>
                </div>

                <div className='flex flex-col justify-center items-center glassmorphism md:h-[480px] h-[280px] md:p-10 p-5 md:rounded-tr-xl md:rounded-br-xl'>
                    <div className='text-white text-center '>
                        <div className='flex justify-around '>
                            <div>
                                <h3 className='uppercase mb-3 authentication-title'>login</h3>
                            </div>
                            <div>
                                <Link to='/register'  className='px-2 py-1 rounded-md mt-4 bg-cyan-400  font-semibold' >
                                    <button className="">Create An Account</button>
                                </Link>
                            </div>

                        </div>
                        <div className='mt-5'>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder="Email Address" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                                </div>
                                <div className='my-4'>
                                    <input type="password" name='password' placeholder="Password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                                </div>
                                <div>
                                    <button className='bg-black px-32 py-3 text-white rounded-md uppercase' type='submit'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;