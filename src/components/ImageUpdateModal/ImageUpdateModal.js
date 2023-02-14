import React from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';
import CropEasy from '../Crop/CropEasy';
import ProfileModal from '../Crop/ProfileModal/ProfileModal';

const ImageUpdateModal = ({isVisible, onClose}) => {

    if ( !isVisible) {
        return null;
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
         justify-center items-center '>
            <div className='flex items-end flex-col'>
                <FaTimes onClick={ () => onClose()} className='text-white text-2xl' />
                <div className='md:w-[600px] w-[90vw] h-[80vh] md:h-[500px] bg-slate-600 p-2 rounded-md'>
                    <h2>Modal</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default ImageUpdateModal;