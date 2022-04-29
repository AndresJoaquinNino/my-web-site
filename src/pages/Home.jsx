import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Home = ({lang}) => {
    const { i18n } = useTranslation("global");
    useEffect(() => {
        i18n.changeLanguage(lang)
    },[lang])

    return (
        <div className='wrapper'>
            <div className='page'>
                <Navbar/>
                <Hero/>
            </div>
            <div className="gradient-bg">
                <div className="page">
                    <About/>
                    <Skills/>
                </div>
            </div>
            <div className='page'>
                <Contact/>
            </div>
        </div>
    );
}
export default Home;
