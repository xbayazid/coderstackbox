/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "../../api/user";
import DBHeader from "../../components/DBHeader";
import Sidebar from "../../components/Sidebar";
import { AuthContext } from "../../context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const desktopSidebarRef = useRef(null);
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const [usr, setUsr] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setLoading(true);
    getUser(user).then((data) => {
      setUsr(data[0]);
      console.log(data[0]);
      setLoading(false);
    });
  };

  return (
    <AnimatePresence>
      <body class="bg-gray-100 dark:bg-gray-900">
        <Sidebar
          isOpen={isOpen}
          desktopSidebarRef={desktopSidebarRef}
          setIsOpen={setIsOpen}
          user={usr}
        />

        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <DBHeader setIsOpen={setIsOpen} />

          <div class="px-6 pt-6 2xl:container">
            <div class="min-h-screen w-full border-gray-300 dark:border-gray-600">
              <Outlet />
            </div>
          </div>
        </div>
      </body>
    </AnimatePresence>
  );
};

export default Dashboard;
