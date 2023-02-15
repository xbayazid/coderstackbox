import React from "react";
import { useState } from "react";

const UserReviewCard = ({ review }) => {
  const { id, img, userName, description } = review;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-64 object-cover object-center"
      />
      <button
        className="absolute top-0 left-0 m-4"
        onClick={previousSlide}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
      <button
        className="absolute top-0 right-0 m-4"
        onClick={nextSlide}
        disabled={currentIndex === review.length - 1}
      >
        Next
      </button>
      <div className="absolute bottom-0 p-4 text-center w-full">
        <h2 className="text-xl font-bold">{userName}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default UserReviewCard;
