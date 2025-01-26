
import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import './LanguageSwitch.css'

const LanguageSwitch =() => {
    const{toggleLanguage, translations} = useContext(LanguageContext)
return (
    <button className='language-switch' onClick={toggleLanguage}>
        {translations.switchLanguage}
    </button>
)
}

export default LanguageSwitch;