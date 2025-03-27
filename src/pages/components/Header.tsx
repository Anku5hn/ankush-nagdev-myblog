import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'; //Menu icon from Material UI for mobile
import AccountCircleIcon from '@mui/icons-material/AccountCircle';//MUI Account icon
import Button from '@mui/material/Button'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from 'next/link';
const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);//state for mobile menu
    const [profileMenu, setProfileMenu] = useState<boolean>(false);//state for mobile profile menu
    return (
        <>
            <nav className="bg-white border-gray-200 font-serif">
                {/*Mobile*/}
                <div className="flex justify-between items-end h-[10vh] fixed w-[100vw] top-0 bg-white pb-2 md:hidden lg:hidden">
                    <button onClick={() => { setShowMenu(true) }}> <MenuIcon fontSize="large" color="disabled" /></button>
                    <Link href="/"><h1 className="text-2xl text-[#1976D2] font-semibold italic">MyBlog</h1></Link>
                    <button onClick={() => { setProfileMenu(true) }}><AccountCircleIcon fontSize="large" color="disabled" /></button>
                </div>
                {
                    showMenu &&
                    <div className="fixed top-0 left-0 bg-white h-[100vh] w-[40vw] md:hidden lg:hidden">
                        <ul className="mt-10 text-lg mx-2">
                            <li>Articles</li>
                            <li className="mt-1">Radio</li>
                            <li className="mt-1">Podcasts</li>
                            <li className="mt-1">Write For Us</li>
                            <li className="mt-1">Talk To Us</li>
                            <li className="mt-1"><button onClick={() => { setShowMenu(false) }}>Close</button></li>
                        </ul>
                    </div>
                }
                {
                    profileMenu &&
                    <div className="fixed top-0 right-0 bg-white h-[100vh] w-[40vw] md:hidden lg:hidden">
                        <ul className="mt-10 text-lg mx-2">
                            <li><Button variant="outlined">Sign Up</Button></li>
                            <li className="mt-1"><Button variant="contained">Log In</Button></li>
                            <li className="mt-1"><Button variant="text" color="error" onClick={() => { setProfileMenu(false) }}>Close</Button></li>
                        </ul>
                    </div>
                }
                {/*Desktop*/}
                <div className="w-[100vw] h-[12vh] z-1 hidden md:flex lg:flex justify-center items-center fixed top-0 bg-white">
                    <div className="w-[90vw] flex justify-between">
                        <div className="flex gap-5 justify-center items-end">
                            <Link href="/"> <h1 className="text-3xl text-[#1976D2] italic font-semibold">MyBlog.</h1></Link>
                            <ul className="flex gap-5 cursor-pointer text-gray-500">
                                <li className="hover:border-[#1976D2] border-b-3 border-white">Articles</li>
                                <li className="hover:border-[#1976D2] border-b-3 border-white">Radio</li>
                                <li className="hover:border-[#1976D2] border-b-3 border-white">Podcasts</li>
                                <li className="hover:border-[#1976D2] border-b-3 border-white">Write For Us</li>
                                <li className="hover:border-[#1976D2] border-b-3 border-white">Talk To Us</li>

                            </ul>
                        </div>
                        <div className="flex gap-1">
                            <div className="h-[10px]">
                                <Button variant="contained"><SearchRoundedIcon /></Button>
                            </div>
                            <Button variant="outlined">Menu</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;