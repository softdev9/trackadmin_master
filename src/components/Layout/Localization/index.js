import React from 'react';
import { connect } from 'react-redux';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import english from '../../../locales/en-US';
import french from '../../../locales/fr-FR';
import russian from '../../../locales/ru-RU';
import chinese from '../../../locales/zh-CN';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en'; // locale-data for en
import '@formatjs/intl-pluralrules/dist/locale-data/fr'; // locale-data for fr
import '@formatjs/intl-pluralrules/dist/locale-data/ru'; // locale-data for ru
import '@formatjs/intl-pluralrules/dist/locale-data/zh'; // locale-data for zh

const locales = {
    'en-US': english,
    'fr-FR': french,
    'ru-RU': russian,
    'zh-CN': chinese,
}

@connect(({ settings }) => ({ settings }))
class Localization extends React.Component {
  render() {
    const {
        children,
        settings: { locale },
    } = this.props

    const currentLocale = locales[locale]

    return (
        <LocaleProvider locale={currentLocale.antdData}>
            <IntlProvider locale={currentLocale.localeData} messages={currentLocale.messages}>
                {children}
            </IntlProvider>
        </LocaleProvider>
    )
  }
}

export default Localization