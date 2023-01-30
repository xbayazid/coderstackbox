import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { Form } from 'react-router-dom';

const UserModal = ({setIsOpen}) => {
    return (
        <div className="fixed inset-0 overflow-hidden">
          <div className="relative w-full h-full top-1/4">
            <div
              className="absolute bg-gray-900 opacity-0"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="max-w-sm mx-auto my-10 bg-white rounded-lg p-10">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium">Update Profile</h2>
                <button
                  className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <FaRegWindowClose className=''></FaRegWindowClose>
                </button>
              </div>

              <div className="mt-5">
                <Form>
                    <input type="text" placeholder='Your Full Name' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Phone Number' />
                    <button type='submit' onClick={() => setIsOpen(false)}>Update</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default UserModal;