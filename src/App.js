import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='page'>
                <Navbar/>
                <Hero/>
            </div>
            <div className="page gradient-bg">

            </div>
        </div>
    );
}
export default App;
