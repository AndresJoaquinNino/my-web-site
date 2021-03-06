import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import spanish from './translations/spanish.json';
import english from './translations/english.json';
import { HelmetProvider } from 'react-helmet-async';
import { NotificationsProvider } from './context/NotificationsContext';

i18next.init({
    interpolation: {
        escapeValue: false
    },
    lng: 'es',
    resources:{
        es: {
            global: spanish
        },
        en: {
            global: english
        }
    }
})

const App = () => {
    return (
        <I18nextProvider i18n={i18next}>
            <HelmetProvider>
                <NotificationsProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home lang='es'/>}/>
                            <Route path="/en" element={<Home lang='en'/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </NotificationsProvider>
            </HelmetProvider>
        </I18nextProvider>
    );
}
export default App;
