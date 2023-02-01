import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { layout } from "../../style";
import Category from "./Category";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
const Catagories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://coderstackbox-server.vercel.app/projectCategories"
      );
      const data = await res.json();
      return data;
    },
  });

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
        </div>
        <div className="col-span-3 m-4">
          <h2 className="hidden md:visible lg:block text-left text-3xl font-bold text-emerald-200 mt-2">
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
