/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUser } from "../../api/user";
import DBHeader from "../../components/DBHeader";
import Sidebar from "../../components/Sidebar";
import { AuthContext } from "../../context/AuthProvider";
import { addUserCollections } from "../../features/collectionSlice/userCollectionSlice";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [usr, setUsr] = useState({});
  const desktopSidebarRef = useRef(null);
  const dispatch = useDispatch();
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

  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setLoading(true);
    getUser(user).then((data) => {
      setUsr(data?.result[0]);
      dispatch(addUserCollections(data?.result[0]))
      setLoading(false);
    });
  };

  return (
    <AnimatePresence>
      <body class="bg-gray-900">
        <Sidebar
          isOpen={isOpen}
          desktopSidebarRef={desktopSidebarRef}
          setIsOpen={setIsOpen}
          user={usr}
        />

        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <DBHeader setIsOpen={setIsOpen} />

          <div className="px-6 pt-6 2xl:container">
            <div className="min-h-screen w-full border-gray-600">
              <Outlet />
            </div>
          </div>
        </div>
      </body>
    </AnimatePresence>
  );
};

export default Dashboard;
