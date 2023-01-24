import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { layout } from "../../style";

const SingleCategory = () => {
  const projects = useLoaderData();
  console.log(projects);
  return (
    <div>
      <h2 className="text-white text-5xl font-bold">Single Category</h2>;
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4${layout.sectionCol}`}
      >
        {projects.map((p) => (
          <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
            <img
              src={p.projectImage}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <p className="text-xl">
                Project Type:{" "}
                <span className="text-secondary">{p.categoryName}</span>
              </p>
              <h2 className="text-xl font-semibold tracking-wide">
                Title: <span className="">{p.projectTitle}</span>
              </h2>
              <h2 className="text-xl font-semibold tracking-wide">
                Project Owner: <span className="">{p.OnnerName}</span>
              </h2>
            </div>
            <p className="text-gray-100">{p.projectDescription.slice(0, 80)}</p>
          </div>
        ))}
      </div>
      <Link to="/catagories">
        {" "}
        <Button>go back</Button>
      </Link>
    </div>
  );
};

export default SingleCategory;
