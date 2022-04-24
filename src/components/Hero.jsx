import './Hero.scss';

const Hero = () => {
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
                <div className="page__hero-content__code transparent-box">
                    const Awesome = 0;
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
