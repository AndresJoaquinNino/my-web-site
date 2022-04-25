import './Contact.scss';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdSend, MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='page__contact'>
            <header className='gradient-text'>
                <h1>Contact me</h1>
                <hr className="divider-secondary" />
            </header>
            <form className='form'>
                <div className="form__group">
                    <input type="text" className="form__group-input" placeholder='Name'/>
                    <span className='form__group-msg'> * El nombre no puede estar en blanco</span>
                </div>
                <div className="form__group">
                    <input type="email" className="form__group-input" placeholder='Email'/>
                    <span className='form__group-msg'> * El formato no es correcto</span>
                </div>
                <div className="form__group form__group--area">
                    <textarea className="form__group-area" placeholder='Message'/>
                    <span className='form__group-msg'> * El mensaje no puede estar en blanco</span>
                </div>
                <button className='btn btn--primary btn--full'>
                    <span>Send</span>
                    <MdSend/>
                </button>
            </form>
            <div className='page__contact__icons'>
                <a href="https://www.linkedin.com/in/andr%C3%A9s-joaquin-ni%C3%B1o-rodil/">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/AndresJoaquinNino">
                    <FaGithub/>
                </a>
                <a href="mailto:andresninorodil@gmail.com">
                    <MdEmail className='page__contact__icons-bigger'/>
                </a>
            </div>
        </div>
    );
}

export default Contact;