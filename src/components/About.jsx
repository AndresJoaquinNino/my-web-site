import './About.scss';
import profilePhoto from './../assets/profilePhoto.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t : translate } = useTranslation("global");

    return(
        <div className='page__about' id='about'>
            <header className="page__about-header">
                <h1 className='gradient-text'>
                    { translate("about.header") }
                </h1>
                <hr className='divider-primary'/>
            </header>
            <div className="page__about-content">
                <p className="page__about-content__text transparent-box">
                    { translate("about.paragraph") }
                </p>
                <div className="page__about-content__photo">
                    <img src={profilePhoto} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;