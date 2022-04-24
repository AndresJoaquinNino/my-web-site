import './App.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='page'>
                <Navbar/>
                <Hero/>
            </div>
        </div>
    );
}
export default App;
