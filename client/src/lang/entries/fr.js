import appLocaleData from 'react-intl/locale-data/fr';
const enMessages = require("../locales/en_fr")

const FrLang = {
    messages: {
        ...enMessages
    },
    locale: 'fr-FR',
    data: appLocaleData
};
export default FrLang;