import './NotFound.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return(
        <>
        <Helmet>
            <title> 404 / Not Found </title>
        </Helmet>
        <div className='wrapper'>
            <div className='page'>
                <div className="page__not-found">
                    <header className='page__not-found-header'>
                        <h1 className='gradient-text'>
                            404 / Not Found
                        </h1>
                        <hr className="divider-primary mb-2" />
                    </header>
                    <Link className='btn btn--secondary-transp' to='/'>Go Home</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default NotFound;