import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar1 = ({  showstudents = true, showadmin = true }) => {
    const navigate = useNavigate();
    
    return (
        <div className="navbar bg-base-300 text-neutral-content">
            <div className="flex-1">
                <h2 className="text-xl text-black">SMIT</h2>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal flex space-x-4">
                    {showstudents && (
                        <li onClick={() => navigate('/people')} className="cursor-pointer">
                            <h2 className='text-black text-xl'>STUDENTS</h2>
                        </li>
                    )}
                    {showadmin && (
                        <li onClick={() => navigate('/ADMIN')} className="cursor-pointer">
                            <h2 className='text-black text-xl'>ADMIN</h2>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar1;
