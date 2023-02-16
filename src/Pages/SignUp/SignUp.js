import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { setAuthToken } from "../../api/auth";

const SingUp = () => {
  const [error, setError] = useState("");
  const { providerLogin, githubProviderLogin, setLoading } =
    useContext(AuthContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
            ,
          };
          console.log(result);
          setAuthToken(userInfo);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const hangleGithubSingIn = () => {
    githubProviderLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          console.log(result);
          setAuthToken(userInfo);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = (data) => {
    setLoading(true);
    setError("");
    /* ----Upload Image---- */
    const image = data.image[0];
    // console.log(data);
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
                role: "",
                image: imageData.data.url,
              };
              /* User Info Save To DataBase */
              console.log(result);
              setAuthToken(userInfo);
              navigate(from, { replace: true });
            }
          })
          .catch((error) => {
            console.error(error);
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
      <Navbar></Navbar>
      <div className="flex justify-center mt-24">
        <div className="glassmorphism py-12 px-8 rounded-tl-xl rounded-bl-xl">
          <h2 className="mt-12 text-white text-5xl title">Welcome to</h2>
          <div className="flex items-center text-3xl font-bold mt-5 mb-8">
            <span className="text-3xl text-secondary  pt-2">
              <ion-icon name="logo-slack"></ion-icon>
            </span>
            <h1 className="text-white ml-2">
              Coders<span className="text-secondary">StackBox</span>
            </h1>
          </div>
          <>
            <div
              className="text-center p-3  text-white font-semibold rounded-md mt-4 bg-gradient-to-r from-accent to-secondary"
              style={{ width: "317px" }}
            >
              <button className="uppercase" onClick={handleGoogleSignIn}>
                signup with Google
              </button>
            </div>
            <div
              className="text-center p-3  text-white font-semibold rounded-md mt-4 bg-gradient-to-r from-accent to-secondary"
              style={{ width: "317px" }}
            >
              <button className="uppercase" onClick={hangleGithubSingIn}>
                signup with GitHub
              </button>
            </div>
          </>
        </div>
        <div className="px-36 py-20 glassmorphism rounded-tr-xl rounded-br-xl">
          <div className="text-white text-center xl:mt-20">
            <div className="flex items-center justify-around w-56 mx-auto">
              <div>
                <h3 className="uppercase mb-3 -ml-10 authentication-title">
                  Signup
                </h3>
              </div>
              <div>
                <Link
                  to="/login"
                  className="px-2 py-1 rounded-md mt-4 bg-cyan-400 text-black font-semibold"
                >
                  <button className="">Login</button>
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Enter your name",
                      })}
                    placeholder="Full Name"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div className="my-5">
                  <input
                    type="file"
                    {...register("image", {
                      required: "Plase insert a image",
                    })}
                    placeholder="Image"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div className="my-5">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Plase insert a email",
                      })}
                    placeholder="Email Address"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div className="my-5">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Plase insert a password",
                    })}
                    placeholder="Password"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <button
                    className="bg-black px-32 py-3 text-white rounded-md uppercase"
                    type="submit"
                  >
                    Signup
                  </button>
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
