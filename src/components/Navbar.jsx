import './Navbar.scss';
import { motion } from 'framer-motion';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from 'react';
const Navbar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return(
        <>
            <nav className='page__navbar'>
                <div className='page__navbar-lang'>
                    EN
                </div>
                <ul className="page__navbar-list">
                    <li className="page__navbar-list__item">HOME</li>
                    <li className="page__navbar-list__item">ABOUT</li>
                    <li className="page__navbar-list__item">SKILLS</li>
                    <li className="page__navbar-list__item">CONTACT</li>
                </ul>
                <div className="page__navbar-icon" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <MdOutlineMenu/>
                </div>
            </nav>
            <motion.aside className="page__sidebar" animate={{width: isOpenSidebar ? '17.5rem' : '0vw'}}>
                <div className="page__sidebar-icon" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <MdOutlineClose/>
                </div>
                <ul className="page__sidebar-list">
                    <div className="page__sidebar-list__item">HOME</div>
                    <div className="page__sidebar-list__item">ABOUT</div>
                    <div className="page__sidebar-list__item">SKILLS</div>
                    <div className="page__sidebar-list__item">CONTACT</div>
                </ul>
            </motion.aside>
        </>
    );
}

export default Navbar;