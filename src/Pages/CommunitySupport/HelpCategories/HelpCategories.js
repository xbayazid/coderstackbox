import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HelpCategories = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("/HelpCategories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-6 w-full helpcategory px-10 ">
      <p className="text-center text-white my-6">Or choose an option </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((d) => (
          <div className=" w-80 bg-gradient-to-r from-accent to-secondary shadow-2xl border border-lime-500">
            <figure className="px-10 pt-10">
              <img
                src={d.picture}
                alt="Shoes"
                className="rounded-xl w-24 mx-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{d.title}</h2>
              <p>{d.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCategories;
