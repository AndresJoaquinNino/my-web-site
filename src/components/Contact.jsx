import './Contact.scss'
import { FaGithub, FaLinkedin  } from 'react-icons/fa'
import { MdSend, MdEmail, MdLoop } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'
import { useState,useContext } from 'react'
import { motion } from 'framer-motion'
import { sendContactData } from '../helpers/fetch'
import { NotificationsContext } from '../context/NotificationsContext';


const Contact = () => {
    const { t : translate } = useTranslation('global')

    const { notifications, addNotification } = useContext(NotificationsContext);


    const [isSending, setIsSending] = useState(false)

    const handlerSubmit = async (values) => {
        setIsSending(true)
        const URL_MAIL_SERVICE = process.env.REACT_APP_MAILER_SERVICE
        const [result] = await sendContactData(URL_MAIL_SERVICE,values)
        const newNotification = {
            id : notifications.length,
            message : result ? result.message : 'Error sending data',
            type : result ? 'success' : 'error',
        }
        addNotification(newNotification)
        setIsSending(false)
    }


    const validateForm = (values) => {
        const errors = {}
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if(!emailRegex.test(values.email)) errors.email = '* Invalid email address'
        const maxLength = {
            name : 50,
            email : 100,
            subject : 50,
            message : 500
        }
        for (const field in values){
            if(values[field].length > maxLength[field]) errors[field] = `* Max length exceded (${maxLength[field]})`
            if(values[field].trim() === '') errors[field] = '* Required'
        }
        return errors
    }

    return (
        <>
        <div className='page__contact' id='contact'>
            <header className='gradient-text'>
                <h1>{ translate('contact.header') }</h1>
                <hr className='divider-secondary' />
            </header>
            <Formik
                initialValues={{name:'', subject:'', email:'', message:''}}
                validate={validateForm}
                onSubmit={handlerSubmit}
            >
                <Form className='form'>
                    <div className='form__group'>
                        <Field type='text' name='name' className='form__group-input'
                        placeholder={translate('contact.inputName')}/>
                        <ErrorMessage name='name' className='form__group-msg'/>
                    </div>
                    <div className='form__group'>
                        <Field type='text' name='subject' className='form__group-input' placeholder={translate('contact.inputSubject')}/>
                        <ErrorMessage name='subject' className='form__group-msg'/>
                    </div>
                    <div className='form__group'>
                        <Field type='email' name='email' className='form__group-input' placeholder={translate('contact.inputEmail')}/>
                        <ErrorMessage name='email' className='form__group-msg'/>
                    </div>
                    <div className='form__group form__group--area'>
                        <Field as='textarea' name='message' className='form__group-area' placeholder={translate('contact.inputMessage')}/>
                        <ErrorMessage name='message' className='form__group-msg'/>
                    </div>
                    <button type='submit' className='btn btn--primary btn--full' disabled={isSending}>
                        {
                            isSending
                            ? <motion.div className='row m-0' animate={{rotate: [360,0]}}
                            transition={{ duration: 1, ease: "linear", repeat: Infinity,}}>
                                    <MdLoop/>
                              </motion.div>
                            : <> <h4>{ translate('contact.button') }</h4> <MdSend/> </>
                        }
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
        </>
    )
}

export default Contact