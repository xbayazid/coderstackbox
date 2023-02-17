// import React from 'react';
// import { useQuery } from "@tanstack/react-query";
// import { Link } from 'react-router-dom';
// import ProjectRow from './ProjectRow';

// const Projects = () => {

//     const { data: projects = [], refetch, isLoading } = useQuery({
//         queryKey: ["projects"],
//         queryFn: async () => {
//             const res = await fetch(
//                 "https://coderstackbox-server.vercel.app/projects"
//             );
//             const data = await res.json();
//             return data;
//         },
//     });


//     return (
//         <div>
//             <header>
//                 <h2 className='text-3xl mb-5 others'>Projects</h2>
//             </header>
//             <main>    
//                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                     <div className="flex items-center justify-center py-4 bg-white dark:bg-gray-900">
//                         <label htmlFor="table-search" className="sr-only">Search</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//                             </div>
//                             <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />

//                         </div>
//                     </div>
//                     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3">
//                                     <span className="sr-only">Image</span>
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Project Title
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Onner
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Date
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     View
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     Delete
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 projects.map( (project) => <ProjectRow
//                                     key={project._id}
//                                     project={project}
//                                 ></ProjectRow>)
//                             }
//                         </tbody>
//                     </table>
//                 </div>

//             </main>
//         </div>
//     );
// };

// export default Projects;