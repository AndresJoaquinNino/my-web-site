import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
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
