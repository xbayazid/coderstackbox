import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { layout } from "../../style";

const SingleCategory = () => {
  const projects = useLoaderData();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://coderstackbox-server.vercel.app/projectCategories"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className={`grid grid-cols-2 gap-2 ${layout.sectionCol}`}>
      <div className="">
        <h2 className="text-lg text-emerald-400  my-4 others font-semibold">
          Projects Category
        </h2>
        <div className="">
          {categories?.map((category) => (
            <Link to={`/category/${category._id}`}>
              <p className="text-white text-lg mt-2">{category.categoryName}</p>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  ${layout.sectionCol}`}
      >
        <h2 className="text-emerald-200 text-center text-3xl font-bold">Single Category</h2>;
        {projects.map((p) => (
          <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
            <img
              src={p.projectImage}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <p className="text-xl categories-title">
                Project Type:{" "}
                <span className="text-secondary">{p.categoryName}</span>
              </p>
              <h2 className="text-xl font-semibold tracking-wide title">
                Title: <span className="others">{p.projectTitle}</span>
              </h2>
              <h2 className="text-xl font-semibold tracking-wide title">
                Project Owner: <span className="others">{p.OnnerName}</span>
              </h2>
            </div>
            <p className="text-gray-100 project-description">{p.projectDescription.slice(0, 80)}</p>
          </div>
        ))}
      </div>
      <div className="grid justify-items-end">
        <Link to="/catagories">
          {" "}
          <Button>back to all projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
