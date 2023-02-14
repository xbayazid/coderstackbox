import React from 'react';
import { FaCloudUploadAlt, FaImage, FaTimes, FaUpload, FaUserAlt } from 'react-icons/fa';
import CropEasy from '../Crop/CropEasy';
import ProfileModal from '../Crop/ProfileModal/ProfileModal';
import Button from '../Buttons/Button';

const ImageUpdateModal = ({isVisible, onClose}) => {

    if ( !isVisible) {
        return null;
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
         justify-center items-center '>
            <div className='flex items-end flex-col'>
                <FaTimes onClick={ () => onClose()} className='text-white text-2xl' />
                <div className='md:w-[600px] w-[90vw] p-10 h-[80vh] md:h-[500px] flex flex-col justify-between items-center bg-slate-600 rounded-md'>
                    <h2 className='text-2xl text-center'>Uplod your photo</h2>
                    <div className='flex flex-col w-36 h-36 rounded-full  border-green-600 justify-center items-center'>
                        <label htmlFor='userImg' className='my-10 text-center text-2xl'>
                            {/* <FaUserAlt className=''></FaUserAlt> */}
                            <FaCloudUploadAlt className='text-9xl'></FaCloudUploadAlt>
                        </label>
                    </div>
                    <input className='hidden' id='userImg' type='file' />

                    <Button className='flex bottom-0 gap-5 justify-center items-center'>Save</Button>
                    
                </div>
            </div>
        </div>
    );
};

export default ImageUpdateModal;