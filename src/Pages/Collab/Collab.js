import { uuidv4 } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
// import uuid from 'react-uuid';
import Logo from '../../components/Logo';

const Collab = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');
     const navigate = useNavigate();

    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room')
    };

    const joinRoom = ()=>{
        if(!roomId || !username){
            toast.error('ROOM ID & Username is required');
            return;
        }
        //Redirect
        // useNavigate(`/editor/${roomId}`)
       navigate(`/editor/${roomId}`, {
        state: {
            username,
        },
       })
    };

    const handleInputEnter = (e) =>{
        console.log('event', e.code);
        if(e.code === "Enter"){
            joinRoom();
        }
    }
    return (
        <div className='w-[600px] mx-auto my-32  p-10 text-white'>
            <div className='my-8'>
                <Logo></Logo>
            </div>
            <div>
                <h4>Paste invitation ROOM ID</h4>
                <form onSubmit={joinRoom}>
                <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleInputEnter} name="text" className="my-3 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black" placeholder="ROOM ID" />
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} onKeyUp={handleInputEnter} name="text" className="my-3 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black" placeholder="YOUR NAME" />
                <Button type="submit" className="my-5 text-right">Join</Button>
                <h3>If you don't have an invite then create <Link className='text-red-500' onClick={createNewRoom}>New Room</Link></h3>
                </form>
            </div>
        </div>
    );
};

export default Collab;