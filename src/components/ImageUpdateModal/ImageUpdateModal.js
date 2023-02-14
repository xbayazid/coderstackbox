import React from 'react';
import { FaCloudUploadAlt, FaTimes, } from 'react-icons/fa';
import Button from '../Buttons/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const ImageUpdateModal = ({isVisible, user, refetch, onClose}) => {
    const { name, email, _id, about, phone } = user;

    const [uploadImg, setUploadImg] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    if ( !isVisible) {
        return null;
    }

    const handelUploadImage = (data) => {
        console.log(data);
        // if (data){
        //     onClose()
        // }
        const imageHostKey = '0f5072fcc1857428de9b90d3cdedf5fc&fbclid=IwAR0tRNJzo6nm_4SQXkD7DKPD6bhGmadCoAwMEAwI0KMqXLxJl2sRR1D82H8';
        // const imageHostKey = process.env.REACT_APP_imgbb_key;
            // console.log(imageHostKey);
    
            const image = data.photo[0];
            // console.log(image?.name);
            setUploadImg(image?.name)
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
                console.log("Update image", data);
                toast.success("Update Successfully");
              });
          };
      
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
         justify-center items-center '>
            <div className='flex items-end flex-col'>
                <FaTimes onClick={ () => onClose()} className='text-white text-2xl' />
                <form onSubmit={handleSubmit(handelUploadImage)} className='md:w-[600px] w-[90vw] md:p-10 p-5 h-[80vh] md:h-[500px] flex flex-col justify-between items-center bg-slate-600 rounded-md'>
                    <h2 className='text-2xl text-center'>Uplod your photo</h2>
                    <div className='grid md:gap-20 gap-5 md:grid-cols-2 md:grid-rows grid-cols-1 rounded-full  border-green-600 justify-between items-center'>
                        <div>
                            <label htmlFor='userImg' className='text-center'>
                                {/* <FaUserAlt className=''></FaUserAlt> */}
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
                    
                    <div>
                        <button className='flex gap-5 justify-center items-center'>Applay</button>
                    </div>
                    <Button className='flex gap-5 justify-center items-center'>Save</Button>
                    
                </form>
            </div>
        </div>
    );
};

export default ImageUpdateModal;