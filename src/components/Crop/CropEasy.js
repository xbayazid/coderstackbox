import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './Utils/cropImage';

const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation
      );
      setPhotoURL(url);
      setFile(file);
      setOpenCrop(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='bg-slate-500 relative w-auto min-w-[500px] h-[400px]'>
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={1}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </div>
      <div className='sm:flex sm:flex-col mx-3 my-2' sx={{ flexDirection: 'column', mx: 3, my: 2 }}>
        <div className="sm:w-full sm:mb-1" sx={{ width: '100%', mb: 1 }}>
          <div>
            <input type="range"></input> Zoom: {zoomPercent(zoom)}
          </div>
          {/* <div>
            <Typography>Rotation: {rotation + '°'}</Typography>
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={360}
              value={rotation}
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </div> */}
        </div>
        <div className='sm:flex sm:flex-wrap sm:gap-2'>
          <button
            onClick={() => setOpenCrop(false)}
          >
            Cancel
          </button>
          <button
            onClick={cropImage}
          >
            Crop
          </button>
        </div>
      </div>
    </>
  );
};

export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};
