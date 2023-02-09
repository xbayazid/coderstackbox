import React from 'react';
import Testimonial from './Testimonial';

const reviews=[
    {
        name: "Michael Scott",
        description: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        star: "4.5"
    },
    {
        name: "Michael Scott",
        description: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        star: "4.5"
    },
    {
        name: "Michael Scott",
        description: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        star: "4.5"
    },
    {
        name: "Michael Scott",
        description: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
        star: "4.5"
    },
]
const Testimonials = () => {
    return (
        <div>
            {
                reviews.map(review => <Testimonial
                     key={review.id} 
                     review={review}
                     ></Testimonial>)
            }
        </div>
    );
};

export default Testimonials;