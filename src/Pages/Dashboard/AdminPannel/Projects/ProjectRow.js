import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectRow = ({project, user, handleDelete}) => {

    const { _id, projectName, date  } = project;
    const { name, email, photoURL } = user;
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
              <html>
                <body>${project?.html}</body>
                <style>${project?.css}</style>
                <script>${project?.js}</script>
              </html>
            `);
      }, 250);
  
      return () => clearTimeout(timeout);
    }, [project?.html, project?.css, project?.js]);


    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="">
        <iframe
            className="bg-white/50"
            srcDoc={srcDoc}
            title={projectName}
            sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
            frameBorder="0"
            loading="lazy"
            scrolling="no"
            width="100%"
            height="100%"
          />
        </td>
        <td className="pl-3">
            {projectName}
        </td>
        <td className="pl-3">
            <div className="text-base font-semibold">{name}</div>
            <div className="font-normal text-gray-500">{}</div>
        </td>
        <td className="pl-3">
            {date}
        </td>
        <td className="px-6 py-4">
        <Link to={`/adminDashboard/edit-user-project/${_id}`} className="font-medium text-blue-500 ">Edit</Link>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
            <FaTrash onClick={()=>handleDelete(_id)} className='text-red-400 hover:text-red-500 text-2xl cursor-pointer' />
        </td>
    </tr>
    );
};

export default ProjectRow;