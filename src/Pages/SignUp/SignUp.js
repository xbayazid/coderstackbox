import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { layout } from '../../style';
import axios from 'axios'
import { setAuthToken } from '../../api/auth';
import { useForm } from "react-hook-form";


const SingUp = () => {
  const [error, setError] = useState("");
  const { providerLogin, githubProviderLogin, setLoading } = useContext(AuthContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
          };
          console.log(userInfo);
          /*User Info Save To DataBase*/
          axios.post(
            "http://localhost:5000/api/users",
            userInfo
          )
            .then((res) => {
              setAuthToken(userInfo);
              navigate(from, { replace: true });
              toast("User Registered Successfully");
            })
            .catch((err) => {
              console.error(err);
            });
        }
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  const hangleGithubSingIn = () => {
    githubProviderLogin(githubProvider)
      .then(result => {
        const user = result.user;
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
          };
          console.log(userInfo);
          /*User Info Save To DataBase*/
          axios.post(
            "http://localhost:5000/api/users",
            userInfo
          )
            .then((res) => {
              setAuthToken(userInfo);
              navigate(from, { replace: true });
              toast("User Registered Successfully");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
/*   const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    const userInfo = {
      displayName: name,
    };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");

        updateUser(userInfo)
          .then(() => {
          })
          .catch((error) => console.log(error));
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }; */
  const handleSignUp = (data) => {
    setLoading(true);
    setError("");
    /* ----Upload Image---- */
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=0f5072fcc1857428de9b90d3cdedf5fc`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(data.email, data.password)
          .then((result) => {
            const userInfo = {
              displayName: data.name,
              photoURL: imageData.data.display_url,
            };
            updateUser(userInfo)
              .then(() => {})
              .catch((err) => {
                console.error(err);
                setError(err.message);
              });
              if (imageData.success) {
                const userInfo = {
                  name: data.name,
                  email: data.email,
                  role: data.buyer_or_seller,
                  image: imageData.data.url,
                };
                /* User Info Save To DataBase */
                axios.post("http://localhost:5000/api/users",
                  userInfo
                )
                .then((res) => {
                  setAuthToken(userInfo);
                  navigate(from, { replace: true });
                  setLoading(false);
                })
                .catch((err) => {
                  console.error(err);
                  setError(err.message);
                });
              }
            })
          .catch((error) => {
            console.error(error)
            setError(error.message);
          });
        });
      };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - SignUp</title>
      </Helmet>
      <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
        <div className={`${layout.sectionCol}`}>
          <img className='extra-img w-4/5' src="https://i.ibb.co/S3ScgR8/118046-lf20-oahmox5rjson.gif" alt="" />
        </div>
        <div className='extra p-2'>
          <div className='text-white text-center xl:mt-16'>
            <div className='flex justify-around w-56 mx-auto'>
              <div>
                <h3 className='uppercase mb-3 -ml-10 authentication-title'>Register</h3>
              </div>
              <div>
                <Link to='/login'>
                  <button className="btn btn-xs ml-10">Login</button>
                </Link>
              </div>

            </div>
            <div className='mt-6'>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className='mb-5'>
                  <input type="name" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs text-black" required />
                </div>
                <div>
                  <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs text-black" required />
                </div>
                <div className='my-5'>
                  <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs text-black" required />
                </div>
                <div>
                  <button className='bg-black px-32 py-3 text-white rounded-md' type='submit'>Register</button>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md bg-gradient-to-r from-accent to-secondary' style={{ width: '317px' }}>
                  <button onClick={handleGoogleSignIn}>Register with Google</button>
                </div>
                <div className='mx-auto p-3 rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' style={{ width: '317px' }}>
                  <button onClick={hangleGithubSingIn}>Register with GitHub</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;