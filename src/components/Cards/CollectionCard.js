import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion';
import { HiHeart } from "react-icons/hi";
export default function CollectionCard({props, index}) {
    const [srcDoc, setSrcDoc] = useState("");


    const url = `http://localhost:5000/user?id=${props.user}`;
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", props.user],
    queryFn: async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
          },
        });
        return res.data;
      } catch (error) {}
    },
  });

  


    useEffect(() => {
        const timeout = setTimeout(() => {
          setSrcDoc(`
            <html>
              <body>${props.html}</body>
              <style>${props.css}</style>
              <script>${props.js}</script>
            </html>
          `);
        }, 250);
    
        return () => clearTimeout(timeout);
      }, [props.html,props.css, props.js]);


  return (
    <div
    className="relative rounded-lg overflow-hidden glassmorphism p-1 ">
      <div className={`flex flex-col justify-center items-center`}>
        <div className={`${styles.flexCenter}`}>
          <div className={` ${styles.heading3}`}>{props?.projectName}</div>
        </div>
      </div>
      <div className="flex justify-center px-4">
        <div
          className={`bg-gradient-to-r from-accent to-secondary w-full `}
          style={{ height: "2px" }}
        />
      </div>

      <div className="p-4">
      <iframe
        className="bg-white"
          srcDoc={srcDoc}
          title={props.projectName}
          sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
          frameBorder="0"
          loading="lazy"
          scrolling="no"
          width="100%"
          height="100%"
        />
      </div>
      <div className={`flex justify-start items-center ml-4 my-2 gap-4`}>
        <img
          className="w-12 h-12 rounded-full p-[0.1rem] ring-2 ring-offset-1 ring-offset-secondary"
          src={user?.result[0]?.photoURL}
          alt={user?.result[0]?.name}
        />
        <div className='flex items-center font-poppins'>
          <div className={`${styles.heading4}`}>{user?.result[0]?.name}</div>
          <div className='flex items-center ml-20'><HiHeart className='text-red-700 text-3xl cursor-pointer'></HiHeart><p className='text-white'>35</p></div>
        </div>
      </div>
    </div>
  )
}
