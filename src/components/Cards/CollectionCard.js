import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'
import { HiHeart } from "react-icons/hi";
import { FcComments } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
export default function CollectionCard({ collection, index, user }) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${collection?.html}</body>
              <style>${collection?.css}</style>
              <script>${collection?.js}</script>
            </html>
          `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [collection?.html, collection?.css, collection?.js]);


  return (
    <div
      className="relative rounded-lg overflow-hidden glassmorphism p-1 ">
      <Link to={`/code/${collection?._id}`}>
        <div className={`flex flex-col justify-center items-center`}>
          <div className={`${styles.flexCenter}`}>
            <div className={` ${styles.heading3}`}>{collection?.projectName ? collection.projectName : "Untitle"}</div>
          </div>
        </div>
        <div className="flex justify-center px-4">
          <div
            className={`bg-gradient-to-r from-accent to-secondary w-full `}
            style={{ height: "2px" }}
          />
        </div>

        <div className="p-4 mb-2">
          <iframe
            className="bg-white"
            srcDoc={srcDoc}
            title={collection?.projectName}
            sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
            frameBorder="0"
            loading="lazy"
            scrolling="no"
            width="100%"
            height="100%"
          />
        </div>
        <div className={`flex justify-start items-center ml-4 gap-4 mb-5`}>
          <img
            className="w-12 h-12 rounded-full p-[0.1rem] ring-2 ring-offset-1 ring-offset-secondary"
            src={user?.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt={user?.name}
          />
          <div className={`${styles.heading4}`}>{user?.name ? user.name : "User"}</div>
        </div>
        <div className='flex items-center font-poppins absolute bottom-0 right-0 w-full'>
          {/* <div className='flex items-center ml-20'><HiHeart className='text-red-700 text-3xl cursor-pointer'></HiHeart><p className='text-white'>35</p></div>
        <div className='flex items-center ml-20'><FcComments></FcComments><p className='text-white'>35</p></div>
        <div className='flex items-center ml-20'><IoIosShareAlt className='text-cyan-200 rounded-sm'></IoIosShareAlt><p className='text-white'>35</p></div> */}
        </div>
      </Link>
    </div>
  )
}
