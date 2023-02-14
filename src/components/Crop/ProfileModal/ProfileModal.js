//   import { useState } from 'react';
// //   import { useAuth } from '../../context/AuthContext';
// //   import SubmitButton from './inputs/SubmitButton';
// //   import { v4 as uuidv4 } from 'uuid';
// //   import uploadFile from '../../firebase/uploadFile';
// //   import { updateProfileModal } from 'firebase/auth';
// //   import deleteFile from '../../firebase/deleteFile';
// //   import updateUserRecords from '../../firebase/updateUserRecords';
// //   import { Crop } from '@mui/icons-material';
//   import { useEffect } from 'react';
// import CropEasy from '../CropEasy';
  
//   const ProfileModal = () => {
//     const [file, setFile] = useState(null);
//     // const [photoURL, setPhotoURL] = useState(currentUser?.photoURL);
//     const [openCrop, setOpenCrop] = useState(false);
  
//     const handleChange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setFile(file);
//         // setPhotoURL(URL.createObjectURL(file));
//         setOpenCrop(true);
//       }
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
  
//       let userObj = { displayName: name };
//       let imagesObj = { uName: name };
//       try {
//         if (file) {
//           const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
//           const url = await uploadFile(
//             file,
//             `ProfileModal/${currentUser?.uid}/${imageName}`
//           );
  
  
//           userObj = { ...userObj, photoURL: url };
//           imagesObj = { ...imagesObj, uPhoto: url };
//         }
  
//         await updateProfileModal(currentUser, userObj);
//         await updateUserRecords('gallery', currentUser?.uid, imagesObj);
//       } catch (error) {
//         };
//         console.log(error);
//       }
  
//     };
  
//     useEffect(() => {
//       if (openCrop) {
//         // setModal({ ...modal, title: 'Crop ProfileModal Photo' });
//       } else {
//         // setModal({ ...modal, title: 'Update ProfileModal' });
//       }
//     }, [openCrop]);
  
//     return !openCrop ? (
//       // <form>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h4>
//             You can update your ProfileModal by updating these fields:
//           </h4>
//           <div className='flex items-center'>
//             <label htmlFor="ProfileModalPhoto">
//               <input
//                 accept="image/*"
//                 id="ProfileModalPhoto"
//                 type="file"
//                 style={{ display: 'none' }}
//                 onChange={handleChange}
//               />
//             </label>
//             {file && (
//               <button
//                 onClick={() => setOpenCrop(true)}
//               >
//               </button>
//             )}
//           </div>
//         </div>
//         <div>
//           {/* <SubmitButton /> */}
//         </div>
//       </form>
//     ) : (
//       // <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
//       <CropEasy {...{ setOpenCrop, setFile }} />
//     );
//   };
  
//   export default ProfileModal;
  