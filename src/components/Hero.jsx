import './Hero.scss';
import Typewriter from 'typewriter-effect';
import codeText from '../helpers/codeText';
import { motion } from 'framer-motion';

const Hero = () => {

    const typewriterInit = (typewriter) => {
        typewriter.pauseFor(1000).typeString(codeText).start();
    }

    const typewriterOptions = {
        autoStart: true,
        cursor: '_',
        delay: 25,
    }

    const typewriterVariant = {
        animation : {
            height:['20%','20%','100%'],
            width:['10%','100%','100%']
        },
        transition : {
            duration:1
        }
    }

    return (
        <main className='page__hero' id='home'>
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
                    <motion.div className='transparent-box'
                    animate='animation' transition='transition' variants={typewriterVariant}>
                        <Typewriter onInit={typewriterInit} options={typewriterOptions}/>
                    </motion.div>
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
