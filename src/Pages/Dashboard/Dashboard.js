/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import DBHeader from "../../components/DBHeader";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
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

  return (
    <AnimatePresence>
      <body class="bg-gray-100 dark:bg-gray-900">
        <Sidebar isOpen={isOpen} desktopSidebarRef={desktopSidebarRef} setIsOpen={setIsOpen} />
        
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
