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

    categoryId,
  } = project;

  return (
    <div>
      <div className=" p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
        <img
          src={projectImage}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <p className="text-xl categories-title">
            Project Type:{" "}
            <span className="text-orange-300">{categoryName}</span>
          </p>
          <h2 className="text-xl tracking-wide">
            <span className="title"> Title: </span>
            <span className="font-semibold others">{projectTitle}</span>
          </h2>
          <h2 className="text-xltracking-wide">
            <span className="title">Project Owner: </span>{" "}
            <span className=" font-semibold others">{OnnerName}</span>
          </h2>
        </div>
        <p className="text-gray-100 project-description">
          {projectDescription.slice(0, 80)}
        </p>
      </div>
    </div>
  );
};

export default Category;
