import React from "react";

const TestimonialCard = ({ slide }) => {
  return (
    <div className="bg-transparent  p-2 h-56 ">
      <div className="text-white text-center mt-5  flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <img
            className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
            src={slide.img}
            alt=""
          />
          <h2 className="name font-semibold">{slide.name}</h2>
        </div>
        <div className="text-center py-5 w-1/2">
          <p className="font-mono">{slide.info}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
