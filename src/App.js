import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
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
        </div>
    );
}
export default App;
