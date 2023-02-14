import React from 'react';
import { FaCloudUploadAlt, FaImage, FaTimes, } from 'react-icons/fa';
import CropEasy from '../Crop/CropEasy';
import ProfileModal from '../Crop/ProfileModal/ProfileModal';
import Button from '../Buttons/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ImageUpdateModal = ({isVisible, onClose}) => {

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
        const imageHostKey = import.meta.env.VITE_imgbb_key;
    
        // setSignUpError("");
            const image = data.photo[0];
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
                  const userInfo = {
                    photoURL: imageData.data.url,
                  };
    
                  updatePhoto(userInfo)
                    .then(() => {
                        updatePhoto(imageData.data.url);
                    })
                    .catch((error) => console.log(error));
                }
              });
          }

          const updatePhoto = (userImage) => {
            const user = {
            //   role,
            //   userName,
            //   email,
              userImage,
            };
        
            fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("save user", data);
                // setCreatedUserEmail(email);
                toast.success("Update Successfully");
              });
          };
      
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
         justify-center items-center '>
            <div className='flex items-end flex-col'>
                <FaTimes onClick={ () => onClose()} className='text-white text-2xl' />
                <form onSubmit={handleSubmit(handelUploadImage)} className='md:w-[600px] w-[90vw] p-10 h-[80vh] md:h-[500px] flex flex-col justify-between items-center bg-slate-600 rounded-md'>
                    <h2 className='text-2xl text-center'>Uplod your photo</h2>
                    <div className='flex flex-col w-36 h-36 rounded-full  border-green-600 justify-center items-center'>
                        <label htmlFor='userImg' className='my-10 text-center text-2xl'>
                            {/* <FaUserAlt className=''></FaUserAlt> */}
                            <FaCloudUploadAlt className='text-9xl'></FaCloudUploadAlt>
                        </label>
                    </div>
                    <input
                        {...register("photo", {
                        required: "Plase insert a image",
                        })}
                        type="file"
                        className='hidden' id='userImg'
                    />

                    {/* <input                          
                        {...register("photo", {
                            required: true,
                            })}
                            type="file"
                            className="file-input file-input-bordered"
                        /> */}

                    <Button className='flex gap-5 justify-center items-center'>Save</Button>
                    
                </form>
            </div>
        </div>
    );
};

export default ImageUpdateModal;