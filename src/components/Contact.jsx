import './Contact.scss';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';
import { MdSend, MdEmail } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t : translate } = useTranslation("global");

    const validateForm = (values) => {
        const errors = {};
        for (const field in values){
            if(values[field].trim() === '') errors[field] = '* Required'
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emailRegex.test(values.email)) errors.email = '* Invalid email address'
        return errors;
    }

    return (
        <div className='page__contact' id='contact'>
            <header className='gradient-text'>
                <h1>{ translate("contact.header") }</h1>
                <hr className='divider-secondary' />
            </header>
            <Formik
                initialValues={{name:'',email:'',text:''}}
                validate={validateForm}
                onSubmit={value => console.log(value)}
            >
                <Form className='form'>
                    <div className='form__group'>
                        <Field type='text' name='name' className='form__group-input' placeholder={translate("contact.inputName")}/>
                        <ErrorMessage name='name' className='form__group-msg'/>
                    </div>
                    <div className='form__group'>
                        <Field type='email' name='email' className='form__group-input' placeholder={translate("contact.inputEmail")}/>
                        <ErrorMessage name='email' className='form__group-msg'/>
                    </div>
                    <div className='form__group form__group--area'>
                        <Field as='textarea' name='text' className='form__group-area' placeholder={translate("contact.inputMessage")}/>
                        <ErrorMessage name='text' className='form__group-msg'/>
                    </div>
                    <button type='submit' className='btn btn--primary btn--full'>
                        <span>{ translate("contact.button") }</span>
                        <MdSend/>
                    </button>
                </Form>
            </Formik>
            <div className='page__contact__icons'>
                <a href='https://www.linkedin.com/in/andr%C3%A9s-joaquin-ni%C3%B1o-rodil/'>
                    <FaLinkedin/>
                </a>
                <a href='https://github.com/AndresJoaquinNino'>
                    <FaGithub/>
                </a>
                <a href='mailto:andresninorodil@gmail.com'>
                    <MdEmail className='page__contact__icons-bigger'/>
                </a>
            </div>
        </div>
    );
}

export default Contact;