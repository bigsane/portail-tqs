import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NAVS from '../constants/nav'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const NavBar = () => {
    const { t } = useTranslation()
    return (
        <Navbar expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand href='#home'>TQS - TechQuartet Services</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav id='tqs-navbar' className='justify-content-end'>
                        {NAVS.map(({ key, menuanchor, title }) => (
                            <Nav.Link key={key} data-menuanchor={menuanchor} href={key}>
                                {t(title)}
                            </Nav.Link>
                        ))}

                        <LanguageSwitcher />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
