import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import FrLang from './entries/fr';
import esLang from './entries/es-ES';
import enRtlLang from './entries/en-US-rtl';


const AppLocale = {
    en: enLang,
    es: esLang,
    enrtl:enRtlLang,
    fr:FrLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.enrtl.data);
addLocaleData(AppLocale.fr.data);
export default AppLocale;
