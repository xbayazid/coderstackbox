import { GoogleAuthProvider } from "firebase/auth";
import { useState, useCallback, useMemo, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { setAuthToken } from "../../api/auth";
import { logo } from "../../assets";
import { AuthContext } from "../../context/AuthProvider";
import { TitleText } from "../CustomText/CustomText";
import LoadingDots from "../LoadingDots/LoadingDots";
import Logo from "../Logo";
import Modal from "./ProjectSave";

const LogInModal = ({ showLogInModal, setShowLogInModal }) => {
  const [error, setError] = useState("");
  const { providerLogin, setLoading, loading } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    setLoading(true);
    providerLogin(googleAuthProvider)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          console.log(result);
          setAuthToken(userInfo);
          setShowLogInModal(false);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Modal showModal={showLogInModal} setShowModal={setShowLogInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Logo className="text-primary" />
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="font-poppins font-semibold text-lg tracking-[0.2em] text-gray-500">
            {`🍕Eat > 😴Sleep > 👨🏻‍💻 Code > 🔁 Repeat`}
          </p>
        </div>
        {!error ? (
          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <button
              disabled={loading}
              className={`${
                loading
                  ? "cursor-not-allowed border-gray-200 bg-gray-100"
                  : "border border-gray-200 bg-white text-black hover:bg-gray-50"
              } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
              onClick={handleGoogleSignIn}
            >
              {loading ? (
                <LoadingDots color="#808080" />
              ) : (
                <>
                  <p className="flex items-center gap-4">
                    <FaGoogle />
                    {"Sign In"}
                  </p>
                </>
              )}
            </button>
          </div>
        ) : (
          <TitleText
            title={
              <>
                There is an Error. <br /> Please Try again.
              </>
            }
          />
        )}
      </div>
    </Modal>
  );
};

export function useLogInModal() {
  const [showLogInModal, setShowLogInModal] = useState(false);

  const LogInModalCallback = useCallback(() => {
    return (
      <LogInModal
        showLogInModal={showLogInModal}
        setShowLogInModal={setShowLogInModal}
      />
    );
  }, [showLogInModal, setShowLogInModal]);

  return useMemo(
    () => ({
      setShowLogInModal,
      LogInModal: LogInModalCallback,
    }),
    [setShowLogInModal, LogInModalCallback]
  );
}
