import Container from 'react-bootstrap/Container'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './logo/logo'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NAVS from '../constants/nav'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const { t } = useTranslation()
    return (
        <Navbar expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand href='#home'>
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
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
