import React from 'react'
import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Preview from '../../Pages/CodeEditor/OnlineIDE/component/Preview'
import styles from '../../style'

const CompiledCollectionCard = ({props}) => {
  return (
    <div
    className="relative rounded-lg overflow-hidden glassmorphism p-1 ">
     <Link to={`/code/${props?._id}`}>
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
        {/* <Preview code={code} err={err}  /> */}
      <iframe
        className="bg-white"
        //   srcDoc={srcDoc}
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
          src={props.user?.photoURL}
          alt={props.user?.name}
        />
        <div className='flex items-center font-poppins'>
          <div className={`${styles.heading4}`}>{props?.user?.name}</div>
          <div className='flex items-center ml-20'><HiHeart className='text-red-700 text-3xl cursor-pointer'></HiHeart><p className='text-white'>35</p></div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default CompiledCollectionCard