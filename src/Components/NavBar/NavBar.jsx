// import React from 'react'
// import "./NavBar.css"
// import { logo } from '../../assets/assets_frontend/assets'
// import { NavLink } from 'react-router-dom'
// export default function NavBar() {
//     return (
//         <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-40' >
//             <img className='w-44 cursor-pointer' src={logo} alt="" />
//             <ul className='hidden md:flex items-start gap-5 font-medium'>
//                 <NavLink>
//                     <li className='py-4'>HOME</li>
//                     <hr className='border-none outline-none h-0.5 bg-prmary m-auto' />
//                 </NavLink>
//                 <NavLink>
//                     <li className='py-4'>All Doctors</li>
//                     <hr className='border-none outline-none h-0.5 bg-prmary m-auto' />
//                 </NavLink>
//                 <NavLink>
//                     <li className='py-4'>ABOUT</li>
//                     <hr className='border-none outline-none h-0.5 bg-prmary m-auto' />
//                 </NavLink>
//                 <NavLink>
//                     <li className='py-4'>Contact</li>
//                     <hr className='border-none outline-none h-0.5 bg-prmary m-auto' />
//                 </NavLink>
//             </ul>
//             <div><button>Create Account</button></div>
//         </div>
//     )
// }

import React from 'react'
import "./NavBar.css"
import { logo } from '../../assets/assets_frontend/assets'

export default function NavBar() {
    return (
        <div className='nav'>
            <img src={logo} alt="" />
            <nav>
                <ul className='content'>
                    <li className='elements'>HOME </li>
                    <li className='elements'>All Doctors  </li>
                    <li className='elements'>ABOUT  </li>
                    <li className='elements'>CONTACT </li>
                </ul>
            </nav>
            <div>
                <button className='btn'>Create Account</button>
            </div>
        </div>
    )
}

