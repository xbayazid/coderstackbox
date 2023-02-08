import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { layout } from "../../style";
import Category from "./Category";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import { categories } from "../../constants";
const Catagories = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(
        "https://coderstackbox-server.vercel.app/projects"
      );
      const data = await res.json();
      return data;
    },
  });


  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - Categories</title>
      </Helmet>
      <div className={`grid grid-cols-4 gap-4${layout.sectionCol}`}>
        <div className="">
          <h2 className="text-lg text-emerald-400 my-4 others font-semibold">
            Projects Category
          </h2>
          <div className="">
            {categories?.map((category) => (
              <Link to={`/category/${category._id}`}>
                <p className="text-white text-lg mt-2">
                  {category.categoryName}
                </p>
              </Link>
            ))}
          </div>
          <fieldset className="w-full text-gray-100  lg:flex mt-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                name="Search"
                placeholder=" Start search..."
                className="w-full py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400"
              />
            </div>
          </fieldset>
        </div>
        <div className="col-span-3 m-4">
          <h2 className="hidden md:visible lg:block text-left text-3xl font-bold text-secondary mt-2">
            Look up our awesome projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects?.map((project) => (
              <Category key={project._id} project={project}></Category>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
