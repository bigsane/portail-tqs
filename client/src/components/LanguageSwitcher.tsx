import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation()

    return (
        <NavDropdown title={language.toUpperCase()} menuVariant='dark'>
            <NavDropdown.Item eventKey='fr' onClick={() => changeLanguage('fr')}>
                FR
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey='en' onClick={() => changeLanguage('en')}>
                EN
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default LanguageSwitcher