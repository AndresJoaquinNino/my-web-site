import './About.scss';
import profilePhoto from './../assets/profilePhoto.jpg';

const About = () => {
    return(
        <div className='page__about' id='about'>
            <header className="page__about-header">
                <h1 className='gradient-text'>About me</h1>
                <hr className='divider-primary'/>
            </header>
            <div className="page__about-content">
                <p className="page__about-content__text transparent-box">
                    Siempre me ha gustado la tecnología, en la medida que conozco más de ella y con el pasar del tiempo ese gusto se ha convertido en amor. Eventualmente estudié Ingeniería electrónica en computación, y en paralelo aprendí de desarrollo web. Una vez graduado comencé a trabajar en la industria del software, desde entonces me enfoco en cada día ser mejor profesional y mejor persona.
                </p>
                <div className="page__about-content__photo">
                    <img src={profilePhoto} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;