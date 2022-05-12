import './Navbar.scss';
import { motion, useViewportScroll } from 'framer-motion';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t : translate } = useTranslation("global");
    const navigate = useNavigate();

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const defaultNavStatus = scrollYProgress.current < 0.01 ? 'top' : 'up';
    const [navbarStatus, setNavbarStatus] = useState(defaultNavStatus);

    const closeSideBar = () => {
        setIsOpenSidebar(false)
    }

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
                <select className='page__navbar-lang' onChange={({target}) => (navigate(target.value))}>
                        <option value='/'>ES</option>
                        <option value='/en'>EN</option>
                </select>
                <ul className="page__navbar-list">
                    <li className="page__navbar-list__item">
                        <a href="#home">
                            { translate("navbar.hero") }
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#about">
                            { translate("navbar.about") }
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#skills">
                            { translate("navbar.skills") }
                        </a>
                    </li>
                    <li className="page__navbar-list__item">
                        <a href="#contact">
                        { translate("navbar.contact") }
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
                        <a href="#home" onClick={closeSideBar}>
                            { translate("navbar.hero") }
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#about" onClick={closeSideBar}>
                            { translate("navbar.about") }
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#skills" onClick={closeSideBar}>
                            { translate("navbar.skills") }
                        </a>
                    </li>
                    <li className="page__sidebar-list__item">
                        <a href="#contact" onClick={closeSideBar}>
                            { translate("navbar.contact") }
                        </a>
                    </li>
                </ul>
            </motion.aside>
        </header>
    );
}

export default Navbar;