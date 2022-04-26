import './Navbar.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const defaultNavStatus = scrollYProgress.current < 0.01 ? 'top' : 'up';
    const [navbarStatus, setNavbarStatus] = useState(defaultNavStatus);

    useEffect(() => {
        return scrollYProgress.onChange(() => {
            const { current, prev } = scrollYProgress;
            if(current < 0.01) return setNavbarStatus('top')
            if(current < prev) setNavbarStatus('up')
            else setNavbarStatus('down')
        })
    });

    const supportedCss = '((-webkit-backdrop-filter: none) or (backdrop-filter: none))';
    const supportBlur = window.CSS.supports(supportedCss);

    const navbarAnimations = {
        'down':{
            y : '-4rem',
        },
        'up':{
            backdropFilter:'blur(15px)',
            backgroundColor: supportBlur ? '#42424266' : '#424242e6'
        },
        'top':{
            backgroundColor:'#42424200'
        }
    }

    return(
        <header className='page-header'>
            <motion.nav className='page__navbar' animate={navbarAnimations[navbarStatus]} transition={{type:'tween'}}>
                <div className='page__navbar-lang'>
                    EN
                </div>
                <ul className="page__navbar-list">
                    <li className="page__navbar-list__item">
                        <a href="#home">
                            HOME
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#skills">
                            SKILLS
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
                <div className="page__navbar-icon" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <MdOutlineMenu/>
                </div>
            </motion.nav>
            <motion.aside className="page__sidebar" animate={{width: isOpenSidebar ? '17.5rem' : '0vw'}}>
                <div className="page__sidebar-icon" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                    <MdOutlineClose/>
                </div>
                <ul className="page__sidebar-list">
                    <li className="page__sidebar-list__item">
                        <a href="#home">
                            HOME
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#skills">
                            SKILLS
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </motion.aside>
        </header>
    );
}

export default Navbar;