import React from "react";

const Category = ({ project }) => {
  const {
    categoryName,
    OnnerName,
    onnerEmail,
    createdDate,
    projectDescription,
    projectTitle,
    projectImage,
  } = project;
  console.log(project);
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
        <img
          src={projectImage}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <p className="text-xl">
            Project Type: <span className="text-secondary">{categoryName}</span>
          </p>
          <h2 className="text-xl font-semibold tracking-wide">
            Title: <span className="">{projectTitle}</span>
          </h2>
          <h2 className="text-xl font-semibold tracking-wide">
            Project Owner: <span className="">{OnnerName}</span>
          </h2>
        </div>
        <p className="text-gray-100">{projectDescription.slice(0, 80)}</p>
      </div>
    </div>
  );
};

export default Category;