import { en } from './en';

export const getTranslationsForLocale = (locale: string) => {
    const translationsMap: {[key: string]: {}} = {
        'en-us': en
    }

    return translationsMap[locale] || null;
};
