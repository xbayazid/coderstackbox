import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import './Login.css';

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
            <div className='flex lg:flex-row flex-col gap-4 lg:gap-0 justify-center lg:mt-24'>
            <div className='glassmorphism py-12 px-8 lg:rounded-tl-xl lg:rounded-bl-xl'>
                    <div className='flex items-center text-3xl font-bold mt-12 mb-8'>
                    <span className='text-3xl text-secondary  pt-2'>
                    <ion-icon name="logo-slack"></ion-icon>
                   </span>
                  <h1 className='text-white ml-2'>Coders<span className='text-secondary'>StackBox</span></h1>
                    </div>
                    <p className='mb-5 text-white description'>Login using social media to get quick access</p>
                    <form onSubmit={handleSubmit}>
                    <div className='text-center p-3 text-white font-semibold rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' style={{ width: '317px' }}>
                    <button className='uppercase' onClick={handleGoogleSignIn}>Login with Google</button>
                    </div>
                    <div className='text-center p-3 text-white font-semibold rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' style={{ width: '317px' }}>
                    <button className='uppercase' onClick={handleGithubSignin}>Login with GitHub</button>
                                </div> 
                    </form>
                </div>
                <div className='px-10 lg:px-36 lg:py-20 glassmorphism lg:rounded-tr-xl lg:rounded-br-xl'>
                    <div className='text-white text-center xl:mt-20'>
                        <div className='lg:flex justify-around lg:w-56 mx-auto'>
                            <div>
                                <h3 className='uppercase mb-3 -ml-10 authentication-title text-[30px] lg:text-[17px]'>login</h3>
                            </div>
                            <div>
                                <Link to='/register'  className='px-2 py-1 rounded-md mt-4 bg-cyan-400  font-semibold' >
                                    <button className="">Create An Account</button>
                                </Link>
                            </div>

                        </div>
                        <div className='mt-6'>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder="Email Address" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                                </div>
                                <div className='my-5'>
                                    <input type="password" name='password' placeholder="Password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                                </div>
                                <div className='pb-4 lg:pb-0'>
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