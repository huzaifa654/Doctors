import React, { useState } from 'react'
import "./NavBar.css"
import { dropdown_icon, logo, profile_pic } from '../../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SetIsLogin } from '../../redux/reducer/AuthReducer';
import SignOutModal from '../SignOutModal/SignOutModal';

export default function NavBar() {
    const isLogin = useSelector((state) => state.auth.IsLogin);
    console.log("isLogin-----------------", isLogin);
    const [dropDown, setDropDown] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('HOME')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    const DropDown = () => {
        return (
            <div className='dropDwon'>
                <p className='text' onClick={() => { setDropDown(false) }}>My Profile</p>
                <p className='text' onClick={() => { setDropDown(false) }}>My Appointments</p>
                {/* <p className='text' onClick={() => { navigate('/login'); dispatch(SetIsLogin(false)); setDropDown(false); }}>Logout</p> */}
                <p className='text' onClick={() => { setDropDown(false); handleOpenModal() }}>Logout</p>

            </div>
        )
    }

    return (
        <div className='nav'>
            {isModalOpen && <SignOutModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogout={() => { dispatch(SetIsLogin(false)); navigate('/login'); setIsModalOpen(false); }} />}

            <img src={logo} alt="" />
            <nav>
                <ul className='content'>
                    <li className='elements' style={{ borderBottomWidth: activeTab == "HOME" && 4, borderColor: "#5F6FFF" }} onClick={() => { setActiveTab('HOME'); navigate('/') }}>HOME </li>
                    <li className='elements' style={{ borderBottomWidth: activeTab == "All Doctors" && 4, borderColor: "#5F6FFF" }} onClick={() => { setActiveTab('All Doctors'); navigate('/docters') }}>All Doctors</li>
                    <li className='elements' style={{ borderBottomWidth: activeTab == "ABOUT" && 4, borderColor: "#5F6FFF" }} onClick={() => { setActiveTab("ABOUT"); navigate('/about') }}>ABOUT</li>
                    <li className='elements' style={{ borderBottomWidth: activeTab == "CONTACT" && 4, borderColor: "#5F6FFF" }} onClick={() => { setActiveTab("CONTACT"); navigate('/contact') }}>CONTACT </li>
                </ul>
            </nav>

            <div >
                {isLogin ?
                    <div >
                        <div className="userContainer" onClick={() => setDropDown(!dropDown)}>
                            <img className='profile' src={profile_pic} alt="" />
                            <img className='drop' src={dropdown_icon} alt="" />
                        </div>
                        <div className="dropChild">
                            {dropDown && <DropDown />}
                        </div>

                    </div>


                    :
                    <button className='btn' onClick={() => navigate('/login')}>Create Account</button>

                }
            </div>
        </div>
    )
}

