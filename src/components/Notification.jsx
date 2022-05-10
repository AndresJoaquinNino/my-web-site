import './Notification.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from 'react-icons/md'

const Notification = ({ type, message, close, index }) => {
    return(
        <AnimatePresence>
            <motion.div className={`notification ${type === 'error' ? 'notification--error' : ''}`}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
                <div className='notification-message'>
                    { message }
                </div>
                <div className='notification-close' onClick={() => close(index)}>
                    <MdClose/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Notification