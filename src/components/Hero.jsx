import './Hero.scss';
import Typewriter from 'typewriter-effect';
import codeText from '../helpers/codeText';

const Hero = () => {

    const typewriterInit = (typewriter) => {
        typewriter.typeString(codeText).start();
    }

    const typewriterOptions = {
        autoStart: true,
        cursor: '_',
        delay: 25,
    }

    return (
        <main className='page__hero'>
            <div className='page__hero-content'>
                <header className='page__hero-content__header gradient-text'>
                    <h1>Hello,</h1>
                    <h1>I'am Andrés J. Niño,</h1>
                    <h1>Desarrollador Web</h1>
                    <hr className='divider-primary'/>
                    <p>
                        Passionate for the frontend, creating awesome web sites for all internet.
                    </p>
                </header>
                <div className="page__hero-content__code">
                    <div className='transparent-box'>
                        <Typewriter onInit={typewriterInit} options={typewriterOptions}/>
                    </div>
                </div>
            </div>
            <div className='page__hero-cta'>
                <button className='btn btn--secondary-transp'>Contact me</button>
                <button className='btn btn--primary'>My Resume</button>
            </div>
        </main>
    );
}
export default Hero;
