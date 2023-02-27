import React from 'react';
import { FaCloudUploadAlt, FaRegWindowClose, FaTimes, } from 'react-icons/fa';
import Button from '../Buttons/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const ImageUpdateModal = ({isVisible, user, refetch, onClose}) => {
    const { _id, photoURL} = user;

    const [uploadImg, setUploadImg] = useState(photoURL);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    if ( !isVisible) {
        return null;
    }

    const handelUploadImage = (data) => {
        // console.log(data);
        // if (data){
        //     onClose()
        // }
        const imageHostKey = '0f5072fcc1857428de9b90d3cdedf5fc&fbclid=IwAR0tRNJzo6nm_4SQXkD7DKPD6bhGmadCoAwMEAwI0KMqXLxJl2sRR1D82H8';
        // const imageHostKey = process.env.REACT_APP_imgbb_key;
            // console.log(imageHostKey);
    
            const image = data.photo[0];
            // console.log(image?.name);
            setUploadImg(image?.name);
            const formData = new FormData();
            formData.append("image", image);
    
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
            fetch(url, {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((imageData) => {
                if (imageData.status) {
                    // console.log(imageData.data.url);
                    setUploadImg(imageData.data.url);

                    const userInfo = {
                    photoURL: imageData.data.url,
                    };
    
                  updatePhoto(userInfo)
                }
              });
          }

          const updatePhoto = (userImage) => {
        
            fetch(`http://localhost:5000/u/${_id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userImage),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log("Update image", data);
                refetch();
                toast.success("Update Successfully");
                setTimeout( () => {
                    onClose();
                }, 3500)
                
              });
          };
      
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
        justify-center items-center z-50'>
            <div className='mb-2 md:w-[600px] w-[90vw] md:p-8 p-5 h-[80vh] md:h-[500px]  bg-slate-600 rounded-md'>
                <div className="flex justify-end items-end flex-col ">
                    <button
                      className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer"
                      onClick={ () => onClose()}
                    >
                      <FaRegWindowClose className="text-white"></FaRegWindowClose>
                    </button>
                </div>
                <h2 className='mb-20 mt-5 text-2xl text-center'>Uplod your photo</h2>
                {/* <FaTimes onClick={ () => onClose()} className='text-white text-2xl' /> */}
                <form onSubmit={handleSubmit(handelUploadImage)} className='flex flex-col justify-between items-center'>
                    <div className='grid md:gap-20 gap-5 mx-auto md:grid-cols-2 md:grid-rows grid-cols-1 rounded-full  border-green-600 justify-between items-center'>
                        <div>
                            <label htmlFor='userImg' className='text-center'>
                                <FaCloudUploadAlt className='text-9xl'></FaCloudUploadAlt>
                            </label>
                        </div>
                        
                        <div className='w-44 h-44 overflow-hidden rounded-full border-2 border-r-white bg-slate-300'>
                            <img className='w-full h-full' src={`${uploadImg}`} alt='' />
                        </div>
                    </div>
                    <input
                        {...register("photo", {
                        required: "Plase insert a image",
                        })}
                        type="file"
                        className='hidden' id='userImg'
                    />
                    
                    <button className='mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>Save</button>
                    
                </form>
            </div>
        </div>
    );
};

export default ImageUpdateModal;