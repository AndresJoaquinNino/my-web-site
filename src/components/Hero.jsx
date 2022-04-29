import './Hero.scss';
import Typewriter from 'typewriter-effect';
import codeText from '../helpers/codeText';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const {t:text, i18n} = useTranslation("global");

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
                    <h1 className='page__hero-content__header-text'>{ text('hero.header') }</h1>
                    <hr className='divider-primary'/>
                    <p>{ text('hero.paragraph') }</p>
                </header>
                <div className="page__hero-content__code">
                    <motion.div className='transparent-box'
                    animate='animation' transition='transition' variants={typewriterVariant}>
                        <Typewriter onInit={typewriterInit} options={typewriterOptions}/>
                    </motion.div>
                </div>
            </div>
            <div className='page__hero-cta'>
                <button className='btn btn--secondary-transp'>{ text('hero.btnResume') }</button>
                <button className='btn btn--primary'>{ text('hero.btnContact') }</button>
            </div>
        </main>
    );
}
export default Hero;
