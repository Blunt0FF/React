import {createContext, useState} from 'react';

export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState('ru')

    const translations = {
        ru:{
            title: 'Список',
            addButton: 'Добавить',
            placeholder: 'Введите имя',
            switchLanguage: 'Switch to English'
        },
        en:{
            title: 'List',
            addButton: 'Add',
            placeholder: 'Enter name',
            switchLanguage: 'Переключить на русский'
        },
    }

    const toggleLanguage = () => {
        setCurrentLanguage(prev=> prev === 'ru' ? 'en' : 'ru')
    }
    return (
<LanguageContext.Provider value={{
    currentLanguage,
    toggleLanguage,
    translations: translations[currentLanguage]
}}>
    {children}
</LanguageContext.Provider>
    )
}

