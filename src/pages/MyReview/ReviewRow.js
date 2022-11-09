import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, name, email, reviewMassage, serviceId, serviceImage } = review;
    const { user } = useContext(AuthContext);

    return (
        <tr>
            <th>
                <label>
                    <Link><HiOutlineTrash onClick={() => handleDelete(_id)} className='text-2xl text-pink-800'></HiOutlineTrash></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{serviceId}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user?.displayName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>

            </td>
            <td>{reviewMassage}</td>
            <th>
                <button className="btn btn-ghost btn-xs"><AiFillEdit className='text-2xl text-rose-800'></AiFillEdit></button>
            </th>
        </tr>
    );
};

export default ReviewRow;