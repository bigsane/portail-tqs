import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NAVS from '../constants/nav';
import Logo from './logo/logo';

const NavBar = () => {
    return (
        <Navbar expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand href='#home'>
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav id='tqs-navbar' className='justify-content-end'>
                        {NAVS.map(({ key, menuanchor, title }) => (
                            <Nav.Link key={key} data-menuanchor={menuanchor} href={key}>
                                {title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
