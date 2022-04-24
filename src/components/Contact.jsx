import './Contact.scss';

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
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;