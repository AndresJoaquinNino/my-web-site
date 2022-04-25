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
            <form className='page__contact__form'>
                <input type="text" className="page__contact__form-input" placeholder='Name'/>
                <input type="text" className="page__contact__form-input" placeholder='Email'/>
                <textarea className="page__contact__form-area" placeholder='Message'/>
                <button className='btn btn--primary btn--full'>
                    <span>Send</span>
                    <MdSend/>
                </button>
            </form>
            <div className='page__contact__icons'>
                <FaLinkedin/>
                <FaGithub/>
                <MdEmail className='page__contact__icons-bigger'/>
            </div>
        </div>
    );
}

export default Contact;