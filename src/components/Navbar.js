import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';
export default function Navbar(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    console.log("is",isLoggedIn);
    console.log("o",setIsLoggedIn);
    
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt='log' width={160} height={32} loading='lazy'></img>
            </Link>
            <nav >
                <ul className='text-richblack-100 flex mr-5 gap-x-6'>
                    <li>
                        <Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contacts'>contacts</Link></li>

                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {/* dashboard */}
                { !isLoggedIn &&
                    <Link to='/login'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-border-richblack-700'>Log in</button> </Link>
                }
                { !isLoggedIn &&
                    <Link to='/signup'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-border-richblack-700'>Sign up</button> </Link>
                }
               
                {isLoggedIn &&
                    <Link to='/'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-border-richblack-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out")
                    }}>Log Out</button> </Link>
                }
                {isLoggedIn &&
                    <Link to='/dashboard'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-border-richblack-700'>Dahboard</button> </Link>
                }

            </div>
        </div>
    )
}
